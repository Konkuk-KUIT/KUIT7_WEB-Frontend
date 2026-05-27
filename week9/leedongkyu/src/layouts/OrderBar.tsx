import Button from "../components/ui/Button";
import { Outlet } from "react-router-dom";
import type { Menu } from "../lib/types";
import useCartStore from "../components/Cart/cart.store";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
  const menus: Menu[] = useCartStore((state) => state.menus);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/cart");
  };

  const totalPrice = menus.reduce((total, menu) => {
    return total + Number(menu.price);
  }, 0);

  return (

     <>
      <Outlet />
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white px-7 pt-4 pb-8 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-gray-500">
              총 주문금액
            </span>
            <span className="text-lg font-bold text-gray-800">
              {totalPrice.toLocaleString()}원
            </span>
          </div>

          <Button
              onClick={handleOrder}
              type="button"
              size="lg"
              className="h-9 w-20 px-0 py-0 text-base font-medium"
            >
              주문하기
            </Button>
        </div>
      </div>
    </>
  );
};

export default OrderBar;
