const Content = ({
  title,
  location,
  timeAgo,
  price,
  image,
  comments,
  likes,
}) => {
  return (
    <article className="item-list">
      <section className="item-post">
        <div className="item-image">
          <img src={image} alt={title} className="item-imagebox"/>  {/*비구조화 할당 사용*/}
        </div>
        <div className="item-info">
          <div className="item-infobox">
            <span className="item-title">{title}</span>
            <span className="item-loctime">
              {location}·{timeAgo}
            </span>
            <span className="item-price">{price}</span>
          </div>
          <div className="item-userbox">
            <span className="item-chat">
              <img src="/chat.svg" alt="채팅 버튼" className="item-chatimage" />
              <span className="item-comments">{comments}</span>
            </span>
            <span className="item-heart">
              <img src="/heart.svg" alt="공감 버튼" className="item-heartimage" />
              <span className="item-likes">{likes}</span>
            </span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Content;