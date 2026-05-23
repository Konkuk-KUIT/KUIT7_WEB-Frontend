export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  isBest?: boolean;
}

export interface Store {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  category: string;
  minOrderPrice: number;
  deliveryFee: number;
  deliveryTime: string;
  menuItems: MenuItem[];
}

export const stores: Store[] = [
  {
    id: 1,
    name: '셀로리 한남점',
    rating: 4.9,
    reviewCount: 3919,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '15~25분',
    menuItems: [
      {
        id: 1,
        name: '토마토 샐러드',
        price: 7900,
        description: '신선한 토마토, 양상추, 올리브유, 발사믹, 시저드레싱',
        isBest: true,
      },
      {
        id: 2,
        name: '시저 샐러드',
        price: 8900,
        description: '로메인 상추에 크루통과 치킨, 달걀, 올리브유, 치즈',
        isBest: false,
      },
      {
        id: 3,
        name: '리코타치즈 샐러드',
        price: 11900,
        description: '리코타치즈, 방울토마토, 루꼴라, 꿀, 블랙올리브, 발사믹',
        isBest: false,
      },
      {
        id: 4,
        name: '한당지 샐러드',
        price: 7400,
        description: '닭가슴, 고구마, 귀리, 계란, 아보카도',
        isBest: false,
      },
      {
        id: 5,
        name: '연어 샐러드',
        price: 9500,
        description: '훈제연어와 크림치즈, 케이퍼, 새콤달콤, 방울토마토, 잎채소',
        isBest: false,
      },
      {
        id: 6,
        name: '우삼겹 재료꾼 샐러드',
        price: 8900,
        description: '우삼겹, 래디쉬, 어린잎, 양배추, 두부, 무화과, 양파 드레싱',
        isBest: false,
      },
    ],
  },
  {
    id: 2,
    name: '1위 셀로리 한남점',
    rating: 4.9,
    reviewCount: 97,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [],
  },
  {
    id: 3,
    name: '2위 옐로우푸드 샐러드',
    rating: 4.9,
    reviewCount: 1358,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [],
  },
  {
    id: 4,
    name: '3위 산디에블도 한남점',
    rating: 4.6,
    reviewCount: 80,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [],
  },
  {
    id: 5,
    name: 'THE 샐러드가득담은',
    rating: 5.0,
    reviewCount: 27,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [],
  },
  {
    id: 6,
    name: '파스토보어',
    rating: 4.8,
    reviewCount: 81,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2500,
    deliveryTime: '13분~30분',
    menuItems: [],
  },
  {
    id: 7,
    name: '한나다 샐러드',
    rating: 4.7,
    reviewCount: 102,
    category: '샐러드',
    minOrderPrice: 13000,
    deliveryFee: 2000,
    deliveryTime: '13분~30분',
    menuItems: [],
  },
];

export const categories = [
  { id: 1, name: '치킨', emoji: '🍗' },
  { id: 2, name: '샐러드', emoji: '🥗' },
  { id: 3, name: '햄버거', emoji: '🍔' },
  { id: 4, name: '한식', emoji: '🍱' },
  { id: 5, name: '분식', emoji: '🍜' },
  { id: 6, name: '지킨', emoji: '🍖' },
  { id: 7, name: '초밥', emoji: '🍣' },
  { id: 8, name: '샌드위치', emoji: '🥪' },
  { id: 9, name: '파스타', emoji: '🍝' },
  { id: 10, name: '디저트', emoji: '🍰' },
  { id: 11, name: '카페', emoji: '☕' },
  { id: 12, name: '더보기', emoji: '⋯' },
];

export const cartItems = [
  {
    id: 1,
    storeName: '셀로리 한남점',
    menuName: '토마토 샐러드',
    description: '토마토, 양상추, 올리브유, 발사믹, 시저드레싱, 시저드레싱, 시저드레싱',
    quantity: 1,
    price: 10600,
  },
];
