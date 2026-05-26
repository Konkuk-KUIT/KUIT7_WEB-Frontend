import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

interface MenuItemProps {
  menu: Menu;
  store: Store;
}

interface Store {
  id: number;
  name: string;
  deliveryFee: number;
  minDeliveryPrice: number;
}

const MenuItem = ({ menu, store }: MenuItemProps) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const formatPrice = (price: number) => price.toLocaleString();
  const handleAddMenu = () => {
    addMenu({
        id: menu.id,
        name: menu.name,
        price: menu.price,
        ingredients: menu.ingredients,
      },
      {
        id: store.id,
        name: store.name,
        deliveryFee: store.deliveryFee,
        minDeliveryPrice: store.minDeliveryPrice,
      });
  };

  return (
    <div className="px-6 py-4 flex gap-8 flex items-center">
      <div style={{ width: "54px", height: "54px", backgroundColor: "#eee", borderRadius: "50px" }} />
      <div className="flex flex-col flex-1 gap-2.5">
        <h3 className="text-[#333D4B] font-pretnedard text-[17px] font-bold">{menu.name} <span className="text-[#3182f6] font-pretnedard text-[17px] font-bold">{menu.isBest?"BEST":null}</span></h3>
        <span className="text-[#6B7684] font-pretnedard text-[13px]">{formatPrice(menu.price)}원</span>
        <p className="text-[#6B7684] font-pretnedard text-[13px]">{menu.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
