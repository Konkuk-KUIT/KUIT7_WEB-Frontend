const Header = ({ location }) => {
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

export default Header;
