import Home from '../assets/home.svg';
import News from '../assets/news.svg';
import PlaceMarker from '../assets/placeMarker.svg';
import ChatBottom from '../assets/chatBottom.svg';
import User from '../assets/user.svg';

const navItems = [
  { id: 1, icon: Home, label: "홈" },
  { id: 2, icon: News, label: "동네생활" },
  { id: 3, icon: PlaceMarker, label: "내 근처" },
  { id: 4, icon: ChatBottom, label: "채팅" },
  { id: 5, icon: User, label: "나의 당근" }
];

const BottomNav = () => {
  return(
  <nav className="bottomBar">
        {navItems.map((menu)=>{
          return(
          <div key={menu.id} className="bottomBarMenu">
            <img src={menu.icon} alt={menu.label}></img>
            <span>{menu.label}</span>
          </div>
          );
        })}
        
    </nav>
    );
};

export default BottomNav;