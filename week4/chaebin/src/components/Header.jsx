const Header = () => {
  return (
    <header className="neighbor-header">
      <div className="location">
        <div className="location-name">군자동</div>
        <div className="location-icon">
          <button>
            <img src="./assets/expand_arrow.svg" alt="지역 확장 버튼" />
          </button>
        </div>
      </div>
      <div className='header-icon'>
        <button>
          <img src="./assets/search.svg" alt="검색 버튼" className="header-icon" />
        </button>
        <button>
          <img src="./assets/menu.svg" alt="메뉴 버튼" className="header-icon" />
        </button>
        <button>
          <img src="./assets/notification.svg" alt="알림 버튼" className="header-icon" />
        </button>
      </div>
    </header>
  )
}

export default Header;