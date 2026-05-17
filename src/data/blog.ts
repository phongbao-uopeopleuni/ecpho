export interface BlogImageCredit {
  photographerName: string;
  photographerUrl: string;
  sourceName: string;
  sourceUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  imageCredit?: BlogImageCredit;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "royal-soul-of-bun-bo-hue",
    title: 'Part 1 — The "Royal Soul" of Bún Bò Huế',
    excerpt:
      'A fiery, aromatic bowl with imperial roots — explore why Bún Bò Huế is one of Central Vietnam\'s most distinctive culinary treasures.',
    date: "2026-03-01",
    author: "EC Phở Team",
    image: "/images/blogs/part-1-bun-bo-hue-vy-huynh.jpg",
    imageCredit: {
      photographerName: "Vy Huynh",
      photographerUrl:
        "https://unsplash.com/@thanhvy14?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      sourceName: "Unsplash",
      sourceUrl:
        "https://unsplash.com/photos/white-ceramic-bowl-with-soup-and-green-leaves-rcHHKG01IPY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },
    readTime: "5 min",
    content: `"If you visit Hue and haven't tasted Bún Bò, you haven't truly arrived."

Part 1 - The "Royal Soul" of Bún Bò Huế

Welcome back to our series, "The Story Behind the Bowl". Last week, we introduced you to the idea that every dish has a history. Today, we are diving into the fiery, complex world of Bún Bò Huế—a dish that many of our customers at EC Pho define as their "spicy comfort food." But did you know that in its hometown, this dish has a simpler name and a royal past?

1. What is in a Name?

According to local culture in Hue City (the former Imperial Capital of Vietnam), locals simply call this dish "Bún Bò" (Beef Noodle Soup). The word "Huế" is added by people from other regions to honor its birthplace and distinguish it from other noodle soups [1].

While Phở is famous for its flat noodles and gentle spices, Bún Bò Huế is the "rebel" sibling—bold, spicy, and deeply aromatic.

2. The "Soul" of the Broth

What makes this soup so addictive? The secret lies in the balance of spices.

Based on traditional culinary records from Hue, the broth is a meticulous work of art. The cook must simmer beef shank and pork bones for hours to get a sweet, clear stock. But the "soul" of the broth comes from two key ingredients:

• Lemongrass: Lots of it. It provides a citrusy, herbal aroma.
• Ruốc (Fermented Shrimp Paste): This is the magic ingredient. In Hue, adding just the right amount of Ruốc creates a distinct savoriness that salt alone cannot achieve [1].

3. Not Your Average Noodle

If you look closely at your bowl at EC Pho, you will notice the noodles are different. Bún Bò Huế uses a mixture of rice flour and a touch of tapioca starch. This gives the noodles a larger, cylindrical shape that is white, chewy, and slightly "bouncy." This texture is perfect for holding onto the spicy, rich broth without getting soggy.

4. A Symphony of Toppings

A true bowl of Bún Bò Huế is a meat lover's dream. It typically features:

• Beef Shank: Tender and thinly sliced.
• Pig's Trotters (Pork Hocks): Rich in collagen.
• Chả Huế (Hue Sausage): Steamed pork balls seasoned with pepper.
• Congealed Pork Blood: Similar to tofu, it soaks up the flavors of the soup (a traditional favorite!).

5. The "Green" Note

You cannot eat Bún Bò Huế without the "Rau Sống" (fresh herbs). The most crucial vegetable is shredded banana blossom (bắp chuối). Its slight astringency cuts through the richness of the pork and the heat of the chili oil, creating a perfect balance in every bite [1].

Experience the Royal Taste in Greenville

At EC Pho, we honor these traditions. We simmer our broth with authentic lemongrass and shrimp paste to bring the true flavor of Central Vietnam to Greenville.

Next time you visit us at 109 Greenville Blvd SE, be adventurous. Skip the usual order and try the Bún Bò Huế. Now that you know the story, we guarantee it will taste even better.

See you at the table!

References:
[1] Kham Pha Hue. (n.d.). Bún bò Huế - Hương vị Cố đô. Khamphahue.com.vn. Retrieved from https://khamphahue.com.vn/Du-lich/Ban-can-biet/Chi-tiet/tid/Bun-bo-Hue.html/pid/10516/cid/313`
  },
  {
    slug: "quiet-elegance-of-pho",
    title: "Part 2 — The Quiet Elegance of Phở",
    excerpt:
      "Vietnam's gift to the world — a quiet masterpiece shaped by history, patience, and the subtle alchemy of its broth.",
    date: "2026-03-01",
    author: "EC Phở Team",
    image: "/images/blogs/part-2-pho-markus-winkler.jpg",
    imageCredit: {
      photographerName: "Markus Winkler",
      photographerUrl:
        "https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      sourceName: "Unsplash",
      sourceUrl:
        "https://unsplash.com/photos/white-noodle-soup-with-green-leaf-vegetable-in-white-ceramic-bowl-08aic3qPcag?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },
    readTime: "6 min",
    content: `"Phở is a special gift of Hanoi, it is not found only in Hanoi, but it is precisely because it is only good in Hanoi."
Thạch Lam

Part 2: The Quiet Elegance of Phở –
Vietnam's Gift to the World

In our last exploration of Vietnamese culinary heritage, we delved into the complex, fiery royal soul of Bún Bò Huế. That dish is a testament to the sophisticated palate of the old Imperial Capital—a vibrant clash of spicy, sour, salty, and sweet.

Yet, if Bún Bò Huế is the intricate tapestry of royalty, then Phở is the comforting, woven cotton of the people. It is simpler on the surface, yet profoundly deep in its execution. While Bún Bò Huế shouts with the intensity of lemongrass and fermented shrimp paste, Phở whispers with the subtle, aromatic warmth of charred ginger, star anise, and patience.

Today, Phở is arguably Vietnam's greatest culinary ambassador, recognized instantly around the globe. But its ubiquity shouldn't diminish its cultural weight. To understand Vietnam, one must understand Phở.


A 20th-Century Melting Pot

Unlike many ancient traditional dishes, Phở has a relatively modern history, emerging in the early 20th century. Its birthplace is widely considered to be northern Vietnam, specifically around Nam Định and Hanoi, during the French colonial period.

Before this era, cows in Vietnam were primarily used as draft animals, and beef was not a major part of the diet. The prevailing historical theory suggests that Phở was born out of cultural intersection. The increased demand for beef by the French, combined with Chinese noodle-making techniques and indigenous Vietnamese spice traditions, created the perfect environment for this new dish to emerge.

Some linguistic historians even suggest the word "Phở" might be influenced by the French pot-au-feu (a beef stew) or perhaps Cantonese noodle vendors calling out their wares. Regardless of its exact linguistic roots, the result was distinctly Vietnamese: an ingenious way to utilize beef bones and scraps to create a broth of incredible fortitude.


The Alchemy of the Broth

If you ask any Vietnamese person what makes a good bowl of Phở, the answer is universally the same: the broth.

The broth is the soul of Phở, and it cannot be rushed. A true master of Phở spends hours—often overnight—simmering beef leg bones and knuckles to extract every ounce of marrow and collagen, resulting in a rich mouthfeel.

But the magic lies in the aromatics. Crucial to the process is the charring of onions and ginger over an open flame before adding them to the pot. This lends a subtle smokiness and natural sweetness that defines the dish. To this base, a precise blend of spices—usually star anise, cinnamon, cloves, fennel seeds, and coriander—is added.

The goal is balance. According to culinary historian and author Andrea Nguyen, a great Phở broth should be savory but not overly salty, sweet from the bones and charred aromatics rather than just sugar, and fragrant with spices without letting any single one dominate the palate.¹ It is a study in restraint and clarity.


A Tale of Two Regions

The history of Phở is also the history of modern Vietnam. Following the partition of the country in 1954, over a million northern Vietnamese migrated South, bringing their beloved noodle soup with them.

In the tropical climate of the South, Phở evolved. The original northern style (Phở Bắc) is minimalist. It features a clearer, savory broth, wider noodles, and is garnished simply with green onions and cilantro, perhaps with chili sauce and vinegar on the side.

The southern style (Phở Nam), which is what most international diners recognize today, is bolder. The broth tends to be slightly sweeter and darker. Crucially, it is served with an abundance of accompaniments: fresh basil, sawtooth herb (ngò gai), bean sprouts, lime wedges, and liberal squeeze-bottle doses of hoisin and sriracha sauce.

Neither style is "better"; they reflect the diverse regional palates of the country.


More Than Just Breakfast

Traditionally, Phở is a breakfast food—the fuel for a hard day's work. In the bustling streets of Hanoi or Ho Chi Minh City, the morning air is thick with the scent of simmering beef bones as commuters hunch over steaming bowls on small plastic stools.

Today, however, Phở has transcended its morning roots to become an any-time-of-day comfort. It is eaten when one is sick, when one is celebrating, or simply when one craves a taste of home. As food writer Tien Nguyen notes, Phở acts as a "culinary touchstone" for Vietnamese people globally, a fragrant reminder of their identity.²

At Ecpho Noodle House, we honor the dedication required to make this national treasure. Whether you prefer the complex spice of Bún Bò Huế or the soothing embrace of Phở, you are tasting history in a bowl.


Sources & Further Reading:
1. Nguyen, A. (2017). The Pho Cookbook: Easy to Adventurous Recipes for Vietnam's Favorite Soup and Noodles. Ten Speed Press. (See discussion on broth balance and clarity).
2. Nguyen, T. (2016). "The History of Pho." Lucky Peach. (Discussing the cultural significance and migration of the dish).
3. Peters, E. J. (2012). Appetites and Aspirations in Vietnam: Food and Drink in the Long Nineteenth Century. AltaMira Press. (For historical context on French influence and beef consumption).`
  },
  {
    slug: "banh-mi-symphony",
    title: "Part 3 — The Bánh Mì: A Symphony in a Sandwich",
    excerpt:
      "A vibrant meeting of French technique and Vietnamese ingenuity — Bánh Mì is a study in contrast, texture, and balance.",
    date: "2026-04-01",
    author: "EC Phở Team",
    image: "/images/blogs/part-3-banh-mi-stefan-cruceru.jpg",
    imageCredit: {
      photographerName: "stefan cruceru",
      photographerUrl:
        "https://unsplash.com/@stefan_cruceru?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      sourceName: "Unsplash",
      sourceUrl:
        "https://unsplash.com/photos/a-sandwich-on-a-black-plate-on-a-wooden-table-reA8UQHmNTQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },
    readTime: "5 min",
    content: `PART 3: THE BÁNH MÌ – A SYMPHONY IN A SANDWICH

In our exploration of Vietnam’s culinary soul, we first met the fiery, royal depth of Bún Bò Huế and then the quiet, aromatic elegance of Phở. But if those dishes represent the "soul" and "ambassador" of Vietnam, then the Bánh Mì is surely its most vibrant "symphony."

Described by the late Anthony Bourdain as a "symphony in a sandwich," the Bánh Mì is a masterclass in contrast. It is a world where French colonial influence meets Vietnamese ingenuity—a crispy, airy baguette that shatters at the first bite to reveal a colorful world of savory meats, rich pâté, and the bright, zesty crunch of pickled vegetables.


A Fusion Born of Necessity

The story of Bánh Mì began in the late 19th century when the French introduced the baguette to Vietnam. Initially, it was a luxury item for the colonial elite, eaten with butter and ham in the European style. However, as the Vietnamese people adopted the bread, they made it uniquely their own.

Local bakers began incorporating rice flour with wheat to create a baguette that was lighter, airier, and more affordable. By the 1950s, the "Saigon-style" Bánh Mì was born: the bread was sliced open and stuffed with local ingredients like cilantro, chili, and pickled daikon, transforming it from a French side dish into a portable, handheld masterpiece for the masses.


The Anatomy of the Perfect Bite

What makes a Bánh Mì so addictive is the perfect balance of the "Five Flavors" (salty, sweet, sour, spicy, and bitter) and a wide array of textures:

• The Crust: A thin, golden shell that offers a satisfying "crunch" without being heavy.
• The Fat: A smear of rich, earthy liver pâté and a swipe of Vietnamese egg-yolk mayonnaise (bơ) provide the creamy foundation.
• The Protein: From the traditional Bánh Mì Đặc Biệt (packed with cold cuts like chả lụa and headcheese) to warm, lemongrass-marinated grilled pork (thịt nướng).
• The Freshness: Long strips of cucumber and a generous handful of cilantro provide a cooling contrast to the savory meats.
• The Zing: Đồ Chua—crunchy, julienned carrots and daikon pickled in vinegar and sugar—cuts through the richness, while a few slices of bird’s eye chili offer a lingering spark of heat.


A Regional Journey

Just like Phở, the Bánh Mì changes as you travel the length of the country:

• Hanoi (North): Focuses on simplicity and high-quality cold cuts, often omitting the heavy garnishes found in the south.
• Hội An (Central): Famous for its "extra-crunchy" pointed baguettes and a secret, rich gravy poured over the meat.
• Saigon (South): Known for its "more is more" philosophy, overflowing with diverse meats, herbs, and a sweeter flavor profile.

Whether enjoyed as a quick breakfast on a busy street corner or a satisfying lunch at EC Pho, the Bánh Mì remains a symbol of Vietnamese resilience—taking a foreign influence and turning it into something globally beloved and distinctly Vietnamese.`
  },
  {
    slug: "fresh-shrimp-spring-rolls",
    title: "Part 4 — Fresh Shrimp Spring Roll",
    excerpt:
      "A serene counterpoint to Vietnam's bolder flavors — fresh, translucent, and defined by balance.",
    date: "2026-04-01",
    author: "EC Phở Team",
    image: "/images/blogs/part-4-fresh-shrimp-spring-roll-brittani-carter.jpg",
    imageCredit: {
      photographerName: "Brittani Carter",
      photographerUrl:
        "https://unsplash.com/@bcarter3?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      sourceName: "Unsplash",
      sourceUrl:
        "https://unsplash.com/photos/plate-of-sushi-4jPY0i3KUZg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },
    readTime: "4 min",
    content: `PART 4: Fresh Shrimp Spring Roll

If Bánh Mì is the vibrant, chaotic symphony of the Vietnamese street, then Gỏi Cuốn (Fresh Summer Roll) is its serene, acoustic ballad. It is a dish that does not shout, but rather whispers—a testament to the philosophy that fresh ingredients need nowhere to hide.

Visual Poetry

The beauty of Gỏi Cuốn lies in its transparency. Unlike the deep-fried Chả Giò, this roll is wrapped in delicate, translucent rice paper (bánh tráng), expressly designed to show off its treasures. It is “eating with the eyes” at its finest: the bright coral curve of boiled shrimp and slices of lean pork are artfully arranged against a backdrop of white vermicelli and the vivid green of garlic chives and mint.

The Soul of the Roll: The Peanut Sauce

While the roll itself is a celebration of lean, herbal freshness, it is incomplete without its "soul"—the dipping sauce. For the classic Shrimp Gỏi Cuốn, the perfect partner is not fish sauce, but Tương Đậu Phộng (Peanut Hoisin Sauce).

This thick, velvety sauce—a blend of savory hoisin, rich peanut butter, and a splash of coconut milk—provides the essential "fat" that the healthy roll lacks. When you dip the cool, fresh roll into the warm, nutty sauce (often topped with crushed peanuts and a spark of chili), you create the perfect bite: a marriage of the refreshing and the rich, the herbal and the earthy.

Light, balanced, and texturally complex, Gỏi Cuốn is not just an appetizer; it is a refreshing reminder that in Vietnamese cuisine, balance is everything.`
  },
  {
    slug: "vietnamese-coffee-ritual",
    title: "Part 5 — Vietnamese Coffee: Cà Phê Sữa Đá",
    excerpt:
      "Bold, slow, and intensely sweet — Cà Phê Sữa Đá is a ritual of patience and one of Vietnam's most iconic daily pleasures.",
    date: "2026-05-01",
    author: "EC Phở Team",
    image: "/images/blogs/part-5-vietnamese-coffee-irish83.jpg",
    imageCredit: {
      photographerName: "Irish83",
      photographerUrl:
        "https://unsplash.com/@irish83?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      sourceName: "Unsplash",
      sourceUrl:
        "https://unsplash.com/photos/a-glass-of-water-on-a-table-h0QaLWVOOxA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },
    readTime: "4 min",
    content: `PART 5: vietnamese coffee

Cà Phê Sữa Đá: The Fuel of a Nation

If Phở is the morning comfort and Bánh Mì the midday fuel, then Cà Phê Sữa Đá is the rhythm of Vietnamese life. Far stronger than an Americano and sweeter than an Italian espresso, this drink is not just a caffeine fix; it is a masterclass in patience and intensity.

The Ritual of the Phin

Unlike the hurried hiss of an espresso machine, Vietnamese coffee is defined by the slow, hypnotic drip of the Phin filter. This simple metal device sits atop a glass, forcing the drinker to wait as hot water slowly percolates through the dark-roasted grounds. It is "slow coffee" by design—a built-in pause button in the middle of a chaotic day.

A Study in Contrast

The magic lies in the ingredients. Vietnam primarily grows Robusta beans, which are bolder, nuttier, and significantly higher in caffeine than the Arabica used in the West. To tame this aggressive bitterness, a layer of thick, sweetened condensed milk waits at the bottom of the glass.

When stirred together over ice, the alchemy happens. The caramel-like sweetness of the milk locks perfectly with the smoky, earthy punch of the coffee. The result is a drink that is velvety, intensely strong, and unapologetically sweet.

Whether enjoyed on a low plastic stool at a sidewalk cà phê cóc or in a modern cafe, Cà Phê Sữa Đá is the ultimate symbol of Vietnamese street culture: bold, unhurried, and unforgettable.`
  }
];
