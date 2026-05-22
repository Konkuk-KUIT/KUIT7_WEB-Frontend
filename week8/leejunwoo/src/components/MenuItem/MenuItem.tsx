import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";

interface Menu {
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const handleAddMenu = () => {
    addMenu({
      name: menu.name,
      price: menu.price,
      ingredients: menu.ingredients,
    });
  };

  return (
    <div className="px-6 py-4 flex gap-8 flex items-center">
      <div style={{ width: "54px", height: "54px", backgroundColor: "#eee", borderRadius: "50px" }} />
      <div className="flex flex-col flex-1 gap-2.5">
        <h3 className="text-[#333D4B] font-pretnedard text-[17px] font-bold">{menu.name} <span className="text-[#3182f6] font-pretnedard text-[17px] font-bold">{menu.isBest?"BEST":null}</span></h3>
        <span className="text-[#6B7684] font-pretnedard text-[13px]">{menu.price}</span>
        <p className="text-[#6B7684] font-pretnedard text-[13px]">{menu.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
