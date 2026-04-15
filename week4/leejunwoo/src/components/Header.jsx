const Header = ({location}) => {
    return (<>
    <header className="header-bar">
        <button className="location">
            <span className="location-name">{location}</span>
            <img src="../../images/bottomArrow.svg" alt="아래 화살표" /> 
        </button>
        <div className="right-btn">
            <button className="tri-btn">
                <img src="../../images/search.svg" alt="검색 버튼" />
            </button>
            <button className="tri-btn">
                <img src="../../images/menu.svg" alt="메뉴 버튼" />
            </button>
            <button className="tri-btn">
                <img src="../../images/alarm.svg" alt="알람 버튼" />
            </button>
        </div>
    </header>
</>);
};

export default Header;