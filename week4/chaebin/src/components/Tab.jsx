const Tab = () => {
  return (
    <nav className="tab-bar">
      <div className="tab">
        <img src="./assets/home.svg" alt="홈" className="tab-icon" />
        <span className="tab-text">홈</span>
      </div>
      <div className="tab">
            <img src="./assets/news.svg" alt="동네생활" className="tab-icon" />
            <span className="tab-text">동네생활</span>
        </div>
        <div className="tab">
            <img src="./assets/place_marker.svg" alt="내근처" className="tab-icon" />
            <span className="tab-text">내 근처</span>
        </div>
        <div className="tab">
            <img src="./assets/chat.svg" alt="채팅" className="tab-icon" />
            <span className="tab-text">채팅</span>
        </div>
        <div className="tab">
            <img src="./assets/user.svg" alt="나의당근" className="tab-icon" />
            <span className="tab-text">나의 당근</span>
        </div>
    </nav>
  )
}

export default Tab;