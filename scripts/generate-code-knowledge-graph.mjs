import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const outputDir = path.join(root, 'docs', 'code-knowledge-graph');
const graphPath = path.join(outputDir, 'ecpho.code-knowledge-graph.json');
const graphDataPath = path.join(outputDir, 'ecpho.code-knowledge-graph.data.js');
const overviewPath = path.join(outputDir, 'OVERVIEW.md');
const graphVersion = '1.0.0';

const ignoredDirs = new Set([
  '.claude',
  '.git',
  '.idea',
  '.next',
  '.nuxt',
  '.venv',
  '.vscode',
  'build',
  'coverage',
  'docs',
  'dist',
  'node_modules',
  'out',
  'tmp',
  'vendor',
]);

const excludedRelativePaths = new Set([
  'package-lock.json',
  'scripts/generate-code-knowledge-graph.mjs',
]);

const scannedExtensions = new Set([
  '.css',
  '.cjs',
  '.html',
  '.js',
  '.json',
  '.jsx',
  '.mjs',
  '.ts',
  '.tsx',
  '.txt',
  '.xml',
]);

const knownConfigFiles = new Set([
  '.env',
  '.env.example',
  'metadata.json',
  'package-lock.json',
  'package.json',
  'run.cmd',
  'tsconfig.json',
  'vercel.json',
  'vite.config.ts',
]);

const knownConfigBasenames = new Set([
  '_headers',
  'robots.txt',
  'sitemap.xml',
]);

const dbLibraryHints = [
  'drizzle',
  'kysely',
  'knex',
  'mongodb',
  'mongoose',
  'mysql',
  'pg',
  'postgres',
  'prisma',
  'redis',
  'sequelize',
  'sqlite',
  'supabase',
  'typeorm',
];

const securityPattern = /\b(auth|token|session|cookie|csrf|permission|admin|security|sanitize|csp|content-security-policy|x-frame-options|referrer-policy|permissions-policy|helmet|oauth|jwt)\b/i;
const dbPattern = /\b(select|insert|update|delete|save|create|find|query|transaction|prisma|mongoose|supabase|sql)\b/i;

const graph = {
  nodes: [],
  edges: [],
  meta: {},
};

const nodeMap = new Map();
const edgeKeys = new Set();
const edgeStats = new Map();
const fileInfos = new Map();

function normalizeSlashes(value) {
  return value.replace(/\\/g, '/');
}

function relPath(absPath) {
  return normalizeSlashes(path.relative(root, absPath));
}

function extname(filePath) {
  return path.extname(filePath).toLowerCase();
}

function languageForFile(filePath) {
  const ext = extname(filePath);
  switch (ext) {
    case '.ts':
    case '.tsx':
      return 'typescript';
    case '.js':
    case '.jsx':
    case '.mjs':
    case '.cjs':
      return 'javascript';
    case '.html':
      return 'html';
    case '.css':
      return 'css';
    case '.json':
      return 'json';
    case '.xml':
      return 'xml';
    case '.txt':
      return 'text';
    case '.cmd':
      return 'batch';
    default:
      return 'text';
  }
}

function isConfigFile(absPath) {
  const base = path.basename(absPath);
  const relative = relPath(absPath);
  return knownConfigFiles.has(base) || knownConfigBasenames.has(base) || relative.startsWith('.github/');
}

function classifyFile(absPath) {
  const relative = relPath(absPath);
  const base = path.basename(absPath);
  const extension = extname(absPath);
  const language = languageForFile(absPath);
  const technicalKinds = [];
  let type = 'file';
  let description = `Source file ${relative}.`;
  let tags = [];

  if (isConfigFile(absPath)) {
    type = 'config';
    description = `Configuration or deployment file ${relative}.`;
    technicalKinds.push('configuration');
  } else if (extension === '.html') {
    type = 'template';
    description = `HTML shell or template ${relative}.`;
    technicalKinds.push('html-shell');
  } else if (extension === '.css') {
    type = 'style';
    description = `Style sheet ${relative}.`;
    technicalKinds.push('styles');
  } else if (relative.startsWith('src/pages/')) {
    description = `Page module ${relative}.`;
    technicalKinds.push('page');
  } else if (relative.startsWith('src/layouts/')) {
    description = `Layout module ${relative}.`;
    technicalKinds.push('layout');
  } else if (relative.startsWith('src/components/ui/')) {
    description = `Reusable UI component module ${relative}.`;
    technicalKinds.push('ui');
  } else if (relative.startsWith('src/components/sections/')) {
    description = `Homepage or section component module ${relative}.`;
    technicalKinds.push('section');
  } else if (relative.startsWith('src/components/')) {
    description = `Component module ${relative}.`;
    technicalKinds.push('component');
  } else if (relative.startsWith('src/data/')) {
    description = `Static data module ${relative}.`;
    technicalKinds.push('data');
  } else if (relative.startsWith('src/utils/')) {
    description = `Utility module ${relative}.`;
    technicalKinds.push('utility');
  } else if (base === 'server.ts') {
    description = 'Express runtime entry for local dev and production static serving.';
    technicalKinds.push('server');
  } else {
    technicalKinds.push('source');
  }

  if (base === 'package.json') {
    tags.push('scripts');
  }
  if (base === 'vercel.json' || base === '_headers') {
    tags.push('security-headers');
  }
  if (base === 'index.html') {
    tags.push('spa-shell');
  }

  return { type, description, technicalKinds, tags, extension, language };
}

function nodeId(type, relativePath, name = '') {
  return `${type}:${relativePath}${name ? `#${name}` : ''}`;
}

function addNode(node) {
  const existing = nodeMap.get(node.id);
  if (existing) {
    return existing;
  }
  const normalized = {
    parentId: null,
    description: '',
    tags: [],
    technicalKinds: [],
    riskLevel: 'low',
    isEntryPoint: false,
    isSecurityRelated: false,
    isDatabaseRelated: false,
    hasManyDependencies: false,
    isOrphan: false,
    dependencyCount: 0,
    dependentCount: 0,
    learningNotes: [],
    suggestedTests: [],
    securityNotes: [],
    ...node,
  };
  normalized.tags = unique(normalized.tags);
  normalized.technicalKinds = unique(normalized.technicalKinds);
  normalized.learningNotes = unique(normalized.learningNotes);
  normalized.suggestedTests = unique(normalized.suggestedTests);
  normalized.securityNotes = unique(normalized.securityNotes);
  nodeMap.set(normalized.id, normalized);
  graph.nodes.push(normalized);
  return normalized;
}

function unique(values) {
  return [...new Set((values || []).filter(Boolean))];
}

function addEdge(edge) {
  const key = [
    edge.source,
    edge.target,
    edge.type,
    edge.label || '',
    edge.description || '',
  ].join('|');
  if (edgeKeys.has(key)) {
    return;
  }
  edgeKeys.add(key);
  graph.edges.push({
    confidence: 'high',
    ...edge,
  });
}

function createFileNode(absPath) {
  const relative = relPath(absPath);
  const { type, description, technicalKinds, tags, extension, language } = classifyFile(absPath);
  const base = path.basename(absPath);
  return addNode({
    id: nodeId(type, relative),
    label: base,
    type,
    path: relative,
    language,
    extension,
    description,
    tags,
    technicalKinds,
    isEntryPoint: base === 'server.ts' || base === 'index.html' || relative === 'src/main.tsx',
  });
}

function collectFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) {
      continue;
    }
    const absPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(absPath));
      continue;
    }
    const extension = extname(absPath);
    if (scannedExtensions.has(extension) || knownConfigFiles.has(entry.name) || knownConfigBasenames.has(entry.name)) {
      results.push(absPath);
    }
  }
  return results;
}

function resolveLocalImport(importPath, fromAbsPath) {
  if (!importPath) {
    return null;
  }
  let candidateBase = null;
  if (importPath.startsWith('.')) {
    candidateBase = path.resolve(path.dirname(fromAbsPath), importPath);
  } else if (importPath.startsWith('@/')) {
    candidateBase = path.resolve(root, importPath.slice(2));
  } else if (importPath.startsWith('/')) {
    candidateBase = path.resolve(root, `.${importPath}`);
  } else {
    return null;
  }

  const candidates = [
    candidateBase,
    `${candidateBase}.ts`,
    `${candidateBase}.tsx`,
    `${candidateBase}.js`,
    `${candidateBase}.jsx`,
    `${candidateBase}.json`,
    `${candidateBase}.css`,
    `${candidateBase}.html`,
    path.join(candidateBase, 'index.ts'),
    path.join(candidateBase, 'index.tsx'),
    path.join(candidateBase, 'index.js'),
    path.join(candidateBase, 'index.jsx'),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return path.resolve(candidate);
    }
  }
  return null;
}

function scriptKindForFile(absPath) {
  const ext = extname(absPath);
  switch (ext) {
    case '.ts':
      return ts.ScriptKind.TS;
    case '.tsx':
      return ts.ScriptKind.TSX;
    case '.jsx':
      return ts.ScriptKind.JSX;
    case '.js':
    case '.mjs':
    case '.cjs':
      return ts.ScriptKind.JS;
    default:
      return ts.ScriptKind.TS;
  }
}

function containsJsx(node) {
  let found = false;
  const visit = (child) => {
    if (
      ts.isJsxElement(child) ||
      ts.isJsxFragment(child) ||
      ts.isJsxSelfClosingElement(child)
    ) {
      found = true;
      return;
    }
    ts.forEachChild(child, visit);
  };
  visit(node);
  return found;
}

function isPascalCase(name) {
  return /^[A-Z][A-Za-z0-9]*$/.test(name || '');
}

function getModifierTexts(node) {
  return new Set((node.modifiers || []).map((modifier) => modifier.getText()));
}

function getVariableStatementForDeclaration(node) {
  if (!ts.isVariableDeclaration(node)) {
    return null;
  }
  const declarationList = node.parent;
  if (!declarationList || !ts.isVariableDeclarationList(declarationList)) {
    return null;
  }
  const statement = declarationList.parent;
  return statement && ts.isVariableStatement(statement) ? statement : null;
}

function hasExportModifier(node) {
  const modifiers = getModifierTexts(node);
  return modifiers.has('export') || modifiers.has('default');
}

function roleForFunction(name, filePath, text) {
  const lower = `${name} ${filePath} ${text}`.toLowerCase();
  if (/\b(auth|login|logout|permission|token|session)\b/.test(lower)) {
    return 'auth';
  }
  if (/\b(validate|sanitize|parse)\b/.test(lower)) {
    return 'validation';
  }
  if (/\b(render|layout|hero|page|head|schema|scroll|navigate)\b/.test(lower)) {
    return 'rendering';
  }
  if (/\b(fetch|query|db|database|sql|save|update|delete|insert)\b/.test(lower)) {
    return 'db';
  }
  return 'helper';
}

function createDefinitionNode(fileInfo, options) {
  const relative = fileInfo.relativePath;
  const label = options.label || options.name;
  const id = nodeId(options.type, relative, options.nodeKey || options.name);
  const technicalKinds = [...(options.technicalKinds || [])];
  const tags = [...(options.tags || [])];
  if (options.type === 'component') {
    if (relative.startsWith('src/pages/')) {
      technicalKinds.push('page-component');
    } else if (relative.startsWith('src/layouts/')) {
      technicalKinds.push('layout-component');
    } else if (relative.startsWith('src/components/ui/')) {
      technicalKinds.push('ui-component');
    } else if (relative.startsWith('src/components/sections/')) {
      technicalKinds.push('section-component');
    } else {
      technicalKinds.push('component');
    }
  }
  const node = addNode({
    id,
    label,
    type: options.type,
    path: relative,
    parentId: options.parentId || fileInfo.fileNodeId,
    language: fileInfo.language,
    extension: fileInfo.extension,
    description: options.description,
    tags,
    technicalKinds,
    functionRole: options.functionRole,
  });
  addEdge({
    source: fileInfo.fileNodeId,
    target: node.id,
    type: 'defines',
    label: 'defines',
    description: `${path.basename(relative)} defines ${label}.`,
  });
  return node;
}

function isFunctionLikeInitializer(initializer) {
  return initializer && (ts.isArrowFunction(initializer) || ts.isFunctionExpression(initializer));
}

function createRouteNode(fileInfo, pathValue, httpMethod, description, extra = {}) {
  const sanitizedPath = (pathValue || '*').replace(/\s+/g, '');
  const routeName = `${httpMethod} ${sanitizedPath}`;
  return createDefinitionNode(fileInfo, {
    name: routeName,
    nodeKey: `${httpMethod}:${sanitizedPath}`,
    label: routeName,
    type: 'api_route',
    description,
    technicalKinds: extra.technicalKinds || [],
    tags: extra.tags || [],
    parentId: fileInfo.fileNodeId,
  });
}

function createAnonymousRouteHandlerNode(fileInfo, routeNode, httpMethod, routePathValue, parentId) {
  return createDefinitionNode(fileInfo, {
    name: `${httpMethod}_${routePathValue}_handler`,
    nodeKey: `${httpMethod}:${routePathValue}:handler`,
    label: `${httpMethod} ${routePathValue} handler`,
    type: 'function',
    description: `Inline handler for route ${httpMethod} ${routePathValue}.`,
    technicalKinds: ['route-handler'],
    tags: ['inline-handler'],
    functionRole: 'helper',
    parentId,
  });
}

function propertyNameText(node) {
  if (ts.isIdentifier(node)) {
    return node.text;
  }
  if (ts.isStringLiteral(node) || ts.isNumericLiteral(node)) {
    return node.text;
  }
  return null;
}

function getJsxTagName(node) {
  if (ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) {
    return node.tagName.getText();
  }
  return null;
}

function getJsxAttributes(node) {
  if (!('attributes' in node)) {
    return new Map();
  }
  const map = new Map();
  for (const property of node.attributes.properties) {
    if (!ts.isJsxAttribute(property)) {
      continue;
    }
    const name = property.name.getText();
    let value = null;
    if (!property.initializer) {
      value = true;
    } else if (ts.isStringLiteral(property.initializer)) {
      value = property.initializer.text;
    } else if (ts.isJsxExpression(property.initializer)) {
      value = property.initializer.expression || null;
    }
    map.set(name, value);
  }
  return map;
}

function getElementInfoFromJsxExpression(expression) {
  if (!expression) {
    return null;
  }
  if (ts.isJsxSelfClosingElement(expression) || ts.isJsxElement(expression)) {
    const root = ts.isJsxSelfClosingElement(expression) ? expression : expression.openingElement;
    return {
      tagName: root.tagName.getText(),
      attributes: getJsxAttributes(root),
    };
  }
  return null;
}

function shouldRecordImportedIdentifier(node, fileInfo) {
  if (!ts.isIdentifier(node)) {
    return false;
  }
  if (!fileInfo.importBindings.has(node.text)) {
    return false;
  }
  const parent = node.parent;
  if (!parent) {
    return false;
  }
  if (
    ts.isImportClause(parent) ||
    ts.isImportSpecifier(parent) ||
    ts.isNamespaceImport(parent) ||
    ts.isPropertyAccessExpression(parent) && parent.name === node ||
    ts.isQualifiedName(parent) && parent.right === node ||
    ts.isVariableDeclaration(parent) && parent.name === node ||
    ts.isFunctionDeclaration(parent) && parent.name === node ||
    ts.isClassDeclaration(parent) && parent.name === node ||
    ts.isParameter(parent) && parent.name === node ||
    ts.isPropertyAssignment(parent) && parent.name === node ||
    ts.isShorthandPropertyAssignment(parent) ||
    ts.isJsxAttribute(parent)
  ) {
    return false;
  }
  return true;
}

function trackReference(fileInfo, reference) {
  fileInfo.references.push(reference);
}

function createFileInfo(absPath) {
  const relativePath = relPath(absPath);
  const fileNode = createFileNode(absPath);
  return {
    absPath,
    relativePath,
    fileNodeId: fileNode.id,
    language: languageForFile(absPath),
    extension: extname(absPath),
    importBindings: new Map(),
    localDefinitions: new Map(),
    exportedNames: new Map(),
    defaultExportNodeId: null,
    references: [],
    routeRedirects: [],
    dbSignals: new Set(),
  };
}

function registerLocalDefinition(fileInfo, name, details) {
  const bucket = fileInfo.localDefinitions.get(name) || [];
  bucket.push(details);
  fileInfo.localDefinitions.set(name, bucket);
}

function registerExport(fileInfo, exportedName, nodeIdValue) {
  if (!exportedName || !nodeIdValue) {
    return;
  }
  fileInfo.exportedNames.set(exportedName, nodeIdValue);
}

function parseScriptFile(fileInfo, text) {
  const sourceFile = ts.createSourceFile(
    fileInfo.absPath,
    text,
    ts.ScriptTarget.Latest,
    true,
    scriptKindForFile(fileInfo.absPath),
  );

  const sourceScope = {
    ownerId: fileInfo.fileNodeId,
    start: 0,
    end: text.length,
  };

  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement)) {
      continue;
    }
    const importPath = statement.moduleSpecifier && ts.isStringLiteral(statement.moduleSpecifier)
      ? statement.moduleSpecifier.text
      : null;
    if (!importPath) {
      continue;
    }
    const resolved = resolveLocalImport(importPath, fileInfo.absPath);
    if (resolved) {
      const targetInfo = fileInfos.get(resolved);
      if (targetInfo) {
        addEdge({
          source: fileInfo.fileNodeId,
          target: targetInfo.fileNodeId,
          type: 'imports',
          label: 'imports',
          description: `${path.basename(fileInfo.relativePath)} imports ${path.basename(targetInfo.relativePath)}.`,
        });
      }
    }

    const importClause = statement.importClause;
    if (!importClause || !resolved) {
      continue;
    }
    if (importClause.name) {
      fileInfo.importBindings.set(importClause.name.text, {
        localName: importClause.name.text,
        targetAbsPath: resolved,
        importedName: 'default',
        isDefault: true,
      });
    }
    if (importClause.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
      for (const specifier of importClause.namedBindings.elements) {
        const localName = specifier.name.text;
        const importedName = specifier.propertyName ? specifier.propertyName.text : specifier.name.text;
        fileInfo.importBindings.set(localName, {
          localName,
          targetAbsPath: resolved,
          importedName,
          isDefault: false,
        });
      }
    }
  }

  function visit(node, scope) {
    if (ts.isFunctionDeclaration(node) && node.name) {
      const name = node.name.text;
      const exported = hasExportModifier(node);
      const isComponent = isPascalCase(name) && containsJsx(node);
      const nodeType = isComponent ? 'component' : 'function';
      const functionText = node.getText(sourceFile);
      const createdNode = createDefinitionNode(fileInfo, {
        name,
        type: nodeType,
        description: isComponent
          ? `${name} ${fileInfo.relativePath.includes('/pages/') ? 'page' : 'component'} renders part of the UI.`
          : `${name} is a local function in ${path.basename(fileInfo.relativePath)}.`,
        technicalKinds: exported ? ['exported'] : ['local'],
        tags: exported ? ['exported'] : [],
        functionRole: nodeType === 'function' ? roleForFunction(name, fileInfo.relativePath, functionText) : 'rendering',
        parentId: scope.ownerId,
      });
      const childScope = {
        ownerId: createdNode.id,
        start: node.getStart(sourceFile),
        end: node.end,
      };
      registerLocalDefinition(fileInfo, name, { nodeId: createdNode.id, ...childScope, type: nodeType });
      if (exported) {
        registerExport(fileInfo, name, createdNode.id);
      }
      if (getModifierTexts(node).has('default')) {
        fileInfo.defaultExportNodeId = createdNode.id;
      }
      if (node.body) {
        visit(node.body, childScope);
      }
      return;
    }

    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && isFunctionLikeInitializer(node.initializer)) {
      const name = node.name.text;
      const statement = getVariableStatementForDeclaration(node);
      const exported = statement ? hasExportModifier(statement) : false;
      const initializer = node.initializer;
      const isComponent = isPascalCase(name) && containsJsx(initializer.body);
      const nodeType = isComponent ? 'component' : 'function';
      const functionText = initializer.getText(sourceFile);
      const createdNode = createDefinitionNode(fileInfo, {
        name,
        type: nodeType,
        description: isComponent
          ? `${name} ${fileInfo.relativePath.includes('/pages/') ? 'page' : 'component'} renders part of the UI.`
          : `${name} is a function assigned in ${path.basename(fileInfo.relativePath)}.`,
        technicalKinds: exported ? ['exported'] : ['local'],
        tags: exported ? ['exported'] : [],
        functionRole: nodeType === 'function' ? roleForFunction(name, fileInfo.relativePath, functionText) : 'rendering',
        parentId: scope.ownerId,
      });
      const childScope = {
        ownerId: createdNode.id,
        start: initializer.getStart(sourceFile),
        end: initializer.end,
      };
      registerLocalDefinition(fileInfo, name, { nodeId: createdNode.id, ...childScope, type: nodeType });
      if (exported) {
        registerExport(fileInfo, name, createdNode.id);
      }
      if (statement && getModifierTexts(statement).has('default')) {
        fileInfo.defaultExportNodeId = createdNode.id;
      }
      visit(initializer.body, childScope);
      return;
    }

    if (ts.isClassDeclaration(node) && node.name) {
      const name = node.name.text;
      const exported = hasExportModifier(node);
      const createdNode = createDefinitionNode(fileInfo, {
        name,
        type: 'class',
        description: `${name} class in ${path.basename(fileInfo.relativePath)}.`,
        technicalKinds: exported ? ['exported'] : ['local'],
        tags: exported ? ['exported'] : [],
        parentId: scope.ownerId,
      });
      const childScope = {
        ownerId: createdNode.id,
        start: node.getStart(sourceFile),
        end: node.end,
      };
      registerLocalDefinition(fileInfo, name, { nodeId: createdNode.id, ...childScope, type: 'class' });
      if (exported) {
        registerExport(fileInfo, name, createdNode.id);
      }
      ts.forEachChild(node, (child) => visit(child, childScope));
      return;
    }

    if ((ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) && getJsxTagName(node) === 'Route') {
      const attributes = getJsxAttributes(node);
      const routePathValue = typeof attributes.get('path') === 'string' ? attributes.get('path') : '*';
      const elementInfo = getElementInfoFromJsxExpression(attributes.get('element'));
      const routeNode = createRouteNode(
        fileInfo,
        routePathValue,
        'GET',
        `Client route ${routePathValue} declared in ${path.basename(fileInfo.relativePath)}.`,
        {
          technicalKinds: ['client-route'],
          tags: routePathValue === '*' ? ['not-found'] : [],
        },
      );
      routeNode.routePath = routePathValue;
      routeNode.httpMethod = 'GET';
      if (routePathValue === '/') {
        routeNode.isEntryPoint = true;
      }
      if (elementInfo?.tagName && elementInfo.tagName !== 'Navigate') {
        trackReference(fileInfo, {
          kind: 'route_to_handler',
          fromId: routeNode.id,
          name: elementInfo.tagName,
          position: node.getStart(sourceFile),
          confidence: 'high',
        });
      } else if (elementInfo?.tagName === 'Navigate') {
        const redirectTo = typeof elementInfo.attributes.get('to') === 'string' ? elementInfo.attributes.get('to') : null;
        if (redirectTo) {
          fileInfo.routeRedirects.push({ fromRouteId: routeNode.id, toPath: redirectTo });
          routeNode.tags = unique([...routeNode.tags, 'redirect']);
          routeNode.description = `Client route ${routePathValue} redirects to ${redirectTo}.`;
        }
      }
    }

    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      const receiver = node.expression.expression.getText(sourceFile);
      const method = node.expression.name.getText(sourceFile).toLowerCase();
      if ((receiver === 'app' || receiver === 'router') && ['get', 'post', 'put', 'patch', 'delete'].includes(method)) {
        const routePathArg = node.arguments[0];
        const handlerArg = node.arguments[node.arguments.length - 1];
        const routePathValue = routePathArg && ts.isStringLiteralLike(routePathArg) ? routePathArg.text : '*';
        const routeNode = createRouteNode(
          fileInfo,
          routePathValue,
          method.toUpperCase(),
          `Server route ${method.toUpperCase()} ${routePathValue} declared in ${path.basename(fileInfo.relativePath)}.`,
          { technicalKinds: ['server-route'] },
        );
        routeNode.routePath = routePathValue;
        routeNode.httpMethod = method.toUpperCase();
        if (handlerArg) {
          if (ts.isIdentifier(handlerArg)) {
            trackReference(fileInfo, {
              kind: 'route_to_handler',
              fromId: routeNode.id,
              name: handlerArg.text,
              position: node.getStart(sourceFile),
              confidence: 'high',
            });
          } else if (ts.isArrowFunction(handlerArg) || ts.isFunctionExpression(handlerArg)) {
            const handlerNode = createAnonymousRouteHandlerNode(
              fileInfo,
              routeNode,
              method.toUpperCase(),
              routePathValue,
              scope.ownerId,
            );
            addEdge({
              source: routeNode.id,
              target: handlerNode.id,
              type: 'route_to_handler',
              label: 'route_to_handler',
              description: `${routeNode.label} is handled by ${handlerNode.label}.`,
            });
            const childScope = {
              ownerId: handlerNode.id,
              start: handlerArg.getStart(sourceFile),
              end: handlerArg.end,
            };
            if (handlerArg.body) {
              visit(handlerArg.body, childScope);
            }
          }
        }
      }
    }

    if (ts.isCallExpression(node)) {
      let calleeName = null;
      if (ts.isIdentifier(node.expression)) {
        calleeName = node.expression.text;
      } else if (ts.isPropertyAccessExpression(node.expression) && ts.isIdentifier(node.expression.expression)) {
        calleeName = node.expression.expression.text;
      }
      if (calleeName) {
        trackReference(fileInfo, {
          kind: 'calls',
          fromId: scope.ownerId,
          name: calleeName,
          position: node.getStart(sourceFile),
          confidence: 'medium',
        });
      }
    }

    if (ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) {
      const tagName = getJsxTagName(node);
      if (tagName && isPascalCase(tagName) && tagName !== 'Route' && tagName !== 'Navigate' && tagName !== 'HelmetProvider' && tagName !== 'Helmet' && tagName !== 'Analytics') {
        trackReference(fileInfo, {
          kind: 'renders',
          fromId: scope.ownerId,
          name: tagName,
          position: node.getStart(sourceFile),
          confidence: 'high',
        });
      }
    }

    if (shouldRecordImportedIdentifier(node, fileInfo)) {
      trackReference(fileInfo, {
        kind: 'uses',
        fromId: scope.ownerId,
        name: node.text,
        position: node.getStart(sourceFile),
        confidence: 'medium',
      });
    }

    const textValue = node.getText(sourceFile);
    if (securityPattern.test(textValue)) {
      const owner = nodeMap.get(scope.ownerId);
      if (owner) {
        owner.isSecurityRelated = true;
      }
    }
    if (dbPattern.test(textValue)) {
      fileInfo.dbSignals.add(scope.ownerId);
    }

    ts.forEachChild(node, (child) => visit(child, scope));
  }

  visit(sourceFile, sourceScope);

  for (const statement of sourceFile.statements) {
    if (ts.isExportAssignment(statement) && ts.isIdentifier(statement.expression)) {
      const name = statement.expression.text;
      const matches = fileInfo.localDefinitions.get(name);
      if (matches?.length) {
        fileInfo.defaultExportNodeId = matches[matches.length - 1].nodeId;
      }
    }
  }
}

function parseHtmlFile(fileInfo, text) {
  const scriptMatches = [...text.matchAll(/<script[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  for (const match of scriptMatches) {
    const resolved = resolveLocalImport(match[1], fileInfo.absPath);
    if (!resolved) {
      continue;
    }
    const targetInfo = fileInfos.get(resolved);
    if (!targetInfo) {
      continue;
    }
    addEdge({
      source: fileInfo.fileNodeId,
      target: targetInfo.fileNodeId,
      type: 'uses',
      label: 'uses',
      description: `${path.basename(fileInfo.relativePath)} bootstraps ${path.basename(targetInfo.relativePath)}.`,
    });
  }
}

function parsePackageConfig(fileInfo, text) {
  try {
    const data = JSON.parse(text);
    const scripts = data.scripts || {};
    for (const scriptCommand of Object.values(scripts)) {
      if (typeof scriptCommand !== 'string') {
        continue;
      }
      const pathMatches = scriptCommand.match(/[\w./-]+\.(ts|tsx|js|jsx|cjs|mjs|html)/g) || [];
      for (const matched of pathMatches) {
        const resolved = resolveLocalImport(matched.startsWith('.') ? matched : `./${matched}`, fileInfo.absPath)
          || path.join(root, matched);
        if (!fs.existsSync(resolved)) {
          continue;
        }
        const targetInfo = fileInfos.get(path.resolve(resolved));
        if (!targetInfo) {
          continue;
        }
        addEdge({
          source: fileInfo.fileNodeId,
          target: targetInfo.fileNodeId,
          type: 'configures',
          label: 'configures',
          description: `package.json script references ${targetInfo.relativePath}.`,
        });
      }
    }
  } catch {
    // ignore malformed config
  }
}

function parseVercelConfig(fileInfo, text) {
  try {
    const data = JSON.parse(text);
    const rewrites = Array.isArray(data.rewrites) ? data.rewrites : [];
    for (const rewrite of rewrites) {
      if (rewrite?.destination === '/index.html') {
        const targetInfo = [...fileInfos.values()].find((info) => info.relativePath === 'index.html');
        if (targetInfo) {
          addEdge({
            source: fileInfo.fileNodeId,
            target: targetInfo.fileNodeId,
            type: 'configures',
            label: 'configures',
            description: `vercel.json rewrites requests to ${targetInfo.relativePath}.`,
          });
        }
      }
    }
  } catch {
    // ignore malformed config
  }
}

function parseGenericConfig(fileInfo, text) {
  if (path.basename(fileInfo.absPath) === 'package.json') {
    parsePackageConfig(fileInfo, text);
  }
  if (path.basename(fileInfo.absPath) === 'vercel.json') {
    parseVercelConfig(fileInfo, text);
  }
  if (securityPattern.test(text)) {
    const node = nodeMap.get(fileInfo.fileNodeId);
    if (node) {
      node.isSecurityRelated = true;
    }
  }
}

function resolveLocalDefinition(fileInfo, name, position) {
  const candidates = fileInfo.localDefinitions.get(name) || [];
  const viable = candidates
    .filter((candidate) => candidate.start <= position && position <= candidate.end)
    .sort((a, b) => (a.end - a.start) - (b.end - b.start));
  return viable[0] || candidates[candidates.length - 1] || null;
}

function resolveReferenceTarget(fileInfo, reference) {
  const importBinding = fileInfo.importBindings.get(reference.name);
  if (importBinding) {
    const targetFileInfo = fileInfos.get(importBinding.targetAbsPath);
    if (!targetFileInfo) {
      return null;
    }
    if (importBinding.isDefault && targetFileInfo.defaultExportNodeId) {
      return targetFileInfo.defaultExportNodeId;
    }
    if (!importBinding.isDefault && targetFileInfo.exportedNames.has(importBinding.importedName)) {
      return targetFileInfo.exportedNames.get(importBinding.importedName);
    }
    return targetFileInfo.fileNodeId;
  }
  const localDefinition = resolveLocalDefinition(fileInfo, reference.name, reference.position);
  return localDefinition?.nodeId || null;
}

function finalizeReferences() {
  for (const fileInfo of fileInfos.values()) {
    for (const reference of fileInfo.references) {
      const target = resolveReferenceTarget(fileInfo, reference);
      if (!target || target === reference.fromId) {
        continue;
      }
      const targetNode = nodeMap.get(target);
      if (!targetNode) {
        continue;
      }
      let edgeType = reference.kind;
      let description = `${reference.fromId} ${edgeType} ${targetNode.label}.`;
      if (reference.kind === 'uses' && (targetNode.type === 'component' || targetNode.type === 'function')) {
        continue;
      }
      if (reference.kind === 'renders' && targetNode.type !== 'component') {
        edgeType = 'uses';
      }
      if (reference.kind === 'route_to_handler') {
        description = `${nodeMap.get(reference.fromId)?.label || reference.fromId} is handled by ${targetNode.label}.`;
      } else if (reference.kind === 'calls') {
        description = `${nodeMap.get(reference.fromId)?.label || reference.fromId} calls ${targetNode.label}.`;
      } else if (edgeType === 'renders') {
        description = `${nodeMap.get(reference.fromId)?.label || reference.fromId} renders ${targetNode.label}.`;
      } else if (edgeType === 'uses') {
        description = `${nodeMap.get(reference.fromId)?.label || reference.fromId} uses ${targetNode.label}.`;
      }
      addEdge({
        source: reference.fromId,
        target,
        type: edgeType,
        label: edgeType,
        description,
        confidence: reference.confidence || 'medium',
      });
    }

    if (fileInfo.routeRedirects.length) {
      const routesByPath = new Map(
        graph.nodes
          .filter((node) => node.type === 'api_route' && typeof node.routePath === 'string')
          .map((node) => [node.routePath, node.id]),
      );
      for (const redirect of fileInfo.routeRedirects) {
        const targetRouteId = routesByPath.get(redirect.toPath);
        if (!targetRouteId) {
          continue;
        }
        addEdge({
          source: redirect.fromRouteId,
          target: targetRouteId,
          type: 'uses',
          label: 'redirects-to',
          description: `${nodeMap.get(redirect.fromRouteId)?.label || redirect.fromRouteId} redirects to ${nodeMap.get(targetRouteId)?.label || targetRouteId}.`,
          confidence: 'high',
        });
      }
    }
  }
}

function inferNodeSignals() {
  for (const node of graph.nodes) {
    const text = `${node.label} ${node.path} ${node.description} ${(node.tags || []).join(' ')} ${(node.technicalKinds || []).join(' ')}`;
    const lower = text.toLowerCase();
    if (securityPattern.test(lower)) {
      node.isSecurityRelated = true;
    }
    if (dbPattern.test(lower)) {
      node.isDatabaseRelated = true;
    }
    if (node.type === 'config' && /(vercel\.json|_headers)/.test(node.path)) {
      node.isSecurityRelated = true;
    }
    if (node.type === 'api_route' && /\b(post|put|patch|delete)\b/i.test(node.label)) {
      node.isDatabaseRelated = true;
    }
  }
}

function computeCountsAndRisk() {
  const outgoing = new Map();
  const incoming = new Map();
  const orphanRelevantIncoming = new Map();
  const orphanRelevantOutgoing = new Map();

  for (const node of graph.nodes) {
    outgoing.set(node.id, new Set());
    incoming.set(node.id, new Set());
    orphanRelevantIncoming.set(node.id, new Set());
    orphanRelevantOutgoing.set(node.id, new Set());
  }

  for (const edge of graph.edges) {
    outgoing.get(edge.source)?.add(edge.target);
    incoming.get(edge.target)?.add(edge.source);
    if (edge.type !== 'defines') {
      orphanRelevantOutgoing.get(edge.source)?.add(edge.target);
      orphanRelevantIncoming.get(edge.target)?.add(edge.source);
    }
    const targetStats = edgeStats.get(edge.target) || { calls: 0, renders: 0, handlers: 0 };
    if (edge.type === 'calls') {
      targetStats.calls += 1;
    }
    if (edge.type === 'renders') {
      targetStats.renders += 1;
    }
    if (edge.type === 'route_to_handler') {
      targetStats.handlers += 1;
    }
    edgeStats.set(edge.target, targetStats);
  }

  for (const node of graph.nodes) {
    node.dependencyCount = outgoing.get(node.id)?.size || 0;
    node.dependentCount = incoming.get(node.id)?.size || 0;
  }

  const dependencyValues = graph.nodes.map((node) => node.dependencyCount).sort((a, b) => a - b);
  const highDependencyThreshold = dependencyValues[Math.max(0, Math.floor(dependencyValues.length * 0.85) - 1)] || 4;

  for (const node of graph.nodes) {
    node.hasManyDependencies = node.dependencyCount >= Math.max(4, highDependencyThreshold);
    const relevantIncoming = orphanRelevantIncoming.get(node.id)?.size || 0;
    const relevantOutgoing = orphanRelevantOutgoing.get(node.id)?.size || 0;
    const externallyConsumedConfig =
      node.type === 'config' &&
      (
        node.path.startsWith('public/') ||
        [
          '.env.example',
          'metadata.json',
          'package.json',
          'run.cmd',
          'tsconfig.json',
          'vercel.json',
          'vite.config.ts',
        ].includes(node.path)
      );

    node.isOrphan = !node.isEntryPoint && !externallyConsumedConfig && relevantIncoming === 0 && relevantOutgoing === 0;

    let risk = 'low';
    const labelText = `${node.label} ${node.path}`.toLowerCase();
    const writeLike = /\b(write|save|update|delete|remove|restore|backup|admin|auth|token|session)\b/.test(labelText);
    if (
      (node.type === 'api_route' && /\b(post|put|patch|delete)\b/i.test(node.label)) ||
      writeLike ||
      node.isDatabaseRelated && /\b(post|put|patch|delete)\b/i.test(node.label)
    ) {
      risk = 'high';
    } else if (
      node.isSecurityRelated ||
      node.isDatabaseRelated ||
      node.hasManyDependencies ||
      node.type === 'api_route' ||
      node.path === 'server.ts'
    ) {
      risk = 'medium';
    }
    if (node.type === 'style' || (node.type === 'component' && node.dependencyCount <= 2 && node.dependentCount <= 2)) {
      risk = 'low';
    }
    if (node.type === 'config' && /(vercel\.json|_headers)/.test(node.path)) {
      risk = 'high';
    }
    node.riskLevel = risk;
  }
}

function maybeAdd(list, value) {
  if (value) {
    list.push(value);
  }
}

function addNarrativeMetadata() {
  const incomingByType = new Map();
  for (const edge of graph.edges) {
    const bucket = incomingByType.get(edge.target) || [];
    bucket.push(edge);
    incomingByType.set(edge.target, bucket);
  }
  const outgoingByType = new Map();
  for (const edge of graph.edges) {
    const bucket = outgoingByType.get(edge.source) || [];
    bucket.push(edge);
    outgoingByType.set(edge.source, bucket);
  }

  for (const node of graph.nodes) {
    const learningNotes = [];
    const suggestedTests = [];
    const securityNotes = [];
    const incoming = incomingByType.get(node.id) || [];
    const outgoing = outgoingByType.get(node.id) || [];

    if (node.isEntryPoint) {
      maybeAdd(learningNotes, 'Start here to understand runtime bootstrapping and request flow.');
    }
    if (node.type === 'api_route') {
      maybeAdd(learningNotes, 'Use this route as an anchor for tracing URL to component handler.');
      maybeAdd(suggestedTests, `Verify ${node.httpMethod || 'GET'} ${node.routePath || node.label} reaches the expected handler.`);
    }
    if (node.type === 'component' && node.path.startsWith('src/pages/')) {
      maybeAdd(learningNotes, 'Read this page after App.tsx to understand a full user-facing route.');
      maybeAdd(suggestedTests, 'Render the page and verify SEO tags, content sections, and link targets.');
    }
    if (node.type === 'component' && node.technicalKinds.includes('layout-component')) {
      maybeAdd(learningNotes, 'This layout is cross-cutting and affects most routes through shared chrome or transitions.');
    }
    if (node.path === 'src/layouts/shared/SEOHead.tsx') {
      maybeAdd(learningNotes, 'This is the SEO hub. Canonical URL and schema issues usually funnel through here.');
      maybeAdd(suggestedTests, 'Assert canonical tags, Open Graph tags, and JSON-LD payloads for key routes.');
      maybeAdd(securityNotes, 'Review injected schema payloads and ensure only trusted structured data reaches Helmet.');
    }
    if (node.path === 'src/pages/Menu.tsx') {
      maybeAdd(learningNotes, 'This page contains the richest client-side behavior: hash sync, scrolling, and category state.');
      maybeAdd(suggestedTests, 'Verify category navigation syncs scroll position and URL hash on mobile and desktop.');
    }
    if (node.path === 'src/pages/BlogPostDetail.tsx') {
      maybeAdd(learningNotes, 'This route shows route-param handling and content parsing in one place.');
      maybeAdd(suggestedTests, 'Verify missing slugs redirect safely and content blocks render expected quote/list/heading variants.');
    }
    if (node.path === 'server.ts') {
      maybeAdd(learningNotes, 'This is the runtime bridge between Vite dev middleware and production static serving.');
      maybeAdd(suggestedTests, 'Smoke test dev middleware mode and production catch-all serving of index.html.');
      maybeAdd(securityNotes, 'Wildcard static serving is simple, but production headers rely on deployment config rather than Express middleware.');
    }
    if (node.path === 'vercel.json' || node.path === 'public/_headers') {
      maybeAdd(learningNotes, 'Read this early during security review because it defines browser-facing headers and SPA rewrite behavior.');
      maybeAdd(suggestedTests, 'Verify CSP, frame, and referrer headers are present in deployed responses.');
      maybeAdd(securityNotes, 'Changes here can silently relax CSP or clickjacking protections.');
    }
    if (node.path === 'src/data/urlMigration.ts') {
      maybeAdd(learningNotes, 'This looks like legacy migration planning data. Check whether it should be wired into runtime redirects or removed.');
      maybeAdd(suggestedTests, 'Decide whether legacy URL mappings need coverage or cleanup as dead code.');
    }
    if (node.isOrphan) {
      maybeAdd(learningNotes, 'This node is currently detached from the main graph and is a candidate for cleanup or future wiring.');
    }
    if (node.hasManyDependencies) {
      maybeAdd(learningNotes, 'This node is a hub. Small changes here likely have wide UI or routing impact.');
    }
    if (node.riskLevel === 'high') {
      maybeAdd(suggestedTests, 'Add regression coverage before changing this node.');
    }
    if (node.isSecurityRelated) {
      maybeAdd(securityNotes, 'Review trust boundaries, external URLs, and header/canonical behavior before modifying this node.');
    }
    if (incoming.some((edge) => edge.type === 'route_to_handler')) {
      maybeAdd(learningNotes, 'This handler sits directly behind a route, so route regressions will surface here first.');
    }
    if (outgoing.some((edge) => edge.type === 'calls')) {
      maybeAdd(learningNotes, 'Trace outgoing helper calls here to understand downstream behavior quickly.');
    }

    node.learningNotes = unique([...node.learningNotes, ...learningNotes]);
    node.suggestedTests = unique([...node.suggestedTests, ...suggestedTests]);
    node.securityNotes = unique([...node.securityNotes, ...securityNotes]);
  }
}

function topNodes(filterFn, count = 5) {
  return graph.nodes
    .filter(filterFn)
    .sort((a, b) => b.dependencyCount - a.dependencyCount || b.dependentCount - a.dependentCount)
    .slice(0, count)
    .map((node) => ({
      id: node.id,
      label: node.label,
      path: node.path,
      dependencyCount: node.dependencyCount,
      dependentCount: node.dependentCount,
      riskLevel: node.riskLevel,
    }));
}

function topCalledNodes(count = 5) {
  return graph.nodes
    .map((node) => {
      const stats = edgeStats.get(node.id) || { calls: 0, renders: 0, handlers: 0 };
      return {
        id: node.id,
        label: node.label,
        path: node.path,
        callCount: stats.calls + stats.renders + stats.handlers,
      };
    })
    .filter((item) => item.callCount > 0)
    .sort((a, b) => b.callCount - a.callCount)
    .slice(0, count);
}

function detectReviewAreas() {
  const reviewAreas = [];
  const appNode = graph.nodes.find((node) => node.path === 'src/App.tsx');
  const layoutNode = graph.nodes.find((node) => node.path === 'src/layouts/BaseLayout.tsx');
  const seoNode = graph.nodes.find((node) => node.path === 'src/layouts/shared/SEOHead.tsx');
  const menuNode = graph.nodes.find((node) => node.path === 'src/pages/Menu.tsx');
  const blogDetailNode = graph.nodes.find((node) => node.path === 'src/pages/BlogPostDetail.tsx');
  const orphanNode = graph.nodes.find((node) => node.path === 'src/data/urlMigration.ts');

  if (appNode) {
    reviewAreas.push('Read src/main.tsx -> src/App.tsx first to map the SPA bootstrap and full client route table.');
  }
  if (layoutNode) {
    reviewAreas.push('Read BaseLayout next because shared header, footer, floating actions, and route transitions are centralized there.');
  }
  if (menuNode) {
    reviewAreas.push('Review Menu.tsx early for non-trivial client behavior: hash routing, intersection observers, and sticky navigation.');
  }
  if (blogDetailNode) {
    reviewAreas.push('Review BlogPostDetail.tsx to understand route params, content parsing, and related-story rendering.');
  }
  if (seoNode) {
    reviewAreas.push('Include SEOHead.tsx, utils/schema.ts, and data/business.ts in any SEO or security review because canonical/meta/schema generation converges there.');
  }
  if (orphanNode) {
    reviewAreas.push('Inspect src/data/urlMigration.ts as likely dead or planned migration data because it is currently disconnected from runtime flow.');
  }
  reviewAreas.push('Review server.ts with vercel.json/public/_headers for runtime entry, SPA rewrite behavior, and browser security headers.');
  return unique(reviewAreas);
}

function buildMeta(scannedFiles) {
  const fileLikeTypes = new Set(['file', 'style', 'template', 'config']);
  const fileNodes = graph.nodes.filter((node) => fileLikeTypes.has(node.type));
  const functionNodes = graph.nodes.filter((node) => node.type === 'function' || node.type === 'component');
  const routeNodes = graph.nodes.filter((node) => node.type === 'api_route');
  graph.meta = {
    generatedAt: new Date().toISOString(),
    scannedRoot: normalizeSlashes(root),
    graphVersion,
    totalFiles: fileNodes.length,
    totalFunctions: functionNodes.length,
    totalRoutes: routeNodes.length,
    totalNodes: graph.nodes.length,
    totalEdges: graph.edges.length,
    scannedFileCount: scannedFiles.length,
    highRiskNodeCount: graph.nodes.filter((node) => node.riskLevel === 'high').length,
    orphanNodeCount: graph.nodes.filter((node) => node.isOrphan).length,
    topFileDependencies: topNodes((node) => fileLikeTypes.has(node.type)),
    topNodeCalledMost: topCalledNodes(),
    reviewAreas: detectReviewAreas(),
    noDatabaseAccessDetected: !graph.edges.some((edge) => edge.type === 'reads_db' || edge.type === 'writes_db') &&
      !graph.nodes.some((node) => node.type === 'database'),
  };
}

function routeSummaryLines() {
  return graph.nodes
    .filter((node) => node.type === 'api_route')
    .sort((a, b) => `${a.httpMethod || ''}${a.routePath || a.label}`.localeCompare(`${b.httpMethod || ''}${b.routePath || b.label}`))
    .map((route) => {
      const handlerEdge = graph.edges.find((edge) => edge.source === route.id && edge.type === 'route_to_handler');
      const handlerNode = handlerEdge ? nodeMap.get(handlerEdge.target) : null;
      return `- \`${route.httpMethod || 'GET'} ${route.routePath || route.label}\` -> ${handlerNode ? `\`${handlerNode.label}\`` : 'redirect or inline behavior'}`;
    });
}

function renderOverviewMarkdown() {
  const meta = graph.meta;
  const entryNodes = graph.nodes.filter((node) => node.isEntryPoint);
  const highRiskNodes = graph.nodes.filter((node) => node.riskLevel === 'high').slice(0, 8);
  const orphanNodes = graph.nodes.filter((node) => node.isOrphan).slice(0, 8);
  const entryDescriptions = entryNodes.map((node) =>
    node.type === 'api_route'
      ? `\`${node.label}\` (declared in \`${node.path}\`)`
      : `\`${node.path}\``,
  );
  const orphanDescriptions = orphanNodes.map((node) => {
    const base = path.basename(node.path);
    if (node.type === 'file' || node.type === 'config' || node.type === 'style' || node.type === 'template') {
      return `\`${node.path}\``;
    }
    if (node.label === base) {
      return `\`${node.label}\` (${node.type} in \`${node.path}\`)`;
    }
    return `\`${node.label}\` (${node.type} in \`${node.path}\`)`;
  });

  const lines = [
    '# Code Knowledge Graph Overview',
    '',
    '## Deliverables',
    '',
    `- JSON graph: \`docs/code-knowledge-graph/${path.basename(graphPath)}\``,
    `- Embedded data for standalone viewer: \`docs/code-knowledge-graph/${path.basename(graphDataPath)}\``,
    `- Viewer: \`docs/code-knowledge-graph/viewer.html\``,
    `- Regenerate command: \`node scripts/generate-code-knowledge-graph.mjs\``,
    '',
    '## 1. Stack And Entry Points',
    '',
    '- Stack: React 19, React Router 7, Vite 6, TypeScript, Tailwind CSS 4, Express 5 static/dev host.',
    `- Entry points: ${entryDescriptions.join(', ')}.`,
    '- Architecture shape: client-side SPA with static content/data modules; no active database access detected in the scanned codebase.',
    '',
    '## 2. Graph Schema',
    '',
    '- Node shape: `{ id, label, type, path, parentId, language, extension, description, tags, technicalKinds, riskLevel, isEntryPoint, isSecurityRelated, isDatabaseRelated, hasManyDependencies, isOrphan, dependencyCount, dependentCount, learningNotes, suggestedTests, securityNotes, routePath?, httpMethod?, functionRole? }`',
    '- Edge shape: `{ source, target, type, label, description, confidence }`',
    '- Meta shape: `{ generatedAt, scannedRoot, graphVersion, totalFiles, totalFunctions, totalRoutes, highRiskNodeCount, orphanNodeCount, topFileDependencies, topNodeCalledMost, reviewAreas }`',
    '',
    '## 3. Scan Heuristics',
    '',
    '- Parse TS/JS/TSX/JSX with the TypeScript compiler API instead of regex for imports, definitions, call sites, JSX render edges, React Router routes, and Express routes.',
    '- Scan HTML, CSS, and common config files (`package.json`, `vite.config.ts`, `tsconfig.json`, `vercel.json`, `_headers`, `robots.txt`, `sitemap.xml`, `.env.example`).',
    '- Ignore build/vendor/cache directories including `dist`, `node_modules`, `.git`, and `.venv`.',
    '- Infer `route -> handler -> helper/component/data` traces from `route_to_handler`, `calls`, `renders`, and `uses` edges.',
    '- Mark likely dead code as orphan only when disconnected from non-`defines` edges and not marked as an entry point.',
    '- Risk heuristic: high for security-header config and server-authoritative nodes; medium for routes, security-related nodes, or dependency hubs; low for simple UI/style nodes.',
    '',
    '## 4. Architecture Snapshot',
    '',
    '- Router hub: `src/App.tsx` owns the full client route table and most URL-level behavior.',
    '- Shared chrome: `src/layouts/BaseLayout.tsx` wraps nearly every page and renders header/footer/floating actions.',
    '- SEO hub: `src/layouts/shared/SEOHead.tsx` plus `src/utils/schema.ts` and `src/data/business.ts` drive canonical/meta/schema output.',
    '- Richest client logic: `src/pages/Menu.tsx` and `src/pages/BlogPostDetail.tsx` contain the most meaningful interactive or parsing behavior.',
    '- Runtime/deploy entry: `server.ts`, `index.html`, and `vercel.json` define how the SPA boots and is served.',
    '',
    '## 5. Route Map',
    '',
    ...routeSummaryLines(),
    '',
    '## 6. Risk And Dead-Code Signals',
    '',
    `- High-risk node count: ${meta.highRiskNodeCount}`,
    `- Orphan node count: ${meta.orphanNodeCount}`,
    `- Top dependency hubs: ${meta.topFileDependencies.map((node) => `\`${node.path}\` (${node.dependencyCount})`).join(', ') || 'none'}`,
    `- Top called/rendered nodes: ${meta.topNodeCalledMost.map((node) => `\`${node.label}\` (${node.callCount})`).join(', ') || 'none'}`,
    '',
    highRiskNodes.length
      ? `- High-risk nodes to read first: ${highRiskNodes.map((node) => `\`${node.path}${node.label !== path.basename(node.path) ? `#${node.label}` : ''}\``).join(', ')}`
      : '- No high-risk application logic nodes were detected beyond deployment/runtime config.',
    orphanNodes.length
      ? `- Likely orphan/dead-code candidates: ${orphanDescriptions.join(', ')}`
      : '- No obvious orphan nodes detected.',
    '',
    '## 7. How To Read This Project Fast',
    '',
    '1. Start at `index.html`, `src/main.tsx`, and `src/App.tsx` to understand bootstrapping and the route table.',
    '2. Read `src/layouts/BaseLayout.tsx` and shared layout components to learn the site-wide frame every route inherits.',
    '3. Pick one simple route (`src/pages/Home.tsx`) and one richer route (`src/pages/Menu.tsx` or `src/pages/BlogPostDetail.tsx`) to see the normal page composition pattern.',
    '4. Read `src/layouts/shared/SEOHead.tsx`, `src/utils/schema.ts`, and `src/data/business.ts` before touching SEO, metadata, business info, or social previews.',
    '5. Review `server.ts`, `vercel.json`, and `public/_headers` before changing deployment, rewrites, or browser security policy.',
    '6. Check `src/data/urlMigration.ts` last as a cleanup candidate because it is currently disconnected from runtime flow.',
    '',
    '## 8. Review Areas',
    '',
    ...meta.reviewAreas.map((line) => `- ${line}`),
    '',
  ];
  return lines.join('\n');
}

function main() {
  const scannedFiles = collectFiles(root)
    .filter((absPath) => {
      const relative = relPath(absPath);
      return !relative.startsWith('docs/code-knowledge-graph/') && !excludedRelativePaths.has(relative);
    })
    .sort();

  for (const absPath of scannedFiles) {
    fileInfos.set(path.resolve(absPath), createFileInfo(path.resolve(absPath)));
  }

  for (const fileInfo of fileInfos.values()) {
    const text = fs.readFileSync(fileInfo.absPath, 'utf8');
    if (['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'].includes(fileInfo.extension)) {
      parseScriptFile(fileInfo, text);
    } else if (fileInfo.extension === '.html') {
      parseHtmlFile(fileInfo, text);
    } else {
      parseGenericConfig(fileInfo, text);
    }
  }

  finalizeReferences();
  inferNodeSignals();
  computeCountsAndRisk();
  addNarrativeMetadata();
  buildMeta(scannedFiles);

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(graphPath, JSON.stringify(graph, null, 2));
  fs.writeFileSync(graphDataPath, `window.__GRAPH_DATA__ = ${JSON.stringify(graph, null, 2)};\n`);
  fs.writeFileSync(overviewPath, renderOverviewMarkdown());

  console.log(`Graph written to ${graphPath}`);
  console.log(`Embedded graph data written to ${graphDataPath}`);
  console.log(`Overview written to ${overviewPath}`);
}

main();
