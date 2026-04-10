import ExpandArrow from './assets/expandArrow.svg';
import Search from './assets/search.svg';
import Menu from './assets/menu.svg';
import Notification from './assets/notification.svg';
import Img1 from './assets/img1.svg'
import Img2 from './assets/img2.svg'
import Img3 from './assets/img3.svg'
import Img4 from './assets/img4.svg'
import Img5 from './assets/img5.svg'
import Chat from './assets/chat.svg';
import Heart from './assets/heart.svg';
import Home from './assets/home.svg';
import News from './assets/news.svg';
import PlaceMarker from './assets/placeMarker.svg';
import ChatBottom from './assets/chatBottom.svg';
import User from './assets/user.svg';
import Plus from './assets/plus.svg';
import "./App.css";
import "./reset.css";
const items=[
  {id:1, img:Img1, title:"에어팟 프로", location:"군자동", time:"3일 전",price:"220,000원", chatNum:"3", heartNum:"11"},
  {id:2, img:Img2, title:"바이레도 블랑쉬 50ml", location:"광진구 구의제3동", time:"26초 전",price:"4,000원", heartNum:"2"},
  {id:3, img:Img3, title:"샌드위치", location:"동대문구 휘경동", time:"끌올 59초 전",price:"8,000원"},
  {id:4, img:Img4, title:"아이폰 13프로맥스", location:"군자동", time:"1일 전", price:"1,000,000원"},
  {id:5, img:Img5, title:"커피머신", location:"구리시 교문1동", time:"1초 전",price:"100,000원"}

]
const navItems = [
  { id: 1, icon: Home, label: "홈" },
  { id: 2, icon: News, label: "동네생활" },
  { id: 3, icon: PlaceMarker, label: "내 근처" },
  { id: 4, icon: ChatBottom, label: "채팅" },
  { id: 5, icon: User, label: "나의 당근" }
];
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
const Section=({item})=>{
  return(
    <section className="item">
        <img
        className="images"
        src={item.img}
        />
        <div className="itemContent">
            <div className="itemTitle">{item.title}</div>
            <div className="itemSubTitle">{item.location} · {item.time}</div>
            <div className="itemPrice">{item.price}</div>
            <div className="itemInfo">
              {item.chatNum && <span><img src={Chat}/> {item.chatNum}</span>}
              {item.heartNum && <span><img src={Heart}/>관심 {item.heartNum}</span>}
            </div>
        </div>
    </section>
  );
};


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
const Main = () => {
  return(
    <>
    <main>
      {items.map((item) => (
        <Section key={item.id} item={item} />
      ))}
      <BottomNav/>
    </main>
    
    </>
  );
};
function App() {
  return (
    <>
    <Header></Header>
    <Main/>
    
    </>

  )
}

export default App;
