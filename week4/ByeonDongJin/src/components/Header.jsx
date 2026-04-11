import marketModel from "../model.js/marketModel";

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

export default Header;
