import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import OrderBar from '../../components/OrderBar';
import StoreItem from '../../components/StoreItem';
import type { Store } from '../../models/stores';

const API_URL = 'http://localhost:3001/stores';

const Stores = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newStoreName, setNewStoreName] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');

  const fetchStores = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStores(data);
    } catch (error) {
      console.error('불러오기 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const handleAddStore = async () => {
    if (!newStoreName.trim()) return;

    const newStore = {
      name: newStoreName,
      rating: 0,
      reviewCount: 0,
      deliveryTime: '13분~30분',
      deliveryFee: 2000,
      minOrder: 12000,
      paymentMethod: '토스결제만 현장결제 안됨',
      menus: [],
    };

    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStore),
      });
      setNewStoreName('');
      fetchStores();
    } catch (error) {
      console.error('추가 실패:', error);
    }
  };

  const handleDeleteStore = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      fetchStores();
    } catch (error) {
      console.error('삭제 실패:', error);
    }
  };

  const handleUpdateStore = async (id: number) => {
    if (!editName.trim()) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName }),
      });
      setEditingId(null);
      fetchStores();
    } catch (error) {
      console.error('수정 실패:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f4f6] flex justify-center">
      <div className="relative w-[390px] min-h-[844px] bg-white">
        <Header />

        <p className="absolute left-[24px] top-[114px] text-[26px] font-bold text-[#191f28] whitespace-nowrap">
          샐러드
        </p>

        <div className="pt-[147px] pb-[140px] flex flex-col">
          {isLoading ? (
            <p className="ml-[24px] text-[15px] text-[#6b7684]">
              불러오는 중...
            </p>
          ) : (
            <>
              {stores.map((store, index) => (
                <div key={store.id} className="relative">
                  {editingId === store.id ? (
                    <div className="flex items-center gap-[8px] px-[24px] py-[16px]">
                      <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border border-[#e5e8eb] rounded-[8px] px-[8px] py-[4px] text-[15px] flex-1"
                        placeholder="새 이름"
                      />
                      <button
                        onClick={() => handleUpdateStore(store.id)}
                        className="text-[14px] text-[#3182f6] font-medium"
                      >
                        저장
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="text-[14px] text-[#6b7684]"
                      >
                        취소
                      </button>
                    </div>
                  ) : (
                    <>
                      <Link to={`/store/${store.id}`}>
                        <StoreItem
                          store={store}
                          rank={index < 3 ? index + 1 : undefined}
                        />
                      </Link>
                      <div className="absolute right-[16px] top-[16px] flex gap-[8px]">
                        <button
                          onClick={() => {
                            setEditingId(store.id);
                            setEditName(store.name);
                          }}
                          className="text-[13px] text-[#6b7684]"
                        >
                          수정
                        </button>
                        <button
                          onClick={() => handleDeleteStore(store.id)}
                          className="text-[13px] text-[#f04452]"
                        >
                          삭제
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-[8px] px-[24px] py-[16px]">
                <input
                  value={newStoreName}
                  onChange={(e) => setNewStoreName(e.target.value)}
                  className="border border-[#e5e8eb] rounded-[8px] px-[8px] py-[8px] text-[15px] flex-1"
                  placeholder="새 가게 이름"
                />
                <button
                  onClick={handleAddStore}
                  className="bg-[#3182f6] text-white text-[14px] font-medium rounded-[8px] px-[16px] py-[8px] whitespace-nowrap"
                >
                  추가
                </button>
              </div>
            </>
          )}
        </div>

        <OrderBar />
      </div>
    </div>
  );
};

export default Stores;
//훅 분리?
