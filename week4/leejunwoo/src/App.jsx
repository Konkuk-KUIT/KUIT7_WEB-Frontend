import marketModel from "../model.js/marketModel";
const Header = () => {
  return (<>
    <header className="header-bar">
      <button className="location">
        <span className="location-name">{marketModel.location}</span>
        <img src="../images/bottomArrow.svg" alt="아래 화살표" />
      </button>
      <div className="right-btn">
        <button className="tri-btn">
          <img src="../images/search.svg" alt="검색 버튼" />
        </button>
        <button className="tri-btn">
          <img src="../images/menu.svg" alt="메뉴 버튼" />
        </button>
        <button className="tri-btn">
          <img src="../images/alarm.svg" alt="알람 버튼" />
        </button>
      </div>
    </header>
  </>);
};

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

const BottomNav = () => {
  return (<>
    <button className="plus-btn">
      <img src="../images/plus.svg" alt="추가 버튼" />
    </button>
    <nav className="bottom-bar">
      <button className="bottom-btn">
        <img src="../images/home.svg" alt="홈 이미지" className="bimg" />
        <span className="bottom-text">홈</span>
      </button>
      <button className="bottom-btn">
        <img src="../images/news.svg" alt="동네생활 이미지" className="bimg"/>
        <span className="bottom-text">동네생활</span>
      </button>
      <button className="bottom-btn">
        <img src="../images/location.svg" alt="내 근처 이미지" className="bimg"/>
        <span className="bottom-text">내 근처</span>
      </button>
      <button className="bottom-btn">
        <img src="../images/chat.svg" alt="채팅 이미지" className="bimg" />
        <span className="bottom-text">채팅</span>
      </button>
      <button className="bottom-btn">
        <img src="../images/my.svg" alt="나의 당근 이미지" className="bimg" />
        <span className="bottom-text">나의 당근</span>
      </button>
    </nav>
  </>);
};

function App() {
  return (<div className="main-page">
    <Header />
    <Content />
    <BottomNav />
  </div>);
}

export default App;
