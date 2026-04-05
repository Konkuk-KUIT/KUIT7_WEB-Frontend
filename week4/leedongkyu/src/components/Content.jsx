import ItemCard from "./ItemCard";
import marketModel from "../model.js/marketmodel";

export default function Content() {
  return (
    <main className="content">
      <section className="item-list">
        {marketModel.items.map((item) => (
          item.isSold ? <ItemCard key={item.id} item={item} /> : null
        //   <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};