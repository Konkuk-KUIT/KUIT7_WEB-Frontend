import "./App.css";
import Header from "./components/Header.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Content from "./components/Content.jsx";
import marketModel from "./model/marketModel.js";

const App = () => {
  return (
    <div className="app-screan">
      <Header />
        <main className="app-content">
          {marketModel.items.map((item) => (
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
          ))}
        </main>
      <BottomNav />
    </div>
  );
};

export default App;
