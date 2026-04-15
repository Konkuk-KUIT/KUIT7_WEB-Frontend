import Chat from "../assets/chat.svg";
import Heart from "../assets/heart.svg";

const Section=({item})=>{
    const { image, title, location, time, price, comments, likes  } = item;
  return(
    <section className="item">
        <img
        className="images"
        src={image}
        />
        <div className="itemContent">
            <div className="itemTitle">{title}</div>
            <div className="itemSubTitle">{location} · {time}</div>
            <div className="itemPrice">{price}</div>
            <div className="itemInfo">
               {comments > 0 && (
            <span>
              <img src={Chat} alt="채팅 수" />
              {comments}
            </span>
          )}

          {likes > 0 && (
            <span>
              <img src={Heart} alt="관심 수" /> {likes}
            </span>
          )}
            </div>
        </div>
    </section>
  );
};

export default Section;