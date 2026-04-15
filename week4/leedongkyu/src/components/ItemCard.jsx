export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <div className="item-card__image-wrap">
        <img className="item-card__image" src={item.image} alt={item.title} />
      </div>

      <div className="item-card__content">
        <div className="item-card__top">
          <h2 className="item-card__title">{item.title}</h2>
          <p className="item-card__meta">
            {item.location} · {item.timeAgo}
          </p>
          <p className="item-card__price">{item.price}</p>
        </div>

        <div className="item-card__bottom">
          {item.comments > 0 && (
            <div className="item-card__stat">
              <img src="/smallChat.svg" alt="댓글 수" />
              <span>{item.comments}</span>
            </div>
          )}

          {item.likes > 0 && (
            <div className="item-card__stat">
              <img src="/heart.svg" alt="좋아요 수" />
              <span>{item.likes}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};