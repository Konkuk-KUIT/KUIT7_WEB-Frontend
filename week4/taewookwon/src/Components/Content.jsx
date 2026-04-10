import ProductCard from './ProductCard';

const Content = ({ items }) => {
  return (
    <article className="product">
      {items
        .filter((item) => item.isSold === true)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </article>
  );
};

export default Content;
