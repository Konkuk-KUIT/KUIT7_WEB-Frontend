import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Main from "./components/Main";
import PlusButton from "./components/PlusButton";
import BottomNav from "./components/BottomNav";
import marketModel from "./model.js/marketModel";

function App() {
  return (
    <>
    <Header location={marketModel.location} />
    <Main items={marketModel.items} />
    <PlusButton/>
    <BottomNav/>
    </>
  )
}

export default App;
