import Button from "../Button";

interface Menu {
  name: string;
  isBest:boolean;
  price: number | string;
  ingredients: string;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const handleAddMenu = () => {};

return (
    <div className="flex items-center">
      <div className="h-[54px] w-[54px] shrink-0 rounded-full bg-[#ECECEC]" />

      <div className="ml-[16px] flex-1">
        <h3 className="m-0 text-[17px] font-bold leading-none text-[#333D4B]">
          {menu.name}
          {menu.isBest ? (
            <span className="ml-[6px] text-[15px] font-bold text-[#3182F6]">
              BEST
            </span>
          ) : null}
        </h3>

        <div className="mt-[5px] text-[13px] font-medium leading-none text-[#6B7684]">
          {Number(menu.price).toLocaleString()}원
        </div>

        <p className="m-0 mt-[5px] max-w-[201px] text-[13px] font-medium leading-[18px] text-[#6B7684]">
          {menu.ingredients}
        </p>
      </div>

      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
