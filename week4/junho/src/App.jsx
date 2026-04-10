import './index.css';

import Header from './components/Header/Header.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import CategoryBtn from './components/CategoryBtn/CategoryBtn.jsx';
import Banner from './components/Banner/Banner.jsx';
import PostList from './components/PostList/PostList.jsx';
import PlusBtn from './components/PlusBtn/PlusBtn.jsx';

function App() {
  return (
    <div className="app-container">

      <Header />
      <CategoryBtn />
      <Banner />
      <PostList />
      <PlusBtn />
      <BottomNav />

    </div>
  );
}



export default App; 