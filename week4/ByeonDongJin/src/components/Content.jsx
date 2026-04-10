import marketModel from "../model.js/marketModel";

const Content = ({ items }) => {
  return (
    <content className="content">
      {items
        .filter((item) => item.isSold)
        .map(
          ({ id, title, price, image, location, timeAgo, comments, likes }) => (
            <div key={id} className="item">
              <img src={image} alt="" />
              <div className="content-right">
                <div className="content-text">
                  {title}
                  <div className="content-mid_text">
                    {location}·{timeAgo}
                  </div>
                  <div className="price">{price}</div>
                </div>
                {(comments > 0 || likes > 0) && (
                  <div className="content-right_imo">
                    <div className="content-right_imo1">
                      <img src="/bx_chat.svg" alt="대화" />
                      {comments}
                    </div>
                    <div className="content-right_imo2">
                      <img src="/ant-design_heart-outlined.svg" alt="좋아요" />
                      {likes}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ),
        )}
    </content>
  );
};

export default Content;
