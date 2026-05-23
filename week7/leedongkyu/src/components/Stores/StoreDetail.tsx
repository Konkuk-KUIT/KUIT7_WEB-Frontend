import MenuItem from "../MenuItem/MenuItem";
import type { Menu } from "../../lib/types";

interface StoreDetailProps {
  store: {
    id: number;
    name: string;
    rate: number;
    reviewCnt: number;
    minDeliveryPrice: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    menus: Menu[];
  };
}

export default function StoreDetail({ store }: StoreDetailProps) {
  return (
    <>
      
      <section className="px-6 pt-5">
        <h1 className="text-2xl font-bold text-gray-900">{store.name}</h1>
        <div className="mt-2 flex items-center gap-2 text-base text-gray-600">
          <span className="font-semibold text-yellow-400">★</span>
          <span className="font-semibold">{store.rate.toFixed(1)}</span>
          <span className="font-medium">
            리뷰{store.reviewCnt.toLocaleString()} &gt;
          </span>
        </div>
        <dl className="mt-4 space-y-2 text-base font-medium text-gray-600">
          <div className="flex gap-5">
            <dt>결제방법</dt>
            <dd>토스결제만 현장결제 안됨</dd>
          </div>
          <div className="flex gap-5">
            <dt>최소주문</dt>
            <dd>{store.minDeliveryPrice.toLocaleString()}원</dd>
          </div>
          <div className="flex gap-5">
            <dt>배달시간</dt>
            <dd>
              약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
            </dd>
          </div>
        </dl>
      </section>
        <div className=" mt-5 h-px bg-gray-200" />
      <section className="px-6 pt-5 pb-36">
        <h2 className="mb-3 text-base font-semibold text-gray-500">샐러드</h2>
        <div className="flex flex-col">
          {store.menus.map((menu) => (
            <MenuItem key={menu.id} menu={menu} storeId={store.id} />
          ))}
        </div>
      </section>
    </>
  );
}
