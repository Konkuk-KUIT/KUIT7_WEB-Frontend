import "./App.css";
import Header from "./components/Header.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Content from "./components/Content.jsx";
import marketModel from "./model/marketModel.js"; //데이터 import 는 한 번만 사용//

const App = () => {
  return (
    <div className="app-screan">
      <Header />
      <main className="app-content">
        {marketModel.items.map( //map 을 활용한 배열 렌더링 사용//
          (item) =>
            item.isSold === true && ( //조건부 렌더링 사용//
              <Content
                key={item.id}
                title={item.title}
                location={item.location}
                timeAgo={item.timeAgo}
                price={item.price}
                image={item.image}
                comments={item.comments}
                likes={item.likes}
              />
            ),
        )}
      </main>
      <BottomNav />
    </div>
  );
};

export default App;
