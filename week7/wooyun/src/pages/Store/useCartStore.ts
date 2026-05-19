import { create } from "zustand";

interface Menu {
  id: number;
  storename: string;
  name: string;
  price: number;
  ingredients: string;
  count: number;
}

interface addMenuType {
  id: number;
  storename: string;
  name: string;
  price: number;
  ingredients: string;
}

interface CartState {
  menus: Menu[];

  addMenu: (menu: addMenuType) => void;

  initializeMenu: () => void;
}

const initialState: Pick<CartState, "menus"> = {
  menus: [],
};

const useCartStore = create<CartState>((set) => ({
  menus: initialState.menus,

  addMenu: (menu) => {
    set((state) => {
      const existMenu = state.menus.find((item) => item.id === menu.id);

      if (existMenu) {
        return {
          menus: state.menus.map((item) =>
            item.id === menu.id ? { ...item, count: item.count + 1 } : item,
          ),
        };
      }

    return {
        menus: [...state.menus, { ...menu, count: 1}],
    }
    })
  },

  initializeMenu: () => {
    set({
      menus: initialState.menus,
    });
  },
}));

export default useCartStore;
