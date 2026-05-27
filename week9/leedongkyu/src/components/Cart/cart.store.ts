import { create } from "zustand";
import type { Menu } from "../../lib/types";

interface CartState {
  menus: Menu[];
  addMenu: (menu: Menu, storeId: number | null) => void;
  clearCart: () => void;
  storeId : number | null;
}

const useCartStore = create<CartState>((set) => ({

  menus: [],
    storeId: null,
  addMenu: (menu, storeId) =>
    set((state) => ({
        menus: [...state.menus, menu],
        storeId: storeId,
    })),

  clearCart: () =>
    set(() => ({
      menus: [],
      storeId: null,
    })),
}));

export default useCartStore;
