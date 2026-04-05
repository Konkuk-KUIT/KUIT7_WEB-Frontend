import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <BottomNav />
    </div>
  );
}

export default App;
