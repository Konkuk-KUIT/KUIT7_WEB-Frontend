import Button from "../Button";
import emptyRound from "../../assets/empty_round.svg";
import useCartStore from "../../Pages/Store/useCartStore";

interface Menu {
  name: string;
  isBest: boolean;
  price: number | string;
  ingredients: string;
}

interface MenuItemProps {
  menu: Menu;
  store: StoreInfo;
}

interface StoreInfo{
    id: number;
    name: string;
    deliveryFee: number;
    minDeliveryPrice: number;
}

const MenuItem = ({ menu, store }: MenuItemProps) => {
  const cartStoreInfo = useCartStore((state) => state.storeInfo);
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    if (cartStoreInfo !== null && cartStoreInfo.id !== store.id) {
      const isConfirmed = window.confirm("장바구니에는 같은 가게의 메뉴만 담을 수 있습니다.\n장바구니를 비우고 새로 담으시겠습니까?");
      if (isConfirmed) {
        useCartStore.getState().clearCart();
        addMenu({name: menu.name, price: menu.price, ingredients: menu.ingredients}, store);
      }
    } 
    else {
      addMenu({name: menu.name, price: menu.price, ingredients: menu.ingredients}, store);
    }
  };

  return (
    <div className="w-full max-w-[390px]">
      <div className="flex flex-row items-center justify-between p-4">
          <div className="flex flex-row items-start gap-4">
          <img className="w-[54px] h-[54px] rounded-full flex-shrink-0" src={emptyRound} alt="Empty" />
          
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center gap-2 mb-1">
              <h3 className="text-[#333D48] font-pretendard font-semibold text-[17px]">{menu.name}</h3>
              {menu.isBest && <div className="text-[#3182F6] font-pretendard font-semibold text-[14px]">Best</div>}
            </div>
            <span className="text-[#6B7684] font-pretendard text-[13px] font-[500] mb-1">
              {Number(menu.price).toLocaleString()}원
            </span>
            <p className="w-[201px] text-[#6B7684] font-pretendard text-[13px] font-[500] break-keep leading-snug">
              {menu.ingredients}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 ml-2">
          <Button onClick={handleAddMenu} type="button" size="sm">
            담기
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default MenuItem;
