import { create } from "zustand";
import stores from "../../models/stores";

interface Menu {
    id: number;
    name: string;
    isBest: boolean;
    price: number;
    ingredients: string;
}

interface Store {
    id: number;
    name: string;
    rate: number;
    reviewCnt: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    minDeliveryPrice: number;
    deliveryFee: number;
    menus: Menu[];
}

interface StoreStore {
    stores: Store[];
    getStoreById: (id:number) => Store | undefined;
}
const useStoreStore = create<StoreStore>((_, get) => ({
    stores,
    getStoreById: (id) => {
        return get().stores.find((store) => store.id === id);
    },
}));

export default useStoreStore
