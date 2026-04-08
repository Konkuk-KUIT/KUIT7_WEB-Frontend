const ItemCard = ({ item }) => {
  const { title, location, timeAgo, price, image, comments, likes, isSold } =
    item;

  return (
    <article className="card">
      <img className="card-img" src={image} alt={title} />

      <div className="card-content">
        <div>
          <h2 className="card-title">{title}</h2>

          <p className="card-meta">
            {location} · {timeAgo}
          </p>

          <div className="card-price-row">
            {isSold && <span className="sold">예약중</span>}
            <p className="card-price">{price}</p>
          </div>
        </div>

        <div className="card-bottom">
          {comments > 0 && (
            <div className="stat">
              <img src="/icons/smallChat.svg" alt="댓글" />
              <span>{comments}</span>
            </div>
          )}

          {likes > 0 && (
            <div className="stat">
              <img src="/icons/heart.svg" alt="좋아요" />
              <span>{likes}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ItemCard;
