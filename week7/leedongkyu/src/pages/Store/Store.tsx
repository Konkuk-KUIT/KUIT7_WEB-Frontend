import { useParams } from "react-router-dom";
import StoreDetail from "../../components/Stores/StoreDetail";
import TopBar from "../../layouts/TopBar";
import stores from "../../models/stores";

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((item) => item.id === Number(storeId));

  if (!store) {
    return (
      <main className="mx-auto min-h-screen w-full max-w-md bg-white px-6 pt-16">
        <p className="text-base font-semibold text-gray-700">
          가게 정보를 찾을 수 없습니다.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-md bg-white">
      <TopBar />
      <StoreDetail store={store} />
    </main>
  );
};

export default Store;
