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

export default BottomNav;
