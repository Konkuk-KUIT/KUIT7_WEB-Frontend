import Button from "../Button";

interface Menu {
  name: string;
  price: number | string;
  ingredients: string;
  isBest: boolean
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const handleAddMenu = () => {};

  return (
    <div>
      <div style={{ width: "54px", height: "54px", backgroundColor: "#eee", borderRadius: "50px" }} />
      <div>
        <h3>{menu.name} {menu.isBest?"BEST":null}</h3>
        <span>{menu.price}</span>
        <p>{menu.ingredients}</p>
      </div>
      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
