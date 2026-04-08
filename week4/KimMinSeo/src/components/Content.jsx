import marketModel from "../model.js/marketModel";
import ItemCard from "./ItemCard";

const Content = () => {
  const { items } = marketModel;

  return (
    <main className="content">
      {items.map((item, index) => (
        <ItemCard key={`${item.title}-${index}`} item={item} />
      ))}
    </main>
  );
};
export default Content;
