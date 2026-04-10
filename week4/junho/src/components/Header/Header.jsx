import './Header.css';  

function Header() {
    return (
      <>
          <header className="header">
            <button className="header__location">
              군자동 <img src="/assets/Expand Arrow.png" alt="지역 선택" />
            </button>
            <div className="header__icons">
              <button><img src="/assets/Search.png" alt="검색" /></button>
              <button><img src="/assets/Menu.png" alt="메뉴" /></button>
              <button><img src="/assets/Notification.png" alt="알림" /></button>
            </div>
        </header>
      </>  
    );
  }

export default Header;