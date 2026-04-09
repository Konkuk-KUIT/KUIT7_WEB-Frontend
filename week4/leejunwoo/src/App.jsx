import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import marketModel from "../model.js/marketModel";
function App() {
  const {location, items} = marketModel;
  return (<div className="main-page">
    <Header location = {location} />
    <Content items={items}/>
    <BottomNav />
  </div>);
}

export default App;
