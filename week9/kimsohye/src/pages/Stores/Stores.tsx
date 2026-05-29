import { useState } from "react";
import OrderBar from "../../components/OrderBar/OrderBar";
import backIcon from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import StoreItem from "../../components/storeItem";
import { useStores } from "../../hooks/useStores";

const Stores = () => {
  const { stores, loading, addStore, updateStore, deleteStore } = useStores();
  const [newStoreName, setNewStoreName] = useState<string>("");

  const handleAddStore = () => {
    if (newStoreName === "") {
      alert("가게 이름을 입력해주세요.");
      return;
    }

    addStore(newStoreName);
    setNewStoreName("");
  };

  const handleUpdateStore = (id: number) => {
    const newName = prompt("수정할 가게 이름을 입력하세요.");

    if (!newName) return;

    updateStore(id, newName);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex min-h-screen justify-center bg-white">
      <div className="relative h-[844px] w-[390px] overflow-hidden bg-white">
        <main className="h-full overflow-y-auto pb-[130px] pt-[92px]">
          <Link
            to="/"
            className="ml-[24px] flex h-[24px] w-[24px] items-center justify-center border-0 bg-transparent p-0"
          >
            <img src={backIcon} alt="뒤로가기" className="h-[24px] w-[24px]" />
          </Link>

          <h1 className="m-0 ml-[24px] mt-[52px] text-[26px] font-bold leading-none text-[#191F28]">
            샐러드
          </h1>

          <section>
            {stores.map((store, index) => (
              <div key={store.id} className="relative">
                <StoreItem
                  rank={index + 1}
                  name={store.name}
                  rate={store.rate}
                  reviewCnt={store.reviewCnt}
                  minDeliveryTime={store.minDeliveryTime}
                  maxDeliveryTime={store.maxDeliveryTime}
                  deliveryFee={store.deliveryFee}
                />

                <div className="absolute right-[24px] top-[12px] flex gap-[6px]">
                  <button
                    type="button"
                    onClick={() => handleUpdateStore(store.id)}
                    className="rounded bg-gray-100 px-[10px] py-[4px] text-[12px]"
                  >
                    수정
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteStore(store.id)}
                    className="rounded bg-gray-100 px-[10px] py-[4px] text-[12px]"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </section>

          <div className="mx-[24px] mt-[24px] flex gap-[8px]">
            <input
              value={newStoreName}
              onChange={(e) => setNewStoreName(e.target.value)}
              placeholder="가게 이름 입력"
              className="flex-1 rounded border border-gray-300 px-[12px] py-[8px] text-[14px]"
            />

            <button
              type="button"
              onClick={handleAddStore}
              className="rounded bg-[#3182F6] px-[12px] py-[8px] text-[14px] text-white"
            >
              추가
            </button>
          </div>
        </main>
        <OrderBar />
      </div>
    </div>
  );
};

export default Stores;