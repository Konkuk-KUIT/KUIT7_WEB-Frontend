import React from 'react'
import './App.css'
import marketModel from "./model.js/marketModel"

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

const Content = () => {
  return (
    <div className="content-list">
      {marketModel.items.map((item) => (
        <div key={item.id} className="item">
          <div className="item-img">
            <img src={item.image} alt="아이템 이미지"  />
          </div>
          <div className="content-info"> 
            <div className="item-title">{item.title}</div>
            <div className="item-detail">
              {item.location} · {item.timeAgo}
            </div>
            <div className="item-price">{item.price}</div>
          </div>
          <div className="item-reaction">
            {item.comments > 0 && (
              <div>
                <img src="./assets/chat.svg" alt="댓글" className="reaction-icon" />
                {item.comments}
              </div> 
            )}
            {item.likes > 0 && (
              <div>
                <img src="./assets/chat.svg" alt="좋아요" className="reaction-icon" />
                {item.likes}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

const Plus = () => {
  return (
    <img src="./assets/plus.svg" alt="플러스" className="plus" />
  )
}

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

function App() {
  return (<div className="App">
      <Header />
      <Content />
      <Plus />
      <Tab />
    </div>
  )
}

export default App
