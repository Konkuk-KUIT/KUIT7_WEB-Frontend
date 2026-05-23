import Button from "../ui/Button";
import useCartStore from "../Cart/cart.store";
import type { Menu } from "../../lib/types";

interface MenuItemProps {
  menu: Menu;
  storeId: number;
}

const MenuItem = ({ menu, storeId }: MenuItemProps) => {
  const { addMenu } = useCartStore();
  const { clearCart } = useCartStore();
  const cartstoreId = useCartStore((state) => state.storeId);

  const clearCartAndAddMenu = () => {
    clearCart();
    addMenu(menu, storeId);
  }

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
        onClick={() => {
          if (cartstoreId !== null && storeId !== cartstoreId) {
            const shouldReplace = confirm("다른 가게의 메뉴가 장바구니에 담겨있습니다. 기존 메뉴를 삭제하고 새 메뉴를 담으시겠습니까?");

            if (shouldReplace) {
              clearCartAndAddMenu();
            }
            return;
          }
          addMenu(menu, storeId);
        }}
        type="button"
        size="xs"
      >
        담기
      </Button>
    </article>
  );
};

export default MenuItem;
