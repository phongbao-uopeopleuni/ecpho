export interface GalleryImage {
  src: string;
  alt: string;
}

export interface MenuGallerySection {
  id: string;
  label: string;
  images: GalleryImage[];
}

export const restaurantImages: { exterior: GalleryImage[]; interior: GalleryImage[] } = {
  exterior: [
    { src: '/images/exterior/exterior1.jpg', alt: 'EC Phở Restaurant — front entrance' },
    { src: '/images/exterior/exterior2.jpg', alt: 'EC Phở Restaurant — exterior view' },
  ],
  interior: [
    { src: '/images/interior/interior1.jpg', alt: 'EC Phở — dining room atmosphere' },
    { src: '/images/interior/interior2.jpg', alt: 'EC Phở — cozy seating area' },
  ],
};

export const menuGallery: MenuGallerySection[] = [
  {
    id: 'appetizers',
    label: 'Appetizers',
    images: [
      { src: '/images/menu/appetizers/001.jpg', alt: 'Appetizer dish' },
      { src: '/images/menu/appetizers/002.jpg', alt: 'Appetizer dish' },
      { src: '/images/menu/appetizers/003.jpg', alt: 'Appetizer dish' },
      { src: '/images/menu/appetizers/004.jpg', alt: 'Appetizer dish' },
      { src: '/images/menu/appetizers/005.jpg', alt: 'Appetizer dish' },
      { src: '/images/menu/appetizers/006.jpg', alt: 'Appetizer dish' },
      { src: '/images/menu/appetizers/007.jpg', alt: 'Appetizer dish' },
      { src: '/images/menu/appetizers/008.jpg', alt: 'Appetizer dish' },
      { src: '/images/menu/appetizers/009.jpg', alt: 'Appetizer dish' },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    images: [
      { src: '/images/menu/salads/010.jpg', alt: 'Salad' },
      { src: '/images/menu/salads/011.jpg', alt: 'Salad' },
      { src: '/images/menu/salads/014.jpg', alt: 'Salad' },
      { src: '/images/menu/salads/015.jpg', alt: 'Salad' },
    ],
  },
  {
    id: 'pho',
    label: 'Phở',
    images: [
      { src: '/images/menu/pho/016.jpg', alt: 'Phở' },
      { src: '/images/menu/pho/021.jpg', alt: 'Phở' },
      { src: '/images/menu/pho/022.jpg', alt: 'Phở' },
      { src: '/images/menu/pho/023.jpg', alt: 'Phở' },
    ],
  },
  {
    id: 'bun',
    label: 'Vermicelli',
    images: [
      { src: '/images/menu/bun/028.jpg', alt: 'Vermicelli dish' },
      { src: '/images/menu/bun/034.jpg', alt: 'Vermicelli dish' },
      { src: '/images/menu/bun/035.jpg', alt: 'Vermicelli dish' },
      { src: '/images/menu/bun/036.jpg', alt: 'Vermicelli dish' },
      { src: '/images/menu/bun/037.jpg', alt: 'Vermicelli dish' },
    ],
  },
  {
    id: 'rice',
    label: 'Rice Plates',
    images: [
      { src: '/images/menu/rice/039.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/041.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/042.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/044.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/047.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/048.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/051.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/052.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/053.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/054.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/055.jpg', alt: 'Rice plate' },
      { src: '/images/menu/rice/066.jpg', alt: 'Rice plate' },
    ],
  },
  {
    id: 'fried-rice',
    label: 'Fried Rice',
    images: [
      { src: '/images/menu/fried-rice/059.jpg', alt: 'Fried rice' },
    ],
  },
  {
    id: 'vegetarian',
    label: 'Vegetarian',
    images: [
      { src: '/images/menu/vegetarian/063.jpg', alt: 'Vegetarian dish' },
    ],
  },
  {
    id: 'specials',
    label: 'House Specials',
    images: [
      { src: '/images/menu/specials/069.jpg', alt: 'House special' },
      { src: '/images/menu/specials/073.jpg', alt: 'House special' },
      { src: '/images/menu/specials/075.jpg', alt: 'House special' },
      { src: '/images/menu/specials/077.jpg', alt: 'House special' },
      { src: '/images/menu/specials/079.jpg', alt: 'House special' },
      { src: '/images/menu/specials/080.jpg', alt: 'House special' },
      { src: '/images/menu/specials/083.jpg', alt: 'House special' },
      { src: '/images/menu/specials/084.jpg', alt: 'House special' },
      { src: '/images/menu/specials/085.jpg', alt: 'House special' },
      { src: '/images/menu/specials/S3.jpg', alt: 'House special' },
      { src: '/images/menu/specials/S4.jpg', alt: 'House special' },
      { src: '/images/menu/specials/3.png', alt: 'House special' },
      { src: '/images/menu/specials/general-tsos-chicken.jpg', alt: 'House special' },
      { src: '/images/menu/specials/meat-balls-with-bread.jpg', alt: 'House special' },
      { src: '/images/menu/specials/walnut-shrimp.jpg', alt: 'House special' },
      { src: '/images/menu/specials/specials-z1.jpg', alt: 'House special' },
      { src: '/images/menu/specials/specials-z2.jpg', alt: 'House special' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    images: [
      { src: '/images/menu/drinks/coffee.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/thaitea.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/3-bean.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/coconut-juice.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/coconut-smoothie.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/flan-cake-coffee.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/hot-tea.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/mango-smoothie.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/milktea-smoothie.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/passion-fruit.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/strawberry-smoothie.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/taro.jpg', alt: 'Drink' },
      { src: '/images/menu/drinks/vietnamese-iced-coffee.jpg', alt: 'Drink' },
    ],
  },
];
