import { create } from "zustand";

interface Menu {
  name: string;
  price: number;
  ingredients: string;
}

interface StoreInfo {
  id: number;
  name: string;
  deliveryFee: number;
  minDeliveryPrice: number;
}

interface CartState {
  store: StoreInfo | null;
  menus: Menu[];

  addMenu: (store: StoreInfo, menu: Menu) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  store: null,
  menus: [],

  addMenu: (store, menu) => {
    const currentStore = get().store;

    if (currentStore && currentStore.id !== store.id) {
      alert("기존 장바구니 정보가 삭제되었습니다.");

      set({
        store,
        menus: [menu],
      });

      return;
    }

    set((state) => ({
      store,
      menus: [...state.menus, menu],
    }));
  },

  clearCart: () => {
    set({
      store: null,
      menus: [],
    });
  },
}));

export default useCartStore;