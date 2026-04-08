import ItemCard from "./ItemCard";

const Content = ({ items }) => {
  return (
    <main className="content">
      {items.map((item, index) => (
        <ItemCard key={`${item.title}-${index}`} item={item} />
      ))}
    </main>
  );
};
export default Content;
