export interface MigrationPath {
  oldPath: string;
  newPath: string;
  action: "preserve" | "redirect" | "canonical";
  notes: string;
}

export const urlMigrationMap: MigrationPath[] = [
  {
    oldPath: "/home-page",
    newPath: "/home-page",
    action: "preserve",
    notes: "Current Google Sites homepage URL. Must not break."
  },
  {
    oldPath: "/menu",
    newPath: "/menu",
    action: "preserve",
    notes: "Current Google Sites menu URL. Must not break."
  },
  {
    oldPath: "/gallery",
    newPath: "/gallery",
    action: "preserve",
    notes: "Current Google Sites gallery URL. Must not break."
  },
  {
    oldPath: "/blogs",
    newPath: "/blogs",
    action: "preserve",
    notes: "Current Google Sites blog index URL. Must not break."
  },
  {
    oldPath: "/",
    newPath: "/",
    action: "preserve",
    notes: "Root domain must load homepage content or safely redirect to homepage."
  },
  // Placeholders for old menu category pages (compatibility)
  {
    oldPath: "/pho",
    newPath: "/menu#noodle-soups-pho",
    action: "redirect",
    notes: "Old Phở category page redirect"
  },
  {
    oldPath: "/bun",
    newPath: "/menu#vermicelli-bun",
    action: "redirect",
    notes: "Old Vermicelli category page redirect"
  },
  {
    oldPath: "/appetizers",
    newPath: "/menu#appetizers",
    action: "redirect",
    notes: "Old Appetizers category page redirect"
  },
  {
    oldPath: "/salads",
    newPath: "/menu#salads",
    action: "redirect",
    notes: "Old Salads category page redirect"
  },
  {
    oldPath: "/rice-plates",
    newPath: "/menu#rice-plates",
    action: "redirect",
    notes: "Old Rice Plates category page redirect"
  },
  {
    oldPath: "/fried-rice",
    newPath: "/menu#fried-rice",
    action: "redirect",
    notes: "Old Fried Rice category page redirect"
  },
  {
    oldPath: "/drinks",
    newPath: "/menu#drinks",
    action: "redirect",
    notes: "Old Drinks category page redirect"
  },
  {
    oldPath: "/specials",
    newPath: "/menu#house-specials",
    action: "redirect",
    notes: "Old Specials category page redirect"
  },
  // Placeholders for old blog detail pages (compatibility)
  // These should be updated as specific paths are collected from Search Console
  {
    oldPath: "/blogs/some-old-post-title",
    newPath: "/blog/some-new-post-slug",
    action: "redirect",
    notes: "Placeholder for specific blog post migration"
  }
];
