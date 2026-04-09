const BottomNav = () => {
  return (
    <article className="bottom-screan">
      <section className="bottom-item">
        <div className="bottom-plus">
          <img src="/list/plus.png" alt="추가 버튼" className="bottom-plusimage" />
        </div>
      </section>
      <section className="bottom-info">
        <div className="bottom-home">
          <img src="/home.svg" alt="홈 버튼" className="bottom-homeimage" />
          <span className="bottom-homeword">홈</span>
        </div>
        <div className="bottom-news">
          <img src="/news.svg" alt="동네생활 버튼" className="bottom-newsimage" />
          <span className="bottom-newsword">동네생활</span>
        </div>
        <div className="bottom-place">
          <img src="/place.svg" alt="내 근처 버튼" className="bottom-placeimage" />
          <span className="bottom-placeword">내 근처</span>
        </div>
        <div className="bottom-chat">
          <img src="/chat2.svg" alt="채팅2 버튼" className="bottom-chatimage" />
          <span className="bottom-chatword">채팅</span>
        </div>
        <div className="bottom-user">
          <img src="/user.svg" alt="나의 당근 버튼" className="bottom-userimage" />
          <span className="bottom-userword">나의 당근</span>
        </div>
      </section>
    </article>

  );
};

export default BottomNav;