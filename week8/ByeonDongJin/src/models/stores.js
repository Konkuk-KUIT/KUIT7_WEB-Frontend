import pizza from "../assets/pizza.svg";
import salad from "../assets/Salad.svg";
import burger from "../assets/burger.svg";
import kfood from "../assets/k-food.svg";
import ksnack from "../assets/k-snack.svg";
import chicken from "../assets/chicken.svg";
import sushi from "../assets/sushi.svg";
import sandwich from "../assets/sandwich.svg";
import pasta from "../assets/pasta.svg";
import dessert from "../assets/dessert.svg";
import coffee from "../assets/coffee.svg";
import more from "../assets/more.svg";





export const foodCategories = [
  { name: "피자", image: pizza },
  { name: "샐러드", image: salad },
  { name: "햄버거", image: burger },
  { name: "한식", image: kfood },
  { name: "분식", image: ksnack },
  { name: "치킨", image: chicken },
  { name: "초밥", image: sushi },
  { name: "샌드위치", image: sandwich },
  { name: "파스타", image: pasta },
  { name: "디저트", image: dessert },
  { name: "커피", image: coffee },
  { name: "더보기", image: more }

];

export const stores = [
  {
    id: 1,
    name: "샐로리 한남점",
    rate: 4.9,
    reviewCnt: 3919,
    minDeliveryTime: 13,
    maxDeliveryTime: 30,
    minDeliveryPrice: 13000,
    deliveryFee: 2000,
    menus: [
      {
        id: 1,
        name: "토마토 샐러드",
        isBest: true,
        price: 7600,
        ingredients: "계란, 옥수수, 양파, 올리브, 베이컨, 시저드레싱",
      },
      {
        id: 2,
        name: "시저 샐러드",
        isBest: false,
        price: 6900,
        ingredients: "로메인 상추와 크루통이며, 달걀, 올리브유, 레몬 즙, 마늘",
      },
      {
        id: 3,
        name: "리코타치즈 샐러드",
        isBest: false,
        price: 6900,
        ingredients: "리코타치즈, 양상추, 베이비채소, 방울토마톹, 블랙올리브",
      },
      {
        id: 4,
        name: "탄단지 샐러드",
        isBest: false,
        price: 7600,
        ingredients: "치킨, 고구마, 견과류, 크래배리, 오리엔탈",
      },
      {
        id: 5,
        name: "연어 샐러드",
        isBest: false,
        price: 9800,
        ingredients: "훈제연어 슬라이스, 양상추, 베이비채소, 양파, 케이퍼",
      },
      {
        id: 6,
        name: "우삼겹 메밀면 샐러드",
        isBest: false,
        price: 8900,
        ingredients: "우삼겹, 메밀면, 오이, 양상추, 호두, 옥수수, 참깨 드레싱",
      },
    ],
  },
  {
    id: 2,
    name: "옐로우푸드 샐러드",
    rate: 4.8,
    reviewCnt: 1129,
    minDeliveryTime: 13,
    maxDeliveryTime: 30,
    minDeliveryPrice: 12000,
    deliveryFee: 2000,
    menus: [
      {
        id: 1,
        name: "아보카도 그린 샐러드",
        isBest: true,
        price: 8900,
        ingredients: "아보카도, 케일, 시금치, 퀴노아, 레몬 드레싱",
      },
      {
        id: 2,
        name: "베리 믹스 샐러드",
        isBest: false,
        price: 8500,
        ingredients: "블루베리, 라즈베리, 스트로베리, 믹스 그린, 요거트 드레싱",
      },
    ],
  },
  {
    id: 3,
    name: "씬더볼드 한남점",
    rate: 4.8,
    reviewCnt: 919,
    minDeliveryTime: 20,
    maxDeliveryTime: 35,
    minDeliveryPrice: 10000,
    deliveryFee: 2000,
    menus: [
      {
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
      },
      {
        id: 2,
        name: "펌프킨 넛 샐러드",
        isBest: false,
        price: 8700,
        ingredients: "호박, 피칸, 크랜베리, 아루굴라, 발사믹 드레싱",
      },
    ],
  },
  {
    id: 4,
    name: "The 샐러드가득담은",
    rate: 5.0,
    reviewCnt: 27,
    minDeliveryTime: 13,
    maxDeliveryTime: 30,
    minDeliveryPrice: 10000,
    deliveryFee: 2000,
    menus: [
      {
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
      },
      {
        id: 2,
        name: "펌프킨 넛 샐러드",
        isBest: false,
        price: 8700,
        ingredients: "호박, 피칸, 크랜베리, 아루굴라, 발사믹 드레싱",
      },
    ],
  },
  {
    id: 5,
    name: "파스토보이",
    rate: 4.8,
    reviewCnt: 801,
    minDeliveryTime: 20,
    maxDeliveryTime: 35,
    minDeliveryPrice: 10000,
    deliveryFee: 2000,
    menus: [
      {
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
      },
      {
        id: 2,
        name: "펌프킨 넛 샐러드",
        isBest: false,
        price: 8700,
        ingredients: "호박, 피칸, 크랜베리, 아루굴라, 발사믹 드레싱",
      },
    ],
  },
  {
    id: 6,
    name: "힘난다 샐러드",
    rate: 4.1,
    reviewCnt: 24,
    minDeliveryTime: 20,
    maxDeliveryTime: 35,
    minDeliveryPrice: 10000,
    deliveryFee: 2000,
    menus: [
      {
        id: 1,
        name: "쿼리노아 비트 샐러드",
        isBest: true,
        price: 9200,
        ingredients: "비트, 쿼리노아, 아몬드, 양배추, 사과 사이더 드레싱",
      },
      {
        id: 2,
        name: "펌프킨 넛 샐러드",
        isBest: false,
        price: 8700,
        ingredients: "호박, 피칸, 크랜베리, 아루굴라, 발사믹 드레싱",
      },
    ],
  },
];
