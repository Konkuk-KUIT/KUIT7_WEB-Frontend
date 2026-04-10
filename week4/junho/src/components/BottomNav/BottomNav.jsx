import './BottomNav.css';

function BottomNav() {
  return (
        <nav className="bottom-nav">
            <button className="bottom-btn">
                <img src="/assets/bottomNav1.png" alt="홈" />
            </button>
            <button className="bottom-btn">
                <img src="/assets/bottomNav2.png" alt="동네생활" />
            </button>
            <button className="bottom-btn">
                <img src="/assets/bottomNav3.png" alt="내 근처" />
            </button>
            <button className="bottom-btn">
                <img src="/assets/bottomNav4.png" alt="채팅" />
            </button>
            <button className="bottom-btn">
                <img src="/assets/bottomNav5.png" alt="나의 당근" />
            </button>
      </nav>
  )
}

export default BottomNav;