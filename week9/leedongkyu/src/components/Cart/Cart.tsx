import TopBar from "../../layouts/TopBar";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import useCartStore from "./cart.store";
import type { Menu } from "../../lib/types";
import stores from "../../models/stores";

  type CartMenu = {
    menu: Menu;
    quantity: number;
  }


export default function Cart() {

  const navigate = useNavigate();
  const { clearCart } = useCartStore();
  const storeId = useCartStore((state) => state.storeId);
  const menus = useCartStore((state) => state.menus);

  const currentStore = stores.find((store) => store.id === storeId);

  const cartMenus: CartMenu[] = [];

  const orderPrice = menus.reduce((total, menu) => {
    return total + Number(menu.price);
  }, 0);


  menus.forEach((menu) => {
    const existingCartMenu = cartMenus.find((cartMenu) => cartMenu.menu.id === menu.id);
    if (existingCartMenu) {
      existingCartMenu.quantity += 1;
    } else {
      cartMenus.push({ menu, quantity: 1 });
    }
  });

  const deliveryFee = 2000;
  const minDeliveryPrice = currentStore ? currentStore.minDeliveryPrice : 0;
  const totalPrice = orderPrice + deliveryFee;

  const handleCancelOrder = () => {
    clearCart();
    navigate("/store");
  }


  return (
    <main className="mx-auto min-h-screen w-full max-w-md bg-white pb-36 text-gray-700">
      <TopBar
        rightContent={
          <Button
            onClick={handleCancelOrder}
            variant="ghost"
            size="sm"
            type="button"
            className="px-4 text-base font-semibold text-gray-700"
          >
            주문취소
          </Button>
        }
      />

      <div className="h-4 bg-gray-100" />

      <section className="px-6 pt-5 pb-5">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-base font-bold text-gray-500">샐로리 한남점</h1>
          <p className="text-base font-medium text-rose-500">최소금액 미달 ⓘ</p>
        </div>

        {cartMenus.map(({ menu, quantity }) => (
          <article key={menu.id} className="flex min-h-16 items-center gap-3 py-1">
            <div className="size-12 shrink-0 rounded-lg bg-gray-200" />
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-bold text-gray-700">{menu.name}</h2>
              <p className="mt-0.5 max-w-52 text-xs font-medium leading-[15px] text-gray-500">
                {menu.ingredients}
              </p>
              <p className="mt-1 text-xs font-medium text-gray-500">
                {menu.price.toLocaleString()}원
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-sm font-medium text-gray-500">
              <span>{quantity}개</span>
              <span className="text-xl font-light text-gray-500">&gt;</span>
            </div>
          </article>
        ))}
      </section>

      <div className="border-t border-gray-200 py-4 text-center">
        <button type="button" className="text-base font-semibold text-blue-500">
          더 담기 +
        </button>
      </div>

      <div className="h-4 bg-gray-100" />

      <section className="px-6 pt-4">
        <dl className="text-base font-medium">
          <div className="flex h-9 items-center justify-between text-gray-400">
            <dt>주문금액</dt>
            <dd>{orderPrice.toLocaleString()}원</dd>
          </div>
          <div className="flex h-9 items-center justify-between text-gray-400">
            <dt>배달요금</dt>
            <dd>{deliveryFee.toLocaleString()}원</dd>
          </div>
          <div className="flex h-14 items-center justify-between text-gray-600">
            <dt>총 결제금액</dt>
            <dd className="font-semibold">{totalPrice.toLocaleString()}원</dd>
          </div>
        </dl>
      </section>

      <section className="fixed right-0 bottom-0 left-0 bg-white px-5 pb-8">
        <div className="mx-auto max-w-md">
          <p className="mb-5 text-center text-base font-medium text-gray-500">
            최소 주문금액 {minDeliveryPrice.toLocaleString()}원
          </p>
          <div className="flex justify-center">
          <Button
            disabled={totalPrice < minDeliveryPrice}
            type="button"
            size="xl"
            className="mx-auto h-14 w-full max-w-80 rounded-2xl px-0 py-0 text-base font-semibold"
          >
            {totalPrice.toLocaleString()}원 결제하기
          </Button>
            </div>
        </div>
      </section>
    </main>
  );
}
