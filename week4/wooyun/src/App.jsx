import "./App.css";
import marketModel from "./model/marketModel.js";

const Header = () => {
  return (
    <header className="header">
      <div className="header-location">
        <p className="location-name">군자동</p>
        <img src="/arrow.svg" alt="선택 버튼" />
      </div>
      <div className="header-icons">
        <img src="/search.svg" alt="검색 버튼" />
        <img src="/menu.svg" alt="메뉴 버튼" />
        <img src="/alarm.svg" alt="알람 버튼" />
      </div>
    </header>
  );
};

const BottomNav = () => {
  return (
    <article className="bottom-screan">
      <section className="bottom-item">
        <div className="bottom-plus">
          <img src="/list/plus.png" alt="추가 버튼" className="bottom-plusimage" />
        </div>
      </section>
      <section className="bottom-info">
        <div className="bottom-home">
          <img src="/home.svg" alt="홈 버튼" className="bottom-homeimage" />
          <span className="bottom-homeword">홈</span>
        </div>
        <div className="bottom-news">
          <img src="/news.svg" alt="동네생활 버튼" className="bottom-newsimage" />
          <span className="bottom-newsword">동네생활</span>
        </div>
        <div className="bottom-place">
          <img src="/place.svg" alt="내 근처 버튼" className="bottom-placeimage" />
          <span className="bottom-placeword">내 근처</span>
        </div>
        <div className="bottom-chat">
          <img src="/chat2.svg" alt="채팅2 버튼" className="bottom-chatimage" />
          <span className="bottom-chatword">채팅</span>
        </div>
        <div className="bottom-user">
          <img src="/user.svg" alt="나의 당근 버튼" className="bottom-userimage" />
          <span className="bottom-userword">나의 당근</span>
        </div>
      </section>
    </article>

  );
};

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
          <img src={image} alt={title} className="item-imagebox"/>
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

const App = () => {
  return (
    <div className="app-screan">
      <Header />
        <main className="app-content">
          {marketModel.items.map((item) => (
            <Content
              key={item.id}
              title={item.title}
              location={item.location}
              timeAgo={item.timeAgo}
              price={item.price}
              image={item.image}
              comments={item.comments}
              likes={item.likes}
            />
          ))}
        </main>
      <BottomNav />
    </div>
  );
};

export default App;
