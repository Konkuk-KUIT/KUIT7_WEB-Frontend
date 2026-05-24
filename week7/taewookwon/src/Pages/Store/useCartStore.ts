import { create } from 'zustand';
import type { Menu } from '../../models/stores';

interface CartState {
  menus: Menu[];
  storeId: number | null;
  addMenu: (menu: Menu, storeId: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  menus: [],
  storeId: null,

  addMenu: (menu, storeId) => {
    set((state) => {
      if (state.storeId !== null && state.storeId !== storeId) {
        return { menus: [menu], storeId };
      }

      return {
        menus: [...state.menus, menu],
        storeId,
      };
    });
  },

  clearCart: () => {
    set({ menus: [], storeId: null });
  },
}));

export default useCartStore;
