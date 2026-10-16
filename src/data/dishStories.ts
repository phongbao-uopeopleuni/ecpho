import type { BlogPost } from './blog';

// Dish descriptions are grounded in menu.ts; existing restaurant photos are reused.
const stories: Omit<BlogPost, 'date' | 'author' | 'readTime'>[] = [
  {
    slug: 'vietnamese-egg-rolls-greenville-nc',
    title: 'Vietnamese Egg Rolls: A Crisp Start to Dinner',
    seoTitle: 'Vietnamese Egg Rolls in Greenville, NC',
    excerpt: 'Meet the Vietnamese egg rolls at EC Phở in Greenville, NC. Explore their crisp texture, choose a main dish, and compare fresh and fried rolls.',
    keywords: ['Vietnamese egg rolls Greenville NC', 'Vietnamese appetizers', 'crispy egg rolls', 'EC Phở menu'],
    image: '/images/menu/appetizers/001.jpg',
    imageAlt: 'Golden Vietnamese egg rolls with lettuce and dipping sauce at EC Phở',
    menuItemId: 'a1',
    relatedSlugs: ['grilled-chicken-egg-rolls-rice-greenville-nc', 'grilled-beef-vermicelli-greenville-nc', 'fresh-shrimp-spring-rolls'],
    content: `A crisp egg roll gives the table a little punctuation before the first bowl of noodles arrives. At EC Phở in Greenville, NC, Vietnamese Egg Rolls appear in the appetizer section: a straightforward way to begin dinner with a savory filling and a fried wrapper.

## What to expect from the first bite

The appeal starts with texture. The outside breaks as you bite, then gives way to the filling. That crisp surface makes an egg roll a useful partner for a meal built around soft rice noodles or steamed rice. You get a different rhythm of eating before settling into the main course.

Our menu describes these as crispy traditional spring rolls with a savory filling. It does not list every ingredient in that filling, so ask the team about anything you need to avoid before ordering. The name alone cannot answer questions about a particular wrapper, seasoning, or dipping sauce.

## Fried rolls and fresh rolls on the same menu

The appetizer section also includes Fresh Shrimp Spring Rolls, made with rice paper, shrimp, vermicelli, and herbs. Their soft wrapper creates a different experience from the fried exterior of the egg rolls. Looking at the menu names together helps you choose the texture you want.

For a table that likes variety, order both styles and compare a bite of each. Let the crisp wrapper have its own moment before adding sauce, then try another bite with a small dip. That makes it easier to decide which combination you enjoy.

## Build the rest of your meal

Egg rolls work as a starting point for a bowl of phở or a grilled beef vermicelli bowl. If you want them as part of the main plate, look for Grilled Chicken & Egg Rolls with Steamed Rice. The same crisp element takes on a different role beside chicken and rice.

When ordering several dishes, decide whether everyone wants an appetizer or whether one shared plate suits the table. You can keep the opening course small and leave room to explore the noodle, rice, and house special sections.

## Find Vietnamese appetizers in Greenville

Browse the EC Phở menu before your visit to 109 Greenville Blvd SE, Suite #100. The appetizer section puts egg rolls, fresh rolls, and other starters together, so you can plan the first course alongside your main dish. Check the current menu or ask the restaurant about availability when you order.`
  },
  {
    slug: 'grilled-beef-vermicelli-greenville-nc',
    title: 'Grilled Beef Vermicelli: Getting to Know the Bowl',
    seoTitle: 'Grilled Beef Vermicelli in Greenville, NC',
    excerpt: 'Explore grilled beef vermicelli at EC Phở in Greenville, NC. Get to know the rice noodles, grilled beef, and other bún choices on our menu.',
    keywords: ['grilled beef vermicelli Greenville NC', 'Vietnamese vermicelli bowl', 'bún noodles', 'Vietnamese restaurant Greenville NC'],
    image: '/images/menu/bun/028.jpg',
    imageAlt: 'Grilled beef over rice vermicelli with vegetables and sauce at EC Phở',
    menuItemId: 'b28',
    relatedSlugs: ['grilled-pork-rice-plate-greenville-nc', 'vietnamese-egg-rolls-greenville-nc', 'vegetarian-pho-greenville-nc'],
    content: `A forkful of grilled beef and fine rice noodles tells you more about a vermicelli bowl than its size ever could. The beef supplies a savory focal point, while the noodles give each bite room to change. EC Phở lists Vermicelli with Grilled Beef in the Bún section of its Greenville, NC menu.

## Read the noodle section first

Vermicelli is the fine rice noodle at the center of this dish. On our menu, the grilled beef version is described as char-grilled marinated beef over rice vermicelli. It offers a useful starting point when you want noodles with grilled meat and a bowl you can mix as you eat.

The section name, Vermicelli (Bún), is worth remembering. It groups these bowls separately from Noodle Soups (Phở), making it easier to return to the kind of meal you enjoyed on a previous visit.

## Make each bite a little different

Start with a bite of beef, then gather some noodles with the next piece. Combining the two lets you taste how the marinade and the rice noodles work together. If sauce comes alongside your bowl, add a little, toss, and taste before adding more.

You do not need to mix the whole bowl immediately. Working through a small portion first leaves you free to adjust the balance of meat, noodles, vegetables, and sauce. It also helps you keep the texture you like as the meal progresses.

## Choose among the bún options

Grilled beef is one of several choices at EC Phở. The vermicelli section also lists grilled pork, chicken, shrimp, a combination bowl, Vietnamese egg rolls, and lemongrass beef. Those names are a practical guide to the main ingredient in each version.

For a first visit, choose the protein you already enjoy. On another visit, changing the topping while keeping the rice noodle base gives you a clear point of comparison. A grilled beef bowl and an egg roll bowl can feel quite different even though they share a place on the menu.

## Order a vermicelli bowl in Greenville

If grilled beef vermicelli sounds like your next lunch or dinner, open the Bún section of our menu. You can compare the current options before visiting EC Phở on Greenville Blvd SE. For ingredient questions or a specific request, speak with the team so your order reflects what you actually want in the bowl.`
  },
  {
    slug: 'grilled-pork-rice-plate-greenville-nc',
    title: 'Grilled Pork and Rice: A Plate Worth Slowing Down For',
    seoTitle: 'Grilled Pork Rice Plate in Greenville, NC',
    excerpt: 'Discover the grilled pork rice plate at EC Phở in Greenville, NC. Compare steamed and fried rice and find a Vietnamese dinner that fits your appetite.',
    keywords: ['grilled pork rice plate Greenville NC', 'Vietnamese rice plates', 'grilled pork with rice', 'EC Phở Greenville'],
    image: '/images/menu/rice/042.jpg',
    imageAlt: 'EC Phở grilled pork with steamed rice and accompanying vegetables',
    menuItemId: 'r42',
    relatedSlugs: ['grilled-beef-vermicelli-greenville-nc', 'shrimp-fried-rice-greenville-nc', 'grilled-chicken-egg-rolls-rice-greenville-nc'],
    content: `A mound of rice gives grilled pork somewhere to leave its flavor between bites. That simple partnership is the reason to explore the Grilled Pork Rice Plate at EC Phở. The menu describes savory char-grilled pork with rice, an inviting place to begin if you are getting to know Vietnamese food in Greenville, NC.

## Let the pork set the direction

The grilled meat is the center of this plate. Try a piece on its own first, then bring some rice into the next bite. The rice changes how the seasoning carries through the mouthful and gives you a way to adjust the balance without changing the dish.

There is no need to combine everything at once. Keeping a little rice separate lets you alternate between a more intense bite of pork and a gentler spoonful. This is a meal you can organize around your own appetite and pace.

## Steamed rice or fried rice?

Our Grilled Pork Rice Plate has steamed rice and fried rice variations. Steamed rice is a simple base that keeps your attention on the pork. Fried rice brings another layer of seasoning to the plate. Choose according to which part of the meal you want to lead.

Check the variation when placing your order, since the rice choices have different prices. Reading the full option name is more helpful than assuming every rice plate is assembled the same way. The menu keeps those choices beside the dish so you can compare them directly.

## Explore the rice plates around it

The rice section also includes grilled beef, grilled chicken, and a grilled combination plate. If you like the format of meat with rice, these give you a few directions for a future visit. You can change the protein while keeping a familiar base.

For a table ordering several dishes, a rice plate can sit comfortably alongside a noodle bowl and a shared appetizer. Vietnamese egg rolls add a crisp opening course; a shrimp salad offers another texture. Choose what sounds good to the people at your table, then let each dish keep its own character.

## Plan your next rice plate in Greenville

Find Grilled Pork Rice Plate in the Rice Plates section of the EC Phở menu. We are at 109 Greenville Blvd SE, Suite #100, in Greenville, North Carolina. Review the current rice variations before ordering, and ask the team about ingredients or availability if you need a detail the menu does not cover.`
  },
  {
    slug: 'vegetarian-pho-greenville-nc',
    title: 'Vegetarian Phở: Tofu, Vegetables, and a Spoonful of Broth',
    seoTitle: 'Vegetarian Phở in Greenville, NC',
    excerpt: 'Explore vegetarian phở at EC Phở in Greenville, NC: vegetables and tofu in vegetable broth, with more tofu dishes to discover on our menu.',
    keywords: ['vegetarian pho Greenville NC', 'tofu noodle soup', 'vegetarian Vietnamese food', 'vegetable broth pho'],
    image: '/images/menu/vegetarian/063.jpg',
    imageAlt: 'Vegetarian phở with tofu, vegetables, and a side plate of herbs at EC Phở',
    menuItemId: 'v63',
    relatedSlugs: ['stir-fried-vegetables-tofu-rice-greenville-nc', 'quiet-elegance-of-pho', 'green-papaya-salad-greenville-nc'],
    content: `A spoonful of vegetable broth gives this bowl its starting point before tofu and noodles join the conversation. Vegetarian Phở at EC Phở is described on our menu as fresh vegetables and tofu in vegetable broth. It is one of the options in the Vegetarian section for guests exploring Vietnamese food in Greenville, NC.

## Get to know what is in the bowl

Tofu gives you something substantial to gather with the noodles, and the vegetables bring changes in texture. Taste a little broth first, then try a spoonful with the other ingredients. You will notice how the experience changes as more of the bowl comes together.

The menu description is the best starting point for understanding this particular order. It explicitly names vegetable broth, vegetables, and tofu. If you have a specific dietary requirement, ask about the full preparation and any accompaniments rather than relying on the dish name to cover every detail.

## Add accompaniments at your own pace

When herbs or other garnishes arrive alongside your soup, add what you enjoy a little at a time. A small addition lets you taste the difference before changing the rest of the broth. You can leave some accompaniments on the side throughout the meal.

Gather a manageable portion of noodles with the tofu instead of lifting a large bundle at once. Alternating between a spoonful of broth and a bite of noodles keeps the bowl comfortable to eat while you explore its textures.

## More ways to order tofu

The Vegetarian section at EC Phở includes Fried Tofu with Vermicelli, Shaking Tofu with Rice, and Stir Fried Vegetables & Tofu. These dishes give you several formats to consider: a broth bowl, a vermicelli dish, or a rice plate.

Choose according to how you want the meal to feel. If you want to spend time with a spoon and a bowl of soup, vegetarian phở makes sense. If you prefer to build forkfuls around rice, look at the tofu plates beside it. The ingredient can remain familiar while the texture of the meal changes.

## Find vegetarian phở in Greenville

Open the Vegetarian section of our menu to compare the options before visiting EC Phở on Greenville Blvd SE. For questions about sauces, allergies, or preparation, contact the restaurant directly. A short conversation about your needs is more useful than assuming a general menu category answers every ingredient question.`
  },
  {
    slug: 'bo-kho-beef-stew-greenville-nc',
    title: 'Bò Kho: A Different Way to Enjoy Vietnamese Beef',
    seoTitle: 'Bò Kho Vietnamese Beef Stew in Greenville, NC',
    excerpt: 'Get to know bò kho, the Vietnamese beef stew with carrots on the EC Phở menu in Greenville, NC, and see how it differs from a bowl of phở.',
    keywords: ['bo kho Greenville NC', 'Vietnamese beef stew', 'bò kho', 'Vietnamese house specials Greenville'],
    image: '/images/menu/specials/085.jpg',
    imageAlt: 'EC Phở bò kho beef stew with carrots, bread, and herbs',
    menuItemId: 'hs85',
    relatedSlugs: ['quiet-elegance-of-pho', 'grilled-pork-rice-plate-greenville-nc', 'sweet-sour-chicken-rice-greenville-nc'],
    content: `The carrot in a spoonful of bò kho changes the bite as much as the beef does. EC Phở serves Beef Stew, listed with its Vietnamese name Bò Kho, in the House Specials section. Our menu describes a traditional Vietnamese beef stew with carrots, giving diners in Greenville, NC another way to explore beef beyond a familiar bowl of phở.

## Start with the stew itself

Try the liquid first, then gather a piece of beef and some carrot. Moving between those spoonfuls lets you notice the different parts of the dish without needing a list of spices in front of you. Beef and carrot share the bowl, but each brings its own texture.

The menu gives a concise description of this dish. We keep that same distinction here: it is beef stew with carrots. For details about the seasoning or a preparation question, ask the restaurant. There is no single ingredient list that should be assumed for every bowl called bò kho.

## A useful choice beside phở

Our Noodle Soups section describes individual phở choices by their proteins, including eye round steak, brisket, and beef balls. Bò kho sits in House Specials as a stew. Looking in both sections broadens your choices when you know you want beef but have not settled on the meal.

If you usually order phở, trying bò kho on a later visit gives you a different reference point. Notice the role of the carrots, the pieces of beef, and the texture of the liquid. You can compare what you enjoy about each dish without expecting them to offer the same experience.

## Check the accompaniments when ordering

Our menu photograph shows the stew beside bread and a plate of herbs. Photos are useful for getting a sense of presentation, while the current order details are the place to confirm what will accompany your meal. Ask the team if a particular side matters to your choice.

At the table, taste the stew before combining it with an accompaniment. If bread is part of your order, try a small dip first. Keeping some of it separate lets you decide how much liquid you want in each bite.

## Look for bò kho in Greenville

Find Beef Stew (Bò Kho) among the EC Phở House Specials. Our restaurant is on Greenville Blvd SE in Greenville, North Carolina. Browse the menu to plan your visit, and confirm current availability and accompaniments with the team when you place your order.`
  },
  {
    slug: 'shrimp-fried-rice-greenville-nc',
    title: 'Shrimp Fried Rice: Pay Attention to the Next Forkful',
    seoTitle: 'Shrimp Fried Rice in Greenville, NC',
    excerpt: 'Discover shrimp fried rice at EC Phở in Greenville, NC. Explore the shrimp and rice combination and compare the other fried rice options on our menu.',
    keywords: ['shrimp fried rice Greenville NC', 'Vietnamese fried rice', 'fried rice with shrimp', 'EC Phở rice dishes'],
    image: '/images/menu/fried-rice/059.jpg',
    imageAlt: 'Shrimp fried rice with vegetables and herbs on an EC Phở plate',
    menuItemId: 'fr59',
    relatedSlugs: ['grilled-pork-rice-plate-greenville-nc', 'green-papaya-salad-greenville-nc', 'sweet-sour-chicken-rice-greenville-nc'],
    content: `A shrimp changes the pace of a plate of fried rice, giving the next forkful a firmer centerpiece. At EC Phở, Shrimp Fried Rice is listed in its own Fried Rice section, described as fried rice with plump jumbo shrimp. It is an easy dish to find when you are planning a rice dinner in Greenville, NC.

## Taste the rice as well as the shrimp

Take a bite of rice first, then gather some with a piece of shrimp. The two bites give you a better sense of the dish than saving all the shrimp for one end of the meal. Distributing the shrimp through your plate lets you keep that combination going.

Fried rice is also a practical format for eating at your own pace. You can make a small forkful, pause, and return to the plate without having to manage a long bundle of noodles. That familiar shape makes it an approachable choice for guests exploring more of our menu.

## Compare the fried rice choices

The EC Phở menu also lists Mixed Vegetable Fried Rice, Chicken Fried Rice, Beef Fried Rice, and House Special Fried Rice. The house special combines pork, chicken, and shrimp. Each name helps you choose which ingredients you want to be the focus.

If shrimp is what you are looking forward to, the shrimp version keeps the order clear. If your table wants a mixture of proteins, compare it with the house special. Check the descriptions and current prices together before making your choice.

## Pair the plate with another texture

A shared Vietnamese egg roll appetizer gives the meal a crisp opening. A salad offers another way to vary the textures at the table. Think about the whole order before adding dishes, especially if several people are each choosing a main course.

For anyone with an allergy or ingredient restriction, ask about the complete fried rice preparation, including seasonings and sauces. A dish named for shrimp can contain other ingredients as well. The restaurant team can help with questions that a short menu description cannot settle.

## Find shrimp fried rice at EC Phở

Open the Fried Rice section of our Greenville menu to see the current choices. EC Phở is at 109 Greenville Blvd SE, Suite #100. You can plan a meal around shrimp fried rice, then browse appetizers and drinks according to what else you feel like eating. Confirm any specific request with the team when ordering.`
  },
  {
    slug: 'grilled-chicken-egg-rolls-rice-greenville-nc',
    title: 'Grilled Chicken, Egg Rolls, and Rice on One Plate',
    seoTitle: 'Grilled Chicken & Egg Rolls in Greenville, NC',
    excerpt: 'Explore grilled chicken and egg rolls with steamed rice at EC Phở in Greenville, NC: three textures on one plate and a useful place to start.',
    keywords: ['grilled chicken egg rolls Greenville NC', 'chicken rice plate', 'Vietnamese chicken and rice', 'EC Phở menu'],
    image: '/images/menu/rice/052.jpg',
    imageAlt: 'Grilled chicken and crispy egg rolls served with steamed rice at EC Phở',
    menuItemId: 'r_combo1',
    relatedSlugs: ['vietnamese-egg-rolls-greenville-nc', 'grilled-pork-rice-plate-greenville-nc', 'grilled-beef-vermicelli-greenville-nc'],
    content: `One plate can carry three distinct textures without asking you to choose just one of them. Grilled Chicken & Egg Rolls with Steamed Rice brings together grilled chicken, crispy Vietnamese egg rolls, and a rice base at EC Phở in Greenville, NC. It is listed in Rice Plates, alongside the other grilled and sautéed dishes.

## Give each part its own bite

Start with a piece of chicken and some rice, then try the egg roll separately. The change from grilled meat to a crisp wrapper is part of the appeal. You can alternate between them through the meal instead of treating the egg rolls as something to finish before the main course.

Steamed rice gives the plate a consistent base. A forkful of rice with chicken tastes different from a bite of egg roll followed by rice. Keeping the components separate on the plate gives you a few combinations to return to as you eat.

## A clear starting point for a first visit

If you are new to Vietnamese rice plates, this order puts familiar ingredients in an easy-to-read format. The menu name tells you the three central parts of the meal. You can explore a grilled preparation and a fried appetizer together without choosing two separate main dishes.

Read the full name when ordering: this particular combination is served with steamed rice. Other rice plates list variations, so it helps to review the options attached to the dish you actually want. Ask the team about any changes you are considering.

## What to try after this combination

If the grilled chicken is your favorite part, look at the Grilled Chicken Rice Plate on a future visit. If you enjoy the egg rolls most, you can find Vietnamese Egg Rolls in the appetizer section and Vermicelli with Vietnamese Egg Rolls among the bún bowls.

That makes this plate a useful reference for exploring the rest of the menu. Start with the texture you enjoyed, then choose another format for it. Rice, vermicelli, and a separate appetizer plate each create a different meal around the same familiar element.

## Order chicken and egg rolls in Greenville

Visit the Rice Plates section of the EC Phở menu to find this combination. Our restaurant is on Greenville Blvd SE in Greenville, North Carolina. Before placing your order, check current availability and ask about ingredients if you have a specific requirement. Then settle in with the parts of the plate you are most looking forward to.`
  },
  {
    slug: 'sweet-sour-chicken-rice-greenville-nc',
    title: 'Sweet and Sour Chicken: Pineapple, Peppers, and Rice',
    seoTitle: 'Sweet & Sour Chicken in Greenville, NC',
    excerpt: 'Get to know sweet and sour chicken with pineapple and bell peppers at EC Phở in Greenville, NC, including the steamed and fried rice choices.',
    keywords: ['sweet and sour chicken Greenville NC', 'chicken rice plate Greenville', 'pineapple chicken', 'EC Phở rice plates'],
    image: '/images/menu/rice/054.jpg',
    imageAlt: 'Sweet and sour chicken with pineapple, bell peppers, and steamed rice at EC Phở',
    menuItemId: 'r54',
    relatedSlugs: ['grilled-chicken-egg-rolls-rice-greenville-nc', 'shrimp-fried-rice-greenville-nc', 'bo-kho-beef-stew-greenville-nc'],
    content: `Pineapple and bell peppers make a plate of chicken change direction from one forkful to the next. EC Phở lists Sweet and Sour Chicken Rice Plate as stir-fried chicken with those two ingredients. For diners in Greenville, NC who enjoy a meal organized around sauce and rice, it is a useful option to know.

## Follow the ingredients named on the menu

The chicken is joined by pineapple and bell peppers, so you have several combinations to try. Gather some chicken with rice first, then include a piece of pineapple in the next bite. Adding pepper makes another small change in texture.

Working through the plate this way helps you find the balance you enjoy. You do not need to spread every ingredient evenly at the beginning. Keep some rice separate and bring it into the sauced part of the dish as you go.

## Choose your rice base

This rice plate has steamed rice and fried rice variations on the EC Phở menu. Steamed rice gives the chicken and sauce a simple partner. Fried rice adds another seasoned element, which can change the balance of the whole plate.

The variations have different prices, so select the version you want when ordering. If you are comparing this dish with another chicken plate, read both descriptions and the rice options beside them. Similar names can lead to quite different meals.

## Compare it with the other chicken dishes

Our Rice Plates section includes grilled chicken and lemongrass chicken. The grilled chicken and egg roll combination is another choice if you want a crisp element alongside your rice. These options let you choose by preparation and texture as well as by protein.

Sweet and Sour Chicken is the option to consider when pineapple and peppers sound appealing. It has its own listing in Rice Plates; Orange Chicken Rice Plate appears separately in House Specials. Reading the dish name in full helps make sure your order matches the flavor you had in mind.

## Plan a chicken dinner in Greenville

Browse the Rice Plates section before your next visit to EC Phở at 109 Greenville Blvd SE, Suite #100. You can compare the chicken dishes there and build the rest of your order around the one you choose. If a sauce ingredient or preparation detail affects your decision, contact the team before ordering. The menu provides the starting point, and a direct conversation can fill in the details you need.`
  },
  {
    slug: 'green-papaya-salad-greenville-nc',
    title: 'Green Papaya Salad: A Closer Look at the Crunch',
    seoTitle: 'Green Papaya Salad in Greenville, NC',
    excerpt: 'Discover green papaya salad at EC Phở in Greenville, NC. Explore shredded papaya, herbs, and zesty dressing, then plan the rest of your meal.',
    keywords: ['green papaya salad Greenville NC', 'Vietnamese papaya salad', 'Vietnamese salads', 'EC Phở Greenville NC'],
    image: '/images/menu/salads/010.jpg',
    imageAlt: 'Shredded green papaya salad with herbs and shrimp in the EC Phở menu photograph',
    menuItemId: 's11',
    relatedSlugs: ['vietnamese-egg-rolls-greenville-nc', 'grilled-beef-vermicelli-greenville-nc', 'shrimp-fried-rice-greenville-nc'],
    content: `Thin strands of green papaya turn a salad into something you gather as much as something you scoop. At EC Phở in Greenville, NC, Green Papaya Salad is described as shredded green papaya with herbs and zesty dressing. It belongs to the Salads section, a useful stop when you want another texture alongside noodles or rice.

## Pay attention to the shredded texture

The papaya is cut into strands, giving you a different kind of bite from a plate built mostly around leafy greens. Pick up a small portion first so the dressing and herbs can join the papaya in the same mouthful. It is easier to notice the balance when the forkful is manageable.

Herbs and dressing are part of the menu description, but the experience is still yours to explore. Taste before adding any extra sauce or condiments that may accompany the dish. You may find the balance you want already in the first few bites.

## Use the photograph as a guide

Our menu photograph shows green papaya salad with shrimp, herbs, and other garnishes. The written description is shorter, naming papaya, herbs, and dressing. If you want to confirm the current protein or garnishes, ask the team when ordering.

That distinction is especially useful if you have a dietary requirement. A salad name does not tell you everything about its dressing or toppings. Confirm the ingredients that matter to you rather than assuming the dish is vegetarian or suitable for a particular allergy.

## Build a meal around different textures

Green papaya salad can bring another texture to a table ordering Vietnamese egg rolls, a rice plate, or a vermicelli bowl. A few bites between the other dishes can change the rhythm of the meal. Decide together how much variety you want before placing a large order.

The salad section also includes Shrimp Salad, Chicken Salad, Seaweed Salad, and Asia Squid Salad. Compare the descriptions if you are choosing by a particular ingredient. The shared category gives you several options, while the dish names help narrow the choice.

## Find papaya salad in Greenville

Open the Salads section of the EC Phở menu before visiting our restaurant on Greenville Blvd SE. You can plan a meal around papaya salad or choose it alongside another dish you already enjoy. Check the current menu and ask about ingredients or availability when ordering, especially if a specific topping is part of what you are looking forward to.`
  },
  {
    slug: 'stir-fried-vegetables-tofu-rice-greenville-nc',
    title: 'Stir-Fried Vegetables and Tofu: Build Your Next Bite',
    seoTitle: 'Vegetables & Tofu with Rice in Greenville, NC',
    excerpt: 'Explore stir-fried vegetables and tofu with rice at EC Phở in Greenville, NC. Compare tofu rice plates, vegetarian phở, and vermicelli options.',
    keywords: ['tofu rice plate Greenville NC', 'stir fried vegetables and tofu', 'vegetarian Vietnamese Greenville NC', 'EC Phở vegetarian menu'],
    image: '/images/menu/rice/051.jpg',
    imageAlt: 'Stir-fried vegetables and tofu served beside steamed rice at EC Phở',
    menuItemId: 'v67',
    relatedSlugs: ['vegetarian-pho-greenville-nc', 'grilled-pork-rice-plate-greenville-nc', 'green-papaya-salad-greenville-nc'],
    content: `A piece of tofu, a little vegetable, and a spoonful of rice let you build the bite yourself. Stir Fried Vegetables & Tofu at EC Phở is described as mixed seasonal vegetables with tofu served with rice. It is part of our Vegetarian section for guests planning a meal in Greenville, NC.

## Let the vegetables bring the variety

Mixed vegetables mean that each forkful can feel a little different. Gather tofu with one vegetable, then try another combination with rice. You can focus on an ingredient you enjoy or bring several parts together in the same bite.

The menu describes the vegetables as seasonal, so it is useful to ask about the current selection if a particular ingredient matters to you. Our photograph offers a view of one presentation, while the team can confirm what is being served when you order.

## Give the rice a role in the meal

Rice gives you a base for combining the tofu, vegetables, and the seasoning that comes with them. Try a small amount with the stir-fry before mixing more of the plate. That way you can decide how much rice you want with each bite.

Keeping some rice separate also gives you room to change the balance as you eat. You may want one forkful led by tofu and another led by the vegetables. A plate with distinct components lets you make those choices throughout the meal.

## Compare the other tofu dishes

Shaking Tofu with Rice is listed separately and described as wok-seared tofu cubes with onions and savory sauce. Fried Tofu with Vermicelli puts tofu over rice vermicelli and herbs. Vegetarian Phở combines vegetables and tofu in vegetable broth.

These are useful comparisons when tofu is the ingredient you want but you are still deciding on the format. Choose rice for a plate you can build bite by bite, vermicelli for a noodle dish, or phở for a soup. If you have a dietary restriction, ask about sauces and preparation for the specific order rather than relying on the category name alone.

## Explore vegetarian choices in Greenville

Find Stir Fried Vegetables & Tofu in the Vegetarian section of the EC Phở menu. Our restaurant is at 109 Greenville Blvd SE, Suite #100, in Greenville, North Carolina. Review the nearby dishes to plan your meal, and contact the team about ingredients or availability whenever you need more detail than the menu description provides.`
  },
];

export const dishStories: BlogPost[] = stories.map(story => ({
  ...story,
  date: '2026-10-16',
  author: 'EC Phở Team',
  readTime: `${Math.max(1, Math.ceil(story.content.split(/\s+/).length / 200))} min`,
}));
