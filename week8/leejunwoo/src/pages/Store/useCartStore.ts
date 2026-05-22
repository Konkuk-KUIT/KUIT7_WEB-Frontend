import { create } from "zustand"; 

interface Menu {
    id: number;
    name: string;
    price: number;
    ingredients: string
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
    addMenu: (menu: Menu, store: StoreInfo) => void;
    clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
    store: null,
    menus: [],
    addMenu:(menu, store) => {
        const currentStore = get().store;
        if(currentStore && currentStore.id !== store.id){
            const shouldReset = window.confirm("다른 가게의 메뉴는 함께 담을 수 없습니다.");
            if(!shouldReset) return;
            set({
                store, menus:[menu],
            });
            return;
        }
        set((state) => ({
            store, menus:[...state.menus, menu],
        }));
    },
    clearCart: ()=> {
        set({
            store: null,
            menus: [],
        });
    },
}));

export default useCartStore