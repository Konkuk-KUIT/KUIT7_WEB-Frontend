const Content = ({items}) => {
  return (
    <div className="content-list">
      {items.map(({ id, title, location, timeAgo, price, image, comments, likes, isSold }) => (
        isSold && (
          <div key={id} className="item">
            <div className="item-img">
              <img src={image} alt="아이템 이미지"  />
            </div>
            <div className="content-info"> 
              <div className="item-title">{title}</div>
              <div className="item-detail">
                {location} · {timeAgo}
              </div>
              <div className="item-price">{price}</div>
            </div>
            <div className="item-reaction">
              {comments > 0 && (
                <div>
                  <img src="./assets/chat.svg" alt="댓글" className="reaction-icon" />
                  {comments}
                </div> 
              )}
              {likes > 0 && (
                <div>
                  <img src="./assets/chat.svg" alt="좋아요" className="reaction-icon" />
                  {likes}
                </div>
              )}
            </div>
          </div>
      )))}
    </div>
  )
}

export default Content;