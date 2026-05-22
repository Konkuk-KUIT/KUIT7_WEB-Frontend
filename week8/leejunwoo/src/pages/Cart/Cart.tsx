import errorImg from "../../assets/error.svg";
import frontImg from "../../assets/front.svg";
import plusImg from "../../assets/blueplus.svg";
import useCartStore from "../Store/useCartStore";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);

  const orderPrice = menus.reduce((acc, menu) => acc + menu.price, 0);
  const deliveryFee = store?.deliveryFee ?? 0;
  const totalPrice = orderPrice + deliveryFee;
  const minDeliveryPrice = store?.minDeliveryPrice ?? 0;
  const isBelowMinPrice = menus.length > 0 && orderPrice < minDeliveryPrice;
  const canOrder = menus.length > 0 && !isBelowMinPrice;
  const formatPrice = (price: number) => price.toLocaleString();

  return (
    <div className="relative min-h-screen w-[510px] pb-[150px] text-left font-[pretendard]">
      <div className="bg-[#F2F4F6] w-full h-[20px]"></div>
      <div className="px-[24px] pt-[24px]">
        <div className="flex items-center justify-between pb-[12px] text-[17px] font-bold">
          <span className="text-[#6b7684]">{store?.name ?? "장바구니"}</span>
          {isBelowMinPrice && (
            <span className="flex items-center gap-[6px] text-[15px] text-[#f04452]">
              최소금액 미달
              <img src={errorImg} alt="에러" className="h-[13px] w-[13px]" />
            </span>
          )}
        </div>

        <div className="flex flex-col">
          {menus.length === 0 ? (
            <div className="py-10 text-center text-[17px] text-[#6b7684]">
              장바구니가 비어있습니다.
            </div>
          ) : (
            menus.map((menu, index) => (
              <div
                className="flex gap-4 border-b border-[#E5E8EB] py-4 last:border-b-0"
                key={`${menu.id}-${index}`}
              >
                <div
                  style={{ width: "70px", height: "70px", backgroundColor: "#eee" }}
                  className="shrink-0 rounded-[8px]"
                />
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[17px] font-bold text-[#333d4b]">{menu.name}</span>
                  <span className="mt-[4px] break-keep text-[13px] leading-[18px] text-[#6b7684]">
                    {menu.ingredients}
                  </span>
                  <span className="mt-[6px] text-[13px] text-[#6b7684]">
                    {formatPrice(menu.price)}원
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-[8px] text-[13px] text-[#6b7684]">
                  <span>1개</span>
                  <img src={frontImg} alt="상세" className="h-4 w-4" />
                </div>
              </div>
            ))
          )}
        </div>

        <button
          type="button"
          onClick={() => store && navigate(`/store/${store.id}`)}
          className="flex w-full items-center justify-center py-5"
        >
          <span className="text-[17px] font-[600] text-[#3182f6]">더 담기 </span>
          <img src={plusImg} alt="추가" />
        </button>
      </div>
      <div className="bg-[#F2F4F6] w-full h-[20px]"></div>
      <div className="px-6 py-4">
        <div className="flex justify-between py-2">
          <span className="text-[17px] text-[#6b7684]">주문 금액</span>
          <span className="text-[17px] text-[#505967]">{formatPrice(orderPrice)}원</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-[17px] text-[#6b7684]">배달 요금</span>
          <span className="text-[17px] text-[#505967]">{formatPrice(deliveryFee)}원</span>
        </div>
        <div className="flex justify-between py-4">
          <span className="text-[17px] text-[#4e5968]">총 결제금액</span>
          <span className="text-[17px] font-[600] text-[#4e5968]">
            {formatPrice(totalPrice)}원
          </span>
        </div>
      </div>
      <div className="fixed bottom-0 flex w-[510px] flex-col items-center gap-5 bg-white pb-10 pt-5">
        <span className="text-[17px] text-[#6b7684]">
          최소 주문금액 {formatPrice(minDeliveryPrice)}원
        </span>
        <button
          type="button"
          disabled={!canOrder}
          className={`w-[454px] rounded-[16px] px-[112px] py-[18px] ${
            canOrder ? "!bg-[#3182f6]" : "!bg-[#d0dffb]"
          }`}
        >
          <span className="text-white">{formatPrice(totalPrice)}원 결제하기</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
