const ProductCard = (product) => {
  return (
    <article className="product-space">
      <span className="product_img">
        <img src=" https://placehold.co/110" />
      </span>
      <div className="product-info">
        <div className="product-name">{product.title}</div>
        <div className="product-location">
          {product.location} · {product.timeAgo}
        </div>
        <div className="product-price">{product.price}</div>
      </div>
      <span className="product-comment">
        {product.comments > 0 && (
          <span className="comment">
            <img src="./comment.svg" alt="댓글 아이콘" />
            <span className="comment-count">{product.comments}</span>
          </span>
        )}
      </span>
      <span className="product-like">
        {product.likes > 0 && (
          <span className="like">
            <img src="./like.svg" alt="좋아요 아이콘" />
            <span className="like-count">{product.likes}</span>
          </span>
        )}
      </span>
    </article>
  );
};

export default ProductCard;
