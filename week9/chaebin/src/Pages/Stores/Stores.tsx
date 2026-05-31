import { useState, useEffect } from "react";
import FoodStore from '../../Components/FoodStore';
import OrderBar from '../../Components/OrderBar/OrderBar';
import { getStores, createStore, updateStore, deleteStore, type Store, type NewStore } from "../../../api"; 

const Stores = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [newStoreName, setNewStoreName] = useState<string>("");

  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [editStoreName, setEditStoreName] = useState<string>("");

  const fetchAndSetStores = async () => {
      const data = await getStores();
      setStores(data);
   
  };

  useEffect(() => {
    fetchAndSetStores();
  }, []);

  const handleAddStore = async () => {
    const newStore: NewStore = {
      name: newStoreName,
      rate: 0,
      reviewCnt: 0,
      minDeliveryTime: 20,
      maxDeliveryTime: 40,
      minDeliveryPrice: 10000,
      deliveryFee: 2000,
      menus: [],
    };

      await createStore(newStore);
      setNewStoreName("");
      fetchAndSetStores();
  };
  const startEditing = (id: string | number, currentName: string) => {
    setEditingId(id);
    setEditStoreName(currentName);
  };

  const handleSaveEdit = async (id: string | number) => {
    if (!editStoreName.trim()) {
      setEditingId(null); 
      return;
    }

      await updateStore(id, { name: editStoreName });
      setEditingId(null);
      fetchAndSetStores();
  };

  const handleDelete = async (id: string | number) => {
      await deleteStore(id);
      fetchAndSetStores();
  };

  return (
    <div className="w-full h-full flex flex-col items-center pb-[100px]">
      <div className="pt-[26px] pb-[2px] px-[24px] w-full max-w-[390px] text-left">
        <div className="text-[#191F28] text-[26px] font-Pretendard font-bold">샐러드</div>
      </div>
      
      <div className="w-full max-w-[390px] flex flex-col gap-4 mt-4">
        {stores.map((store, index) => (
          <div key={store.id} className="relative w-full"> 
            
            {editingId === store.id ? (
              <div className="bg-white border  p-4 rounded-xl shadow-sm mx-4">
                <input 
                  type="text" 
                  value={editStoreName}
                  onChange={(e) => setEditStoreName(e.target.value)}
                  className="w-full border-b border-gray-300 outline-none py-1 mb-2 text-[#333D4B] font-medium"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button onClick={() => setEditingId(null)} className="px-3 py-1 bg-gray-100 text-xs rounded-md">취소</button>
                  <button onClick={() => handleSaveEdit(store.id)} className="px-3 py-1 bg-[#3182F6] text-white text-xs rounded-md">저장</button>
                </div>
              </div>
            ) : (
              <>
                <FoodStore 
                  index={index+1}
                  name={store.name}
                  rate={store.rate}
                  reviewCnt={store.reviewCnt}
                  minDeliveryTime={store.minDeliveryTime}
                  maxDeliveryTime={store.maxDeliveryTime}
                  deliveryFee={store.deliveryFee}
                />
                
                <div className="absolute top-2 right-4 flex gap-3"> 
                  <button 
                    onClick={() => startEditing(store.id, store.name)}
                    className="text-[#8B95A1] text-[13px] hover:underline"
                  >
                    수정
                  </button>
                  <button 
                    onClick={() => handleDelete(store.id)}
                    className="text-[#F04452] text-[13px] hover:underline"
                  >
                    삭제
                  </button>
                </div>
              </>
            )}
            
          </div>
        ))}
      </div>

      <div className="w-full max-w-[390px] px-[24px] mt-8 flex gap-2">
        <input
          type="text"
          value={newStoreName}
          onChange={(e) => setNewStoreName(e.target.value)}
          placeholder="추가할 가게 이름"
          className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
        <button 
          onClick={handleAddStore}
          className="px-4 py-2 bg-[#3182F6] text-white text-sm font-medium rounded-md flex-shrink-0"
        >
          추가
        </button>
      </div>

      <div>
        <OrderBar />
      </div>
    </div>
  );
};

export default Stores;