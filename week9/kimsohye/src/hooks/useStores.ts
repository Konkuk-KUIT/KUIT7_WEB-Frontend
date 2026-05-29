import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/stores";

export type Store = {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
};

export const useStores = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch(API_URL);
        const data: Store[] = await res.json();
        setStores(data);
      } catch (error) {
        console.error("가게 목록 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const addStore = async (name: string) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          rate: 4.5,
          reviewCnt: 0,
          minDeliveryTime: 20,
          maxDeliveryTime: 40,
          deliveryFee: 3000,
        }),
      });

      const newStore: Store = await res.json();

      setStores((prevStores) => [...prevStores, newStore]);
    } catch (error) {
      console.error("가게 추가 실패:", error);
    }
  };

  const updateStore = async (id: number, name: string) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });

      const updatedStore: Store = await res.json();

      setStores((prevStores) =>
        prevStores.map((store) =>
          store.id === id ? updatedStore : store
        )
      );
    } catch (error) {
      console.error("가게 수정 실패:", error);
    }
  };

  const deleteStore = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setStores((prevStores) =>
        prevStores.filter((store) => store.id !== id)
      );
    } catch (error) {
      console.error("가게 삭제 실패:", error);
    }
  };

  return {
    stores,
    loading,
    addStore,
    updateStore,
    deleteStore,
  };
};