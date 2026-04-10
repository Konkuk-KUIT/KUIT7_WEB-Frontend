import './CategoryBtn.css';

function CategoryBtn() {
  return (
      <nav className="category-nav">
        <button className="category-btn">동네소식</button>
        <button className="category-btn">🙌 같이해요</button>
        <button className="category-btn">동네질문</button>
        <button className="category-btn">동네맛집</button>
        <button className="category-btn">취미생활</button>
      </nav>
    )
}

export default CategoryBtn;