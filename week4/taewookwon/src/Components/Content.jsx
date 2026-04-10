import ProductCard from './ProductCard';

const Content = () => {
  return (
    <article className="product">
      {marketModel.items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </article>
  );
};

export default Content;
