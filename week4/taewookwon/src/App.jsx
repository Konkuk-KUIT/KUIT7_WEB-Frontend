import './App.css';
import marketModel from './model.js/marketModel';

const Header = () => {
  return (
    <header className="top-bar">
      <div className="top-bar_info">
        <span className="location">
          <span className="location-name">군자동</span>
          <img src="./arrow.svg" alt="아래 화살표 아이콘" />
        </span>
        <span className="top-bar_icons">
          <img src="./search.svg" alt="돋보기 아이콘" />
          <img src="./menu.svg" alt="돋보기 아이콘" />
          <img src="./alarm.svg" alt="알림 아이콘" />
        </span>
      </div>
    </header>
  );
};

const ProductCard = (product) => {
  return (
    <article className="product-space">
      <span className="product_img">
        <img src=" https://placehold.co/110" />
      </span>
      <div className="product-info">
        <div className="product-name">{product.title}</div>
        <div className="product-location">
          {product.location} · {product.timeAgo}
        </div>
        <div className="product-price">{product.price}</div>
      </div>
      <span className="product-comment">
        {product.comments > 0 && (
          <span className="comment">
            <img src="./comment.svg" alt="댓글 아이콘" />
            <span className="comment-count">{product.comments}</span>
          </span>
        )}
      </span>
      <span className="product-like">
        {product.likes > 0 && (
          <span className="like">
            <img src="./like.svg" alt="좋아요 아이콘" />
            <span className="like-count">{product.likes}</span>
          </span>
        )}
      </span>
    </article>
  );
};

const Content = () => {
  return (
    <article className="product">
      {marketModel.items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </article>
  );
};

const BottomNav = () => {
  return (
    <nav class="bottom-total">
      <span class="circle-span">
        <div class="circle">
          <img src="./assets/plus.svg" alt="플러스 기호" />
        </div>
      </span>
      <span class="home">
        <img src="./assets/home.svg" alt="홈 아이콘" />홈
      </span>
      <span class="life">
        <img src="./assets/life.svg" alt="동네생활 아이콘" />
        동네생활
      </span>
      <span class="location">
        <img src="./assets/home.svg" alt="내 근처 아이콘" />내 근처
      </span>
      <span class="chatting">
        <img src="./assets/chatting.svg" alt="채팅 아이콘" />
        채팅
      </span>
      <span class="my">
        <img src="./assets/my.svg" alt="나의 당근 아이콘" />
        나의당근
      </span>
    </nav>
  );
};

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
