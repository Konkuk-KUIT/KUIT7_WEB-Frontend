import {create} from "zustand"

interface Menu {
    sid: number;
    name: string;
    price: number;
    ingredients: string
    minDeliveryPrice: number;
    sname: string;
}

interface CartState{
    menus: Menu[];

    addMenu: (menu: Menu) => void;

    reset: () => void;

    isModalOpen: boolean;

    openModal: () => void;
    closeModal: () => void;
}

const initialState: Pick<CartState, "menus"> = {
    menus: [],
};

const useCartStore = create<CartState>((set) => ({
    menus: initialState.menus,

    isModalOpen: false,

    addMenu: (menu) => {
        set((state) => {
            const exists = state.menus.some(
            (item) => item.sid === menu.sid
        );

        if (exists || state.menus.length==0){
            return{
                ...state,
                menus: [...state.menus, menu],
            };
        }
        const ok = confirm(
            "동일 가게의 메뉴만 담을 수 있습니다.\n장바구니를 비우고 담을까요?"
        );

        if (!ok) {
            return state;
        }

        return {
            ...state,
            menus: [menu],
        };
        
        })
    },

    reset: () => {
        set(() => ({
            ...initialState,
        }))
    },

    openModal: () => {
        set(() => ({
            isModalOpen: true,
        }));
    },

    closeModal: () => {
        set(() => ({
            isModalOpen: false,
        }));
    },

    

}));
  

export default useCartStore
