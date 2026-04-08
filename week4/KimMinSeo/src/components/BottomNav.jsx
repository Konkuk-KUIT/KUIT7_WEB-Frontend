const BottomNav = () => {
  const navItems = [
    { icon: "/icons/home.svg", label: "홈" },
    { icon: "/icons/community.svg", label: "동네생활" },
    { icon: "/icons/location.svg", label: "내 근처" },
    { icon: "/icons/chatting.svg", label: "채팅" },
    { icon: "/icons/profile.svg", label: "나의 당근" },
  ];

  return (
    <footer>
      <button className="plus-btn">
        <img src="/icons/plus.svg" alt="글쓰기" />
      </button>

      <nav className="nav">
        {navItems.map(({ icon, label }) => (
          <button className="nav-item" key={label}>
            <img src={icon} alt={label} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};
export default BottomNav;
