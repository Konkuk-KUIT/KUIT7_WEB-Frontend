const ProductCard = ({ product }) => {
  const { title, location, timeAgo, price, comments, likes } = product;

  return (
    <article className="product-space">
      <span className="product_img">
        <img src="https://placehold.co/110" alt={title} />
      </span>
      <div className="product-info">
        <div className="product-name">{title}</div>
        <div className="product-location">
          {location} · {timeAgo}
        </div>
        <div className="product-price">{price}</div>
      </div>

      <span className="product-comment">
        {comments > 0 && (
          <span className="comment">
            <img src="../assets/comment.svg" alt="댓글" />
            <span className="comment-count">{comments}</span>
          </span>
        )}
      </span>
      <span className="product-like">
        {likes > 0 && (
          <span className="like">
            <img src="../assets/like.svg" alt="좋아요" />
            <span className="like-count">{likes}</span>
          </span>
        )}
      </span>
    </article>
  );
};

export default ProductCard;
