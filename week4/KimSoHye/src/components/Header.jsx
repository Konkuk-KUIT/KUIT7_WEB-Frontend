import ExpandArrow from './assets/expandArrow.svg';
import Search from './assets/search.svg';
import Menu from './assets/menu.svg';
import Notification from './assets/notification.svg';

const Header = () => {
  return(
     <header className="header">
    <div className="headerTitle">
        <div className="headerText">군자동</div>
        <button>
          <img src={ExpandArrow} alt="화살표 버튼" />
        </button>
    </div>
      <div className="headerIcons">
        <button>
          <img src={Search} alt="검색 버튼" />
        </button>
        <button>
          <img src={Menu} alt="메뉴 버튼" />
        </button>
        <button>
          <img src={Notification} alt="알람 버튼" />
        </button>
      </div>
    </header>
  )
  };

  export default Header;