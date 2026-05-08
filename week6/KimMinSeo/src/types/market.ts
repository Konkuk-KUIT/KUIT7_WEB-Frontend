export type MarketItem = {
  title: string;
  location: string;
  timeAgo: string;
  price: string;
  image: string;
  comments: number;
  likes: number;
  isSold: boolean;
};

export type MarketModel = {
  location: string;
  items: MarketItem[];
};
