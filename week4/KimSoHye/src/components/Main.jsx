import Img1 from './assets/img1.svg'
import Img2 from './assets/img2.svg'
import Img3 from './assets/img3.svg'
import Img4 from './assets/img4.svg'
import Img5 from './assets/img5.svg'
import Chat from './assets/chat.svg';
import Heart from './assets/heart.svg';

const items=[
  {id:1, img:Img1, title:"에어팟 프로", location:"군자동", time:"3일 전",price:"220,000원", chatNum:"3", heartNum:"11"},
  {id:2, img:Img2, title:"바이레도 블랑쉬 50ml", location:"광진구 구의제3동", time:"26초 전",price:"4,000원", heartNum:"2"},
  {id:3, img:Img3, title:"샌드위치", location:"동대문구 휘경동", time:"끌올 59초 전",price:"8,000원"},
  {id:4, img:Img4, title:"아이폰 13프로맥스", location:"군자동", time:"1일 전", price:"1,000,000원"},
  {id:5, img:Img5, title:"커피머신", location:"구리시 교문1동", time:"1초 전",price:"100,000원"}

]
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

const Main = () => {
  return(
    <>
    <main>
      {items.map((item) => (
        <Section key={item.id} item={item} />
      ))}

    </main>
    </>
  );
};

export default Main;