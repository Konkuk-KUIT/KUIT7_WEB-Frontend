import Section from "./Section";

const Main = ({ items }) => {
  return (
    <main>
      {items.map((item, index) =>
        item.isSold ? <Section key={index} item={item} /> : null
      )}
    </main>
  );
};

export default Main;