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

export default Header;