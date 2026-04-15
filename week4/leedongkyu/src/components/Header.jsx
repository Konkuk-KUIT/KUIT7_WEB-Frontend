export default function Header() {
  return (
    <header className="region-header">
      <div className="region-header__region">
        <span className="region-header__region-name">군자동</span>
        <button>
          <img src="/select.svg" alt=" 지역 선택 아이콘" />
        </button>
      </div>
      <div className="region-header__icons">
        <button>
          <img src="/search.svg" alt="검색 버튼" />
        </button>
        <button>
          <img src="/menu.svg" alt="리스트 버튼" />
        </button>
        <button>
          <img src="/alarm.svg" alt="알람 버튼" />
        </button>
      </div>
    </header>
  );
};