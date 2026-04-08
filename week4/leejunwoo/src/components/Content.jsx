import marketModel from "../../model.js/marketModel";

const Content = () => {
  return (<div className="box">
    {marketModel.items.map((item, index)=> (
      <div key={index} className="item">
        <div className="item-img">
          <img src={item.image} alt="상품 이미지" />
        </div>
        <div className="item-content">
          <div className="item-title">{item.title}</div>
          <div className="item-meta">
            <div className="item-location">{item.location}</div>
            <span className="text-dot">·</span>
            <div className="timeAgo">{item.timeAgo}</div>
          </div>
          <div className="item-price">{item.price}</div>
          <div className="item-react">
            {item.comments === 0 ? undefined: <button className="item-react-btn">
              <img src="../images/comment.svg" alt="댓글 이미지" />
              {item.comments}
            </button>}
            {item.likes === 0 ? undefined : <button className="item-react-btn">
              <img src="../images/like.svg" alt="좋아요 이미지" />
              {item.likes}
            </button>}
          </div>
        </div>
      </div>
    ))}
  </div>);
};

export default Content;