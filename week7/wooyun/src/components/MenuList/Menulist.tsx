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
  storename: string;
}

const Menulist = ({ menus, storename }: MenulistProps) => {
  return (
    <div className="flex flex-col">
      {menus.map((menu) => (
        <MenuItem key={menu.id} id={menu.id} storename={storename} name={menu.name} price={menu.price} ingredients={menu.ingredients} isBest={menu.isBest} />
      ))}
    </div>
  );
};

export default Menulist;
