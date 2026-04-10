import marketModel from './model.js/marketModel';
import Header from './Components/Header';
import Content from './Components/Content';
import BottomNav from './Components/BottomNav';

function App() {
  return (
    <div className="app">
      <Header />
      <Content items={marketModel.items} />
      <BottomNav />
    </div>
  );
}

export default App;
