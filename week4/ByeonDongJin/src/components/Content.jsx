import marketModel from "../model.js/marketModel";

const Content = ({ items }) => {
  return (
    <content className="content">
      {items
        .filter((item) => item.isSold)
        .map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt="" />
            <div className="content-right">
              <div className="content-text">
                {item.title}
                <div className="content-mid_text">
                  {item.location}·{item.timeAgo}
                </div>
                <div className="price">{item.price}</div>
              </div>
              {/* imo부분 filter로 commtents>0 or likes >0 일때만 출력하도록 */}
              <div className="content-right_imo">
                <div className="content-right_imo1">
                  <img src="/bx_chat.svg" alt="대화" />
                  {item.comments}
                </div>
                <div className="content-right_imo2">
                  <img src="/ant-design_heart-outlined.svg" alt="좋아요" />
                  {item.likes}
                </div>
              </div>
            </div>
          </div>
        ))}
    </content>
  );
};

export default Content;
