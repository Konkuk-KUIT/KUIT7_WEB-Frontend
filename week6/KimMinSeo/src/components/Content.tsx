import ItemCard from "./ItemCard";
import type { MarketItem } from "../types/market";

type ContentProps = {
  items: MarketItem[];
};

const Content = ({ items }: ContentProps) => {
  return (
    <main className="content">
      {items.map((item, index) => (
        <ItemCard key={`${item.title}-${index}`} item={item} />
      ))}
    </main>
  );
};

export default Content;
