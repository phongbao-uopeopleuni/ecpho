export interface MenuItem {
  id: string;
  code?: string;
  name: string;
  vietnameseName?: string;
  description: string;
  price: string;
  category: string;
  tags?: string[];
  image?: string;
  variations?: {
    name: string;
    price: string;
  }[];
}

export const menuCategories = [
  "Appetizers",
  "Salads",
  "Noodle Soups (Phở)",
  "Vermicelli (Bún)",
  "Rice Plates",
  "Fried Rice",
  "Vegetarian",
  "House Specials",
  "Drinks",
  "Beer & Wine",
  "Extras"
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "a1",
    code: "1",
    name: "Vietnamese Egg Rolls",
    description: "Crispy traditional spring rolls with savory filling.",
    price: "7.50",
    category: "Appetizers"
  },
  {
    id: "a2",
    code: "2",
    name: "Fresh Shrimp Spring Rolls",
    vietnameseName: "Gỏi Cuốn Tôm",
    description: "Delicate rice paper rolls with fresh shrimp, vermicelli, and herbs. Served with homemade peanut hoisin sauce.",
    price: "7.50",
    category: "Appetizers",
    tags: ["Signature"],
    image: "/images/menu/appetizers/002.jpg"
  },
  {
    id: "a3",
    code: "3",
    name: "Fried Tofu Spring Rolls",
    description: "Rice paper rolls with fried tofu and fresh vegetables.",
    price: "7.50",
    category: "Appetizers"
  },
  {
    id: "a4",
    code: "4",
    name: "Grilled Beef Spring Rolls",
    description: "Rice paper rolls with grilled beef and herbs.",
    price: "7.50",
    category: "Appetizers"
  },
  {
    id: "a5",
    code: "5",
    name: "Crab Rangoon",
    description: "Crispy wontons filled with cream cheese and crab meat.",
    price: "7.50",
    category: "Appetizers"
  },
  {
    id: "a6",
    code: "6",
    name: "Pot Stickers",
    description: "Steam or Fried dumplings.",
    price: "7.50",
    category: "Appetizers",
    variations: [
      { name: "Steamed", price: "7.50" },
      { name: "Fried", price: "7.50" },
      { name: "Half-Half", price: "7.50" }
    ]
  },
  {
    id: "a7",
    code: "7",
    name: "Popcorn Chicken",
    description: "Bite-sized pieces of crispy fried chicken.",
    price: "7.50",
    category: "Appetizers"
  },
  {
    id: "a8",
    code: "8",
    name: "Vietnamese Sandwich",
    vietnameseName: "Bánh Mì",
    description: "Classic sandwich with choice of protein.",
    price: "8.90",
    category: "Appetizers",
    variations: [
      { name: "Grilled Pork", price: "8.90" },
      { name: "Grilled Beef", price: "8.90" },
      { name: "BBQ Pork", price: "8.90" },
      { name: "Cold Cut", price: "8.90" }
    ]
  },
  {
    id: "a9",
    code: "9",
    name: "Fried Fish Ball",
    description: "Crispy fried savory fish balls.",
    price: "7.50",
    category: "Appetizers"
  },
  {
    id: "a10",
    code: "10",
    name: "Rocket Shrimp Rolls",
    description: "Crispy wrapped whole shrimp.",
    price: "7.50",
    category: "Appetizers"
  },
  {
    id: "a11",
    code: "10.1",
    name: "Crispy Salt and Pepper Squid",
    description: "Tender lightly battered squid seasoned with salt and pepper.",
    price: "14.99",
    category: "Appetizers"
  },

  // Salads
  {
    id: "s11",
    code: "11",
    name: "Green Papaya Salad",
    description: "Shredded green papaya with herbs and Zesty dressing.",
    price: "16.50",
    category: "Salads"
  },
  {
    id: "s12",
    code: "12",
    name: "Shrimp Salad",
    description: "Fresh garden salad topped with grilled shrimp.",
    price: "16.50",
    category: "Salads"
  },
  {
    id: "s13",
    code: "13",
    name: "Chicken Salad",
    description: "Fresh garden salad topped with grilled chicken.",
    price: "16.50",
    category: "Salads"
  },
  {
    id: "s14",
    code: "14",
    name: "Seaweed Salad",
    description: "Traditional seasoned seaweed with sesame.",
    price: "9.50",
    category: "Salads"
  },
  {
    id: "s15",
    code: "15",
    name: "Asia Squid Salad",
    description: "Seasoned squid salad with Asian herbs.",
    price: "9.50",
    category: "Salads"
  },

  // Pho
  {
    id: "p16",
    code: "16",
    name: "Eye Round Steak Phở",
    vietnameseName: "Phở Tái",
    description: "Thin slices of eye round steak.",
    price: "14.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "14.50" },
      { name: "Large", price: "19.00" }
    ]
  },
  {
    id: "p17",
    code: "17",
    name: "Brisket Phở",
    vietnameseName: "Phở Chín",
    description: "Tender beef brisket.",
    price: "14.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "14.50" },
      { name: "Large", price: "20.00" }
    ]
  },
  {
    id: "p18",
    code: "18",
    name: "Eye Round Steak & Brisket Phở",
    description: "Combination of steak and brisket.",
    price: "15.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "15.50" },
      { name: "Large", price: "20.00" }
    ]
  },
  {
    id: "p19",
    code: "19",
    name: "House Special Phở",
    vietnameseName: "Phở Đặc Biệt",
    description: "Eye round steak, brisket, and beef balls.",
    price: "16.50",
    category: "Noodle Soups (Phở)",
    tags: ["Signature"],
    variations: [
      { name: "Regular", price: "16.50" },
      { name: "Large", price: "21.00" }
    ]
  },
  {
    id: "p20",
    code: "20",
    name: "Eye Round Steak & Beef Balls",
    description: "Steak and savory beef balls.",
    price: "14.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "14.50" },
      { name: "Large", price: "19.00" }
    ]
  },
  {
    id: "p21",
    code: "21",
    name: "Beef Balls Phở",
    description: "Savory beef balls.",
    price: "14.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "14.50" },
      { name: "Large", price: "19.00" }
    ]
  },
  {
    id: "p22",
    code: "22",
    name: "Seafood Phở",
    description: "Shrimp, fish balls, and squid.",
    price: "17.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "17.50" },
      { name: "Large", price: "22.00" }
    ]
  },
  {
    id: "p23",
    code: "23",
    name: "Shrimp Phở",
    description: "Plump shrimp in choice of broth.",
    price: "16.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "16.50" },
      { name: "Large", price: "21.00" }
    ]
  },
  {
    id: "p24",
    code: "24",
    name: "Chicken Phở",
    description: "Tender chicken slices.",
    price: "15.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "15.50" },
      { name: "Large", price: "20.00" }
    ]
  },
  {
    id: "p25",
    code: "25",
    name: "Vegetable Phở",
    description: "Vegetables and tofu in vegetable broth.",
    price: "15.50",
    category: "Noodle Soups (Phở)",
    variations: [
      { name: "Regular", price: "15.50" },
      { name: "Large", price: "20.00" }
    ]
  },
  {
    id: "p_ext1",
    code: "EC1",
    name: "Pho Oxtail Beef",
    description: "Premium oxtail slow-simmered.",
    price: "22.50",
    category: "Noodle Soups (Phở)",
    tags: ["Premium"],
    variations: [
      { name: "Regular", price: "22.50" },
      { name: "Large", price: "27.00" }
    ]
  },
  {
    id: "p_ext2",
    code: "EC2",
    name: "Pho Ribs Beef",
    description: "Tender beef ribs with pho broth.",
    price: "22.50",
    category: "Noodle Soups (Phở)",
    tags: ["Premium"],
    variations: [
      { name: "Regular", price: "22.50" },
      { name: "Large", price: "27.00" }
    ]
  },

  // Bun
  {
    id: "b27",
    code: "27",
    name: "Vermicelli with Grilled Pork",
    description: "Served with fresh herbs, bean sprouts, and fish sauce.",
    price: "16.50",
    category: "Vermicelli (Bún)"
  },
  {
    id: "b28",
    code: "28",
    name: "Vermicelli with Grilled Beef",
    description: "Char-grilled marinated beef over rice vermicelli.",
    price: "17.50",
    category: "Vermicelli (Bún)"
  },
  {
    id: "b29",
    code: "29",
    name: "Vermicelli with Grilled Chicken",
    description: "Succulent grilled chicken over rice noodles.",
    price: "16.50",
    category: "Vermicelli (Bún)"
  },
  {
    id: "b30",
    code: "30",
    name: "Vermicelli with Grilled Shrimp",
    description: "Grilled jumbo shrimp over vermicelli.",
    price: "17.50",
    category: "Vermicelli (Bún)"
  },
  {
    id: "b32",
    code: "32",
    name: "Vermicelli Combination",
    description: "Grilled chicken, beef, and shrimp combination.",
    price: "18.50",
    category: "Vermicelli (Bún)"
  },
  {
    id: "b33",
    code: "33",
    name: "Vermicelli with Vietnamese Egg Rolls",
    description: "Crispy egg rolls over vermicelli and herbs.",
    price: "16.50",
    category: "Vermicelli (Bún)"
  },
  {
    id: "b37",
    code: "37",
    name: "Vermicelli with Lemongrass Beef",
    description: "Sautéed beef with aromatic lemongrass.",
    price: "17.50",
    category: "Vermicelli (Bún)"
  },

  // Rice Plates
  {
    id: "r39",
    code: "39",
    name: "Grilled Beef Rice Plate",
    description: "Marinated grilled beef with rice.",
    price: "17.50",
    category: "Rice Plates",
    variations: [
      { name: "Steamed Rice", price: "17.50" },
      { name: "Fried Rice", price: "22.25" }
    ]
  },
  {
    id: "r40",
    code: "40",
    name: "Grilled Chicken Rice Plate",
    description: "Classic grilled chicken with rice.",
    price: "16.50",
    category: "Rice Plates",
    variations: [
      { name: "Steamed Rice", price: "16.50" },
      { name: "Fried Rice", price: "21.25" }
    ]
  },
  {
    id: "r42",
    code: "42",
    name: "Grilled Pork Rice Plate",
    description: "Savory char-grilled pork with rice.",
    price: "16.50",
    category: "Rice Plates",
    variations: [
      { name: "Steamed Rice", price: "16.50" },
      { name: "Fried Rice", price: "21.25" }
    ]
  },
  {
    id: "r46",
    code: "46",
    name: "Grilled Combination Rice Plate",
    description: "Chicken, beef, and shrimp combo.",
    price: "19.50",
    category: "Rice Plates",
    variations: [
      { name: "Steamed Rice", price: "19.50" },
      { name: "Fried Rice", price: "24.25" }
    ]
  },
  {
    id: "r49",
    code: "49",
    name: "Shaking Beef with Rice Plate",
    description: "Cubed beef stir-fried with bell peppers and onions.",
    price: "19.50",
    category: "Rice Plates",
    variations: [
      { name: "Steamed Rice", price: "19.50" },
      { name: "Fried Rice", price: "24.25" }
    ]
  },
  {
    id: "r50",
    code: "50",
    name: "Lemongrass Chicken Rice Plate",
    description: "Sautéed chicken with lemongrass and chili.",
    price: "17.50",
    category: "Rice Plates",
    variations: [
      { name: "Steamed Rice", price: "17.50" },
      { name: "Fried Rice", price: "22.25" }
    ]
  },
  {
    id: "r51",
    code: "51",
    name: "Lemongrass Beef Rice Plate",
    description: "Sautéed beef with lemongrass and chili.",
    price: "18.50",
    category: "Rice Plates",
    variations: [
      { name: "Steamed Rice", price: "18.50" },
      { name: "Fried Rice", price: "23.25" }
    ]
  },
  {
    id: "r54",
    code: "54",
    name: "Sweet and Sour Chicken Rice Plate",
    description: "Stir-fried chicken with pineapple and bell peppers.",
    price: "17.50",
    category: "Rice Plates",
    variations: [
      { name: "Steamed Rice", price: "17.50" },
      { name: "Fried Rice", price: "22.25" }
    ]
  },

  {
    id: "r_combo1",
    name: "Grilled Chicken & Egg Rolls with Steamed Rice",
    description: "Tender grilled chicken paired with crispy Vietnamese egg rolls, served over fragrant steamed rice.",
    price: "17.50",
    category: "Rice Plates",
    tags: ["Signature"],
    image: "/images/menu/rice/052.jpg"
  },

  // Fried Rice
  {
    id: "fr56",
    code: "56",
    name: "Mixed Vegetable Fried Rice",
    description: "Healthy medley of vegetables stir-fried with fragrant rice.",
    price: "16.50",
    category: "Fried Rice"
  },
  {
    id: "fr57",
    code: "57",
    name: "Chicken Fried Rice",
    description: "Classic fried rice with tender chicken.",
    price: "17.50",
    category: "Fried Rice"
  },
  {
    id: "fr58",
    code: "58",
    name: "Beef Fried Rice",
    description: "Hearty fried rice with savory beef slices.",
    price: "18.50",
    category: "Fried Rice"
  },
  {
    id: "fr59",
    code: "59",
    name: "Shrimp Fried Rice",
    description: "Fried rice with plump jumbo shrimp.",
    price: "18.50",
    category: "Fried Rice"
  },
  {
    id: "fr61",
    code: "61",
    name: "House Special Fried Rice",
    description: "Combination fried rice with pork, chicken, and shrimp.",
    price: "19.50",
    category: "Fried Rice",
    tags: ["Bestseller"]
  },

  // Vegetarian
  {
    id: "v63",
    code: "63",
    name: "Vegetarian Phở",
    description: "Fresh vegetables and tofu in vegetable broth.",
    price: "15.50",
    category: "Vegetarian"
  },
  {
    id: "v64",
    code: "64",
    name: "Fried Tofu with Vermicelli",
    description: "Crispy tofu served over rice vermicelli and herbs.",
    price: "14.50",
    category: "Vegetarian"
  },
  {
    id: "v66",
    code: "66",
    name: "Shaking Tofu with Rice",
    description: "Wok-seared tofu cubes with onions and savory sauce.",
    price: "16.50",
    category: "Vegetarian"
  },
  {
    id: "v67",
    code: "67",
    name: "Stir Fried Vegetables & Tofu",
    description: "Mixed seasonal vegetables with tofu served with rice.",
    price: "16.50",
    category: "Vegetarian"
  },

  // House Specials
  {
    id: "hs73",
    code: "73",
    name: "Pad Thai",
    description: "Noodles stir-fried with bean sprouts, egg, and peanuts. Choice of Beef or Chicken.",
    price: "17.50",
    category: "House Specials"
  },
  {
    id: "hs79",
    code: "79",
    name: "Lo Mein Noodles",
    description: "Stir-fried soft wheat noodles with vegetables and chicken.",
    price: "18.50",
    category: "House Specials"
  },
  {
    id: "hs83",
    code: "83",
    name: "Spicy Beef Noodle Soup",
    vietnameseName: "Bún Bò Huế",
    description: "Bold lemongrass broth with thick rice noodles and beef.",
    price: "17.50",
    category: "House Specials",
    tags: ["Spicy", "Authentic"]
  },
  {
    id: "hs_s14",
    code: "S14",
    name: "Shaking Beef with Pasta",
    description: "Bò Lúc Lắc served with savory seasoned pasta.",
    price: "20.50",
    category: "House Specials"
  },
  {
    id: "hs_s2",
    code: "S2",
    name: "Vietnamese Caramelized Clay Pot",
    description: "Traditional savory fish or pork cooked in clay pot.",
    price: "15.99",
    category: "House Specials"
  },
  {
    id: "hs85",
    code: "85",
    name: "Beef Stew",
    vietnameseName: "Bò Kho",
    description: "Traditional Vietnamese beef stew with carrots.",
    price: "17.50",
    category: "House Specials"
  },
  {
    id: "hs_s1",
    code: "S1",
    name: "Mango Salad Shrimp",
    description: "Fresh mango salad with grilled shrimp.",
    price: "15.50",
    category: "House Specials"
  },
  {
    id: "hs_s11",
    code: "S11",
    name: "Vietnamese Sweet and Sour Shrimp Soup",
    vietnameseName: "Canh Chua Tôm",
    description: "Traditional tamarind-based soup with shrimp and vegetables.",
    price: "14.99",
    category: "House Specials"
  },
  {
    id: "hs_s4",
    code: "S4",
    name: "Orange Chicken Rice Plate",
    description: "Crispy chicken in tangy orange sauce.",
    price: "16.99",
    category: "House Specials",
    variations: [
      { name: "Steamed Rice", price: "16.99" },
      { name: "Fried Rice", price: "21.74" }
    ]
  },
  {
    id: "hs_s5",
    code: "S5",
    name: "Fish Sauce Chicken Wings",
    description: "Crispy wings tossed in savory fish sauce glaze.",
    price: "11.99",
    category: "House Specials"
  },

  // Drinks
  {
    id: "d89",
    code: "89",
    name: "Vietnamese Iced Coffee",
    vietnameseName: "Cà Phê Sữa Đá",
    description: "Strong drip coffee with condensed milk.",
    price: "7.50",
    category: "Drinks"
  },
  {
    id: "d91",
    code: "91",
    name: "Thai Tea",
    description: "Traditional creamy Thai milk tea.",
    price: "7.50",
    category: "Drinks",
    variations: [
      { name: "With Boba", price: "7.50" },
      { name: "No Boba", price: "7.50" }
    ]
  },
  {
    id: "d92",
    code: "92",
    name: "Coconut Juice",
    description: "Cold and refreshing coconut water.",
    price: "7.50",
    category: "Drinks"
  },
  {
    id: "d93",
    code: "93",
    name: "Fresh Limeade",
    description: "Freshly squeezed lime juice.",
    price: "7.50",
    category: "Drinks"
  },
  {
    id: "d94",
    code: "94",
    name: "3 Bean Dessert",
    description: "Sweet and creamy Vietnamese dessert.",
    price: "7.50",
    category: "Drinks"
  },
  {
    id: "d95",
    code: "95",
    name: "Passion Fruit Juice",
    description: "Refreshing and tangy passion fruit drink.",
    price: "7.50",
    category: "Drinks"
  },
  {
    id: "d96",
    code: "96",
    name: "Fruit Smoothie",
    description: "Refreshing blended fruit smoothie.",
    price: "7.50",
    category: "Drinks",
    variations: [
      { name: "Strawberry", price: "7.50" },
      { name: "Peach", price: "7.50" },
      { name: "Mango", price: "7.50" },
      { name: "Banana", price: "7.50" },
      { name: "Avocado", price: "7.50" },
      { name: "Taro", price: "7.50" }
    ]
  },

  // Beer & Wine
  {
    id: "bw1",
    code: "BW01",
    name: "Yuengling",
    description: "Traditional lager.",
    price: "4.50",
    category: "Beer & Wine"
  },
  {
    id: "bw3",
    code: "BW03",
    name: "Sapporo",
    description: "Premium Japanese lager.",
    price: "4.50",
    category: "Beer & Wine"
  },
  {
    id: "bw7",
    code: "BW07",
    name: "Corona",
    description: "Authentic Mexican lager.",
    price: "4.50",
    category: "Beer & Wine"
  },
  {
    id: "bw9",
    code: "BW09",
    name: "Cabernet Sauvignon",
    description: "Full-bodied red wine.",
    price: "4.50",
    category: "Beer & Wine"
  },
  {
    id: "bw10",
    code: "BW10",
    name: "Moscato Wine",
    description: "Sweet white wine.",
    price: "4.50",
    category: "Beer & Wine"
  },

  // Extras & Add-ons
  {
    id: "ex_noodle",
    code: "EX01.1",
    name: "Extra Noodles",
    description: "Add-on for soups.",
    price: "3.75",
    category: "Extras",
    variations: [
      { name: "Rice Noodle", price: "3.75" },
      { name: "Egg Noodle", price: "3.75" }
    ]
  },
  {
    id: "ex_rice",
    code: "EX04",
    name: "Extra Rice",
    description: "Side portions of rice.",
    price: "3.00",
    category: "Extras",
    variations: [
      { name: "Steamed Rice", price: "3.00" },
      { name: "Fried Rice (Bowl)", price: "3.75" },
      { name: "Fried Rice (Plate)", price: "8.99" }
    ]
  },
  {
    id: "ex_meat_seafood",
    code: "EX03/02",
    name: "Extra Protein",
    description: "Add-on meat or seafood.",
    price: "7.99",
    category: "Extras",
    variations: [
      { name: "Extra Meat", price: "7.99" },
      { name: "Extra Seafood", price: "7.99" }
    ]
  },
  {
    id: "ex_veg_egg",
    code: "EX02.2",
    name: "Extra Veggies & Egg",
    description: "Add-on vegetables or egg.",
    price: "3.00",
    category: "Extras",
    variations: [
      { name: "Extra Veggies", price: "3.00" },
      { name: "Extra Egg", price: "3.00" }
    ]
  },
  {
    id: "ex_boba",
    name: "Bubble Tea Extras",
    description: "Add flavors or boba to your drink.",
    price: "0.50",
    category: "Extras",
    variations: [
      { name: "Taro Flavor", price: "0.50" },
      { name: "Coconut Flavor", price: "0.50" },
      { name: "Mango Flavor", price: "0.50" },
      { name: "Strawberry Flavor", price: "0.50" },
      { name: "Thai Tea Flavor", price: "0.50" },
      { name: "Milk Tea Flavor", price: "0.50" },
      { name: "Red Bean", price: "0.50" },
      { name: "Extra Boba", price: "0.50" }
    ]
  },
];

export const menuDisclaimer = "Prices and availability may change. A $0.70 to-go fee applies to takeout orders. Please check DoorDash or call the restaurant for the latest information.";
