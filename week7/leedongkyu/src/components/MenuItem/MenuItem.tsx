import Button from "../ui/Button";

interface Menu {
  name: string;
  price: number | string;
  ingredients: string;
  isBest?: boolean;
}

interface MenuItemProps {
  menu: Menu;
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const handleAddMenu = () => {};

  return (
    <article className="flex min-h-28 w-full items-center gap-3">
      <div className="size-14 shrink-0 rounded-full bg-gray-200" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <h3 className="truncate text-base font-semibold text-gray-700">
            {menu.name}
          </h3>
          {menu.isBest && (
            <span className="text-base font-semibold text-blue-500">BEST</span>
          )}
        </div>
        <p className="mt-1 text-xs font-medium text-gray-500">
          {Number(menu.price).toLocaleString()}원
        </p>
        <p className="mt-1 max-w-52 text-xs font-medium leading-4 text-gray-500">
          {menu.ingredients}
        </p>
      </div>
      <Button
        onClick={handleAddMenu}
        type="button"
        size="xs"
      >
        담기
      </Button>
    </article>
  );
};

export default MenuItem;
