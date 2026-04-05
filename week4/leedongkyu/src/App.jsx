import "./App.css";
import marketModel from "./model.js/marketmodel";

const Header = () => {
  return (
    <header className="region-header">
      <div className="region-header__region">
        <span className="region-header__region-name">군자동</span>
        <button>
          <img src="/select.svg" alt=" 지역 선택 아이콘" />
        </button>
      </div>
      <div className="region-header__icons">
        <button>
          <img src="/search.svg" alt="검색 버튼" />
        </button>
        <button>
          <img src="/menu.svg" alt="리스트 버튼" />
        </button>
        <button>
          <img src="/alarm.svg" alt="알람 버튼" />
        </button>
      </div>
    </header>
  );
};

const ItemCard = ({ item }) => {
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

const Content = () => {
  return (
    <main className="content">
      <section className="item-list">
        {marketModel.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};

const BottomNav = () => {
  return (
    <footer>
      <button className="plus-btn">
        <img src="/plus.svg" alt="글쓰기 버튼" />
      </button>
      <nav className="bottom-bar">
        <button className="bottom-bar__btn">
          <img src="/home.svg" alt="홈 버튼" />
          <span>홈</span>
        </button>
        <button className="bottom-bar__btn">
          <img src="/community.svg" alt="동네생활 버튼" />
          <span>동네생활</span>
        </button>
        <button className="bottom-bar__btn">
          <img src="/location.svg" alt="내 근처 버튼" />
          <span>내 근처</span>
        </button>
        <button className="bottom-bar__btn">
          <img src="/chatting.svg" alt="채팅 버튼" />
          <span>채팅</span>
        </button>
        <button className="bottom-bar__btn">
          <img src="/profile.svg" alt="내 정보 버튼" />
          <span>나의 당근</span>
        </button>
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
