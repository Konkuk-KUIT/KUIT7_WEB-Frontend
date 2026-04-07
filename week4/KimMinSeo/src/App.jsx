import "./App.css";
import marketModel from "./model.js/marketModel";

const Header = () => {
  const { location } = marketModel;

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-location">{location}</span>
        <button className="icon-btn">
          <img src="/icons/select.svg" alt="지역 선택" />
        </button>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <img src="/icons/search.svg" alt="검색" />
        </button>
        <button className="icon-btn">
          <img src="/icons/menu.svg" alt="메뉴" />
        </button>
        <button className="icon-btn">
          <img src="/icons/alarm.svg" alt="알림" />
        </button>
      </div>
    </header>
  );
};

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

const Content = () => {
  const { items } = marketModel;

  return (
    <main className="content">
      {items.map((item, index) => (
        <ItemCard key={`${item.title}-${index}`} item={item} />
      ))}
    </main>
  );
};

const BottomNav = () => {
  const navItems = [
    { icon: "/icons/home.svg", label: "홈" },
    { icon: "/icons/community.svg", label: "동네생활" },
    { icon: "/icons/location.svg", label: "내 근처" },
    { icon: "/icons/chatting.svg", label: "채팅" },
    { icon: "/icons/profile.svg", label: "나의 당근" },
  ];

  return (
    <footer>
      <button className="plus-btn">
        <img src="/icons/plus.svg" alt="글쓰기" />
      </button>

      <nav className="nav">
        {navItems.map(({ icon, label }) => (
          <button className="nav-item" key={label}>
            <img src={icon} alt={label} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <BottomNav />
    </div>
  );
}

export default App;
