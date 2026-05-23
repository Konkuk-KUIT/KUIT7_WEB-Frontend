import {create} from 'zustand';

interface Menu{
    name: string;
    price: number | string;
    ingredients: string;
}

interface StoreInfo{
    id: number;
    name: string;
    deliveryFee: number;
    minDeliveryPrice: number;
}

interface CartState{
    storeInfo: StoreInfo | null;
    menus: Menu[];
    addMenu: (menu: Menu, store: StoreInfo) => void;
    clearCart: () => void;
}

const initialState: Pick<CartState, "menus"> = {
    menus: [],
};

const useCartStore = create<CartState>((set) => ({
    storeInfo: null,
    menus: initialState.menus,
    addMenu: (menu, store) => {
        set((state) => ({ ...state,
            storeInfo: store,
             menus: [...state.menus, menu] }));
    },

    clearCart: ()=>{
        set({storeInfo: null, menus: []});
    }
}));

export default useCartStore;