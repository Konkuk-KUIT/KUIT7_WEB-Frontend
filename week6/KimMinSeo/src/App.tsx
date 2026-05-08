import "./App.css";
import marketModel from "./model/marketModel";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

function App() {
  const { location, items } = marketModel;

  return (
    <div className="app">
      <Header location={location} />
      <Content items={items} />
      <BottomNav />
    </div>
  );
}

export default App;
