export interface Store {
  id: string | number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: any[];
}

export type NewStore = Omit<Store, "id">;

const API_URL = "http://localhost:3001/stores";

export const getStores = async (): Promise<Store[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("불러오기 실패");
  return await res.json();
};

export const createStore = async (storeData: NewStore) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(storeData),
  });
  if (!res.ok) throw new Error("생성 실패");
  return await res.json();
};

export const updateStore = async (id: string | number, updateData: { name: string }) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  if (!res.ok) throw new Error("수정 실패");
  return await res.json();
};

export const deleteStore = async (id: string | number) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("삭제 실패");
  return await res.json();
};