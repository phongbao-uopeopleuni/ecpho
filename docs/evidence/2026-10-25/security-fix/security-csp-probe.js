const violations = [];
let allowedHandlerExecuted = false;
let inlineButtonClicked = false;
function show() {
  document.querySelector('#result').textContent = JSON.stringify({
    inlineScriptExecuted: window.ecInlineScriptExecuted === true,
    inlineHandlerExecuted: window.ecInlineHandlerExecuted === true,
    inlineButtonClicked,
    allowedExternalHandlerExecuted: allowedHandlerExecuted,
    violations,
  }, null, 2);
}
document.addEventListener('securitypolicyviolation', (event) => {
  violations.push({ directive: event.effectiveDirective, blockedURI: event.blockedURI, disposition: event.disposition });
  show();
});
const script = document.createElement('script');
script.textContent = 'window.ecInlineScriptExecuted=true';
document.body.appendChild(script);
document.querySelector('#inline-handler').setAttribute('onclick', 'window.ecInlineHandlerExecuted=true');
document.querySelector('#inline-handler').addEventListener('click', () => { inlineButtonClicked = true; show(); });
document.querySelector('#allowed-handler').addEventListener('click', () => { allowedHandlerExecuted = true; show(); });
show();
