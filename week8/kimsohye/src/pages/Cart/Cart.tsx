import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/arrow.svg";
import Button from "../../components/Button";
import useCartStore from "../Store/userCartStore";

const Cart = () => {
  const navigate = useNavigate();

  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const clearCart = useCartStore((state) => state.clearCart);

  const orderPrice = menus.reduce((sum, menu) => sum + menu.price, 0);
  const deliveryFee = 2000;
  const totalPrice = orderPrice + deliveryFee;

  const isUnderMinPrice = store
    ? orderPrice < store.minDeliveryPrice
    : true;

  const handleCancel = () => {
    clearCart();
    navigate("/store");
  };

  if (!store || menus.length === 0) {
    return (
      <div className="flex top-[56px] relative min-h-screen justify-center bg-white">
        <div className="w-[390px] px-[24px] pt-[60px]">
          <p className="text-[18px] font-bold text-[#333D4B]">
            장바구니가 비어 있습니다.
          </p>

          <div className="mt-[30px]">
            <Button type="button" size="lg" onClick={() => navigate("/store")}>
              가게 보러가기
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex top-[56px] relative min-h-screen justify-center bg-white">
      <div
        className="absolute w-[390px] pb-[13px] flex items-center justify-between
           border-b-[16px] border-[#F2F4F6]"
      >
        <Link
          to={`/store/${store.id}`}
          className="flex pl-[10px] h-[24px] w-[24px] items-center justify-center"
        >
          <img src={backIcon} alt="뒤로가기" className="h-[24px] w-[24px]" />
        </Link>

        <button
          type="button"
          onClick={handleCancel}
          className="pr-[15px] border-0 p-0 text-[18px] font-bold text-[#333D4B] bg-white"
        >
          주문취소
        </button>
      </div>

      <main>
        <section className="mt-[16px] bg-white px-[24px] py-[38px]">
          <div className="flex items-center justify-between pt-[27px] pb-[13px]">
            <h1 className="m-0 text-[18px] font-bold text-[#6B7684]">
              {store.name}
            </h1>

            {isUnderMinPrice ? (
              <div className="text-[15px] text-[#F04452]">
                최소금액 미달 ⓘ
              </div>
            ) : null}
          </div>

          {menus.map((menu, index) => (
            <div key={`${menu.name}-${index}`} className="flex items-center">
              <div className="h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ECECEC]" />

              <div className="ml-[24px] mt-[19px] flex-1">
                <h2 className="mt-[16px] text-[17px] font-bold leading-none text-[#333D4B]">
                  {menu.name}
                </h2>

                <p className="m-0 mt-[10px] w-[210px] text-[13px] font-medium leading-[20px] text-[#6B7684]">
                  추천소스
                </p>

                <div className="mt-[5px] text-[13px] font-medium leading-none text-[#6B7684]">
                  {menu.price.toLocaleString()}원
                </div>
              </div>

              <div className="mr-[14px] text-[15px] font-bold text-[#6B7684]">
                1개
              </div>

              <div className="text-[16px] font-light text-[#6B7684]">›</div>
            </div>
          ))}
        </section>

        <button
          type="button"
          onClick={() => navigate(`/store/${store.id}`)}
          className="flex h-[57px] w-full items-center justify-center border-0 border-t border-[#E5E8EB] bg-white text-[20px] font-bold text-[#3182F6]"
        >
          더 담기 +
        </button>

        <section className="mt-[16px] bg-white px-[24px] pt-[34px] pb-[40px]">
          <div className="flex justify-between">
            <span className="text-[18px] font-medium text-[#8B95A1]">
              주문금액
            </span>
            <span className="text-[18px] font-bold text-[#4E5968]">
              {orderPrice.toLocaleString()}원
            </span>
          </div>

          <div className="mt-[24px] flex justify-between">
            <span className="text-[18px] font-medium text-[#8B95A1]">
              배달요금
            </span>
            <span className="text-[18px] font-bold text-[#4E5968]">
              {deliveryFee.toLocaleString()}원
            </span>
          </div>

          <div className="mt-[36px] flex justify-between">
            <span className="text-[19px] font-bold text-[#4E5968]">
              총 결제금액
            </span>
            <span className="text-[20px] font-bold text-[#4E5968]">
              {totalPrice.toLocaleString()}원
            </span>
          </div>
        </section>
      </main>

      <footer className="absolute bottom-[129px] left-0 w-full px-[28px]">
        <p className="m-0 mb-[28px] text-center text-[19px] font-bold text-[#6B7684]">
          최소 주문금액 {store.minDeliveryPrice.toLocaleString()}원
        </p>

        <div className="flex justify-center">
          <Button
            type="button"
            size="xl"
            disabled={isUnderMinPrice}
            onClick={() => alert("결제되었습니다.")}
          >
            {totalPrice.toLocaleString()}원 결제하기
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;