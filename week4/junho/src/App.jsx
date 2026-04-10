import './index.css';

import Header from './components/Header/Header.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';

// 잘못하고 다른거를 했엇어요..
// import CategoryBtn from './components/CategoryBtn/CategoryBtn.jsx';
// import Banner from './components/Banner/Banner.jsx';
// import PostList from './components/PostList/PostList.jsx';
// import PlusBtn from './components/PlusBtn/PlusBtn.jsx';

import ProductCard from './components/ProductCard/ProductCard.jsx';
import PlusBtn from './components/PlusBtn/PlusBtn.jsx';

function App() {

  const productData = [
    { id: 1, img: "/assets/Rectangle 2.png", title: "에어팟 프로", location: "군자동", time: "3일 전", price: "220,000원", isSold: true },
    { id: 2, img: "/assets/qkdlfpeh.png", title: "바이레도 블랑쉬 50ml", location: "광진구 구의제3동", time: "26초 전", price: "4,000원", isSold: true },
    { id: 3, img: "/assets/sandwich.png", title: "샌드위치", location: "동대문구 휘경동", time: "59초 전", price: "8,000원", isSold: false },
    { id: 4, img: "/assets/iphone.png", title: "아이폰 13프로맥스", location: "군자동", time: "1일 전", price: "1,000,000원", isSold: true },
    { id: 5, img: "/assets/coffeeMachine.png", title: "커피머신", location: "구리시 교문1동", time: "1초 전", price: "100,000원", isSold: true }
  ];

  return (
    <div className="app-container">
      <Header />

    <section className="product-list">
      {productData
        .filter(item => item.isSold === true)
        // filter로 걸러내기
        .map(item => (
          <ProductCard key={item.id} post={item} />
        //배열 렌더링..
        ))
      }
    </section>
      <PlusBtn />
      <BottomNav />
    </div>
  );
}

export default App;