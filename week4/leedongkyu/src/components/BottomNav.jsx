export default function BottomNav() {
  return (
    <footer>
      <button className="plus-btn">
        <img src="/plus.svg" alt="글쓰기 버튼" />
      </button>
      <nav className="bottom-bar">
        <button className="bottom-bar__btn">
          <img src="/home.svg" alt="홈 버튼" />
          <span>홈</span>
        </button>
        <button className="bottom-bar__btn">
          <img src="/community.svg" alt="동네생활 버튼" />
          <span>동네생활</span>
        </button>
        <button className="bottom-bar__btn">
          <img src="/location.svg" alt="내 근처 버튼" />
          <span>내 근처</span>
        </button>
        <button className="bottom-bar__btn">
          <img src="/chatting.svg" alt="채팅 버튼" />
          <span>채팅</span>
        </button>
        <button className="bottom-bar__btn">
          <img src="/profile.svg" alt="내 정보 버튼" />
          <span>나의 당근</span>
        </button>
      </nav>
    </footer>
  );
};