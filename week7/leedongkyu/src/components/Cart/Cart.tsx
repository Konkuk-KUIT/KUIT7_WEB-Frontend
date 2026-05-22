import TopBar from "../../layouts/TopBar";
import Button from "../ui/Button";

export default function Cart() {
  const orderPrice = 10600;
  const deliveryFee = 2000;
  const totalPrice = orderPrice + deliveryFee;
  const minOrderPrice = 13000;

  return (
    <main className="mx-auto min-h-screen w-full max-w-md bg-white pb-36 text-gray-700">
      <TopBar
        rightContent={
          <Button
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

      <section className="px-6 pt-6 pb-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-base font-bold text-gray-500">샐로리 한남점</h1>
          <p className="text-base font-medium text-rose-500">최소금액 미달 ⓘ</p>
        </div>

        <article className="flex min-h-20 items-center gap-4">
          <div className="size-14 shrink-0 rounded-lg bg-gray-200" />
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-bold text-gray-700">토마토 샐러드</h2>
            <p className="mt-1 max-w-52 text-xs font-medium leading-4 text-gray-500">
              추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
            </p>
            <p className="mt-2 text-xs font-medium text-gray-500">
              {orderPrice.toLocaleString()}원
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-6 text-base font-medium text-gray-500">
            <span>1개</span>
            <span className="text-2xl font-light text-gray-500">&gt;</span>
          </div>
        </article>
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
            최소 주문금액 {minOrderPrice.toLocaleString()}원
          </p>
          <div className="flex justify-center">
          <Button
            disabled
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
