export interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest?: boolean;
}

export interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
  menus?: Menu[];
}