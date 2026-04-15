import marketModel from "../model.js/marketModel";

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
        <img src="/Chat.svg" alt="동네생활" />
        채팅
      </div>
      <div className="nav-content">
        <img src="/User.svg" alt="동네생활" />
        나의 당근
      </div>
    </nav>
  );
};

export default BottomNav;
