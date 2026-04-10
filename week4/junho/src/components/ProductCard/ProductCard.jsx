import './ProductCard.css';

function ProductCard({ post }) {

    return (
        <article className="product-card">

            <img src={post.img} alt={post.title} />
            <div>
                <h3>{post.title}</h3>
                <p>{post.location} · {post.time}</p>
                <strong>{post.price}</strong>
            </div>
        </article>

  );
}

export default ProductCard;