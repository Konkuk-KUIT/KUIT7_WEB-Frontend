import MenuItem from "./MenuItem";

interface Menu {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
}

interface MenulistProps {
  menus: Menu[];
}

const Menulist = ({ menus }: MenulistProps) => {
  return (
    <div className="flex flex-col">
      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default Menulist;
