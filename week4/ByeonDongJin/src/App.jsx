import "./App.css";
import marketModel from "./model.js/marketModel";

const Header = ({ location }) => {
  return (
    <header className="header">
      <div className="header-left">
        <span>{location}</span>
        <img
          src="/Expand Arrow.svg"
          alt="아래 화살표"
          className="header-left_img"
        />
      </div>
      <div className="header-right">
        <img src="/Search.svg" alt="검색" />
        <img src="/Menu.svg" alt="메뉴" />
        <img src="Notification.svg" alt="종" />
      </div>
    </header>
  );
};

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

const BottomNav = () => {
  return (
    <nav className="nav">
      <button className="plus-btn">
        <img src="/Plus Math.svg" alt="추가 버튼" />
      </button>
      <div className="nav-content">
        <img src="/Home.svg" alt="홈" />홈
      </div>
      <div className="nav-content">
        <img src="/News.svg" alt="동네생활" />
        동네생활
      </div>
      <div className="nav-content">
        <img src="/Place Marker.svg" alt="동네생활" />내 근처
      </div>
      <div className="nav-content">
        <img src="/Chat (1).svg" alt="동네생활" />
        채팅
      </div>
      <div className="nav-content">
        <img src="/User.svg" alt="동네생활" />
        나의 당근
      </div>
    </nav>
  );
};

function App() {
  return (
    <>
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <BottomNav />
    </>
  );
}

export default App;
