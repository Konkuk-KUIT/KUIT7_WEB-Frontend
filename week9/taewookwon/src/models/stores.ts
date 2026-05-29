export type Category = {
  id: number;
  name: string;
  image: string;
};

export type Menu = {
  id: number;
  name: string;
  price: number;
  description: string;
  isBest?: boolean;
};

export type Store = {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  paymentMethod: string;
  menus: Menu[];
};

export type CartItem = {
  id: number;
  menuName: string;
  options: string;
  quantity: number;
  totalPrice: number;
};

export const categories: Category[] = [
  { id: 1, name: '피자', image: '/src/assets/pizza.svg' },
  { id: 2, name: '샐러드', image: '/src/assets/salad.svg' },
  { id: 3, name: '햄버거', image: '/src/assets/burger.svg' },
  { id: 4, name: '한식', image: '/src/assets/korean.svg' },
  { id: 5, name: '분식', image: '/src/assets/bunsik.svg' },
  { id: 6, name: '치킨', image: '/src/assets/chicken.svg' },
  { id: 7, name: '초밥', image: '/src/assets/sushi.svg' },
  { id: 8, name: '샌드위치', image: '/src/assets/sandwich.svg' },
  { id: 9, name: '파스타', image: '/src/assets/pasta.svg' },
  { id: 10, name: '디저트', image: '/src/assets/dessert.svg' },
  { id: 11, name: '커피', image: '/src/assets/coffee.svg' },
  { id: 12, name: '더보기', image: '/src/assets/etc.svg' },
];

export const stores: Store[] = [
  {
    id: 1,
    name: '샐로리 한남점',
    rating: 4.9,
    reviewCount: 3919,
    deliveryTime: '13분~30분',
    deliveryFee: 2000,
    minOrder: 13000,
    paymentMethod: '토스결제만 현장결제 안됨',
    menus: [
      {
        id: 1,
        name: '토마토 샐러드',
        price: 7600,
        description: '계란, 옥수수, 양파, 올리브, 베이컨, 시저드레싱',
        isBest: true,
      },
      {
        id: 2,
        name: '시저 샐러드',
        price: 6900,
        description: '로메인 상추와 크루통이며, 달걀, 올리브유, 레몬 즙, 마늘',
      },
      {
        id: 3,
        name: '리코타치즈 샐러드',
        price: 6900,
        description: '리코타치즈, 양상추, 베이비채소, 방울토마토, 블랙올리브',
      },
      {
        id: 4,
        name: '탄단지 샐러드',
        price: 7600,
        description: '치킨, 고구마, 견과류, 크래베리, 오리엔탈',
      },
      {
        id: 5,
        name: '연어 샐러드',
        price: 9800,
        description: '훈제연어 슬라이스, 양상추, 베이비채소, 양파, 케이퍼',
      },
      {
        id: 6,
        name: '우삼겹 메밀면 샐러드',
        price: 8900,
        description: '우삼겹, 메밀면, 오이, 양상추, 호두, 옥수수, 참깨 드레싱',
      },
    ],
  },
  {
    id: 2,
    name: '옐로우푸드 샐러드',
    rating: 4.8,
    reviewCount: 1129,
    deliveryTime: '13분~30분',
    deliveryFee: 2000,
    minOrder: 12000,
    paymentMethod: '토스결제만 현장결제 안됨',
    menus: [],
  },
  {
    id: 3,
    name: '씬더볼드 한남점',
    rating: 4.8,
    reviewCount: 919,
    deliveryTime: '13분~30분',
    deliveryFee: 2000,
    minOrder: 12000,
    paymentMethod: '토스결제만 현장결제 안됨',
    menus: [],
  },
  {
    id: 4,
    name: 'THE 샐러드가득담은',
    rating: 5.0,
    reviewCount: 27,
    deliveryTime: '13분~30분',
    deliveryFee: 2000,
    minOrder: 12000,
    paymentMethod: '토스결제만 현장결제 안됨',
    menus: [],
  },
  {
    id: 5,
    name: '파스토보이',
    rating: 4.8,
    reviewCount: 801,
    deliveryTime: '13분~30분',
    deliveryFee: 2000,
    minOrder: 12000,
    paymentMethod: '토스결제만 현장결제 안됨',
    menus: [],
  },
  {
    id: 6,
    name: '힘난다 샐러드',
    rating: 4.1,
    reviewCount: 24,
    deliveryTime: '13분~30분',
    deliveryFee: 2000,
    minOrder: 12000,
    paymentMethod: '토스결제만 현장결제 안됨',
    menus: [],
  },
];

export const cartItems: CartItem[] = [
  {
    id: 1,
    menuName: '토마토 샐러드',
    options: '추천소스, 채소볼, 베이컨추가, 시저드레싱 추가',
    quantity: 1,
    totalPrice: 10600,
  },
];

export const userAddress = '한남중앙로 40길 (한남 빌리지)';
