const Header = () => {
  return (
    <header className="top-bar">
      <div className="top-bar_info">
        <span className="location">
          <span className="location-name">군자동</span>
          <img src="./arrow.svg" alt="아래 화살표 아이콘" />
        </span>
        <span className="top-bar_icons">
          <img src="./search.svg" alt="돋보기 아이콘" />
          <img src="./menu.svg" alt="돋보기 아이콘" />
          <img src="./alarm.svg" alt="알림 아이콘" />
        </span>
      </div>
    </header>
  );
};

export default Header;
