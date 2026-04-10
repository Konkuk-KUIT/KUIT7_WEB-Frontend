import marketModel from "../model.js/marketModel";

const Content = () => {
  return (
    <div className="content-list">
      {marketModel.items.map((item) => (
        <div key={item.id} className="item">
          <div className="item-img">
            <img src={item.image} alt="아이템 이미지"  />
          </div>
          <div className="content-info"> 
            <div className="item-title">{item.title}</div>
            <div className="item-detail">
              {item.location} · {item.timeAgo}
            </div>
            <div className="item-price">{item.price}</div>
          </div>
          <div className="item-reaction">
            {item.comments > 0 && (
              <div>
                <img src="./assets/chat.svg" alt="댓글" className="reaction-icon" />
                {item.comments}
              </div> 
            )}
            {item.likes > 0 && (
              <div>
                <img src="./assets/chat.svg" alt="좋아요" className="reaction-icon" />
                {item.likes}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content;