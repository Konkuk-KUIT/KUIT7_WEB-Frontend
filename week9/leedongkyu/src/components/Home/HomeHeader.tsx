function HomeHeader() {
  return (
    <header className="mx-auto flex mt-5 h-24 w-full max-w-md flex-col justify-center gap-2 overflow-hidden px-6">
      <h1 className="text-2xl font-bold text-gray-900">
        오늘은 무엇을 먹을까요?
      </h1>
      <p className="text-base font-medium text-gray-700">
        한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
      </p>
    </header>
  );
}

export default HomeHeader;
