const BottomNav = () => {
    return (<>
        <button className="plus-btn">
            <img src="../../images/plus.svg" alt="추가 버튼" />
        </button>
        <nav className="bottom-bar">
            <button className="bottom-btn">
                <img src="../../images/home.svg" alt="홈 이미지" className="bimg" />
                <span className="bottom-text">홈</span>
            </button>
            <button className="bottom-btn">
                <img src="../../images/news.svg" alt="동네생활 이미지" className="bimg"/>
                <span className="bottom-text">동네생활</span>
            </button>
            <button className="bottom-btn">
                <img src="../../images/location.svg" alt="내 근처 이미지" className="bimg"/>
                <span className="bottom-text">내 근처</span>
            </button>
            <button className="bottom-btn">
                <img src="../../images/chat.svg" alt="채팅 이미지" className="bimg" />
                <span className="bottom-text">채팅</span>
            </button>
            <button className="bottom-btn">
                <img src="../../images/my.svg" alt="나의 당근 이미지" className="bimg" />
                <span className="bottom-text">나의 당근</span>
            </button>
        </nav>
</>);
};
export default BottomNav;