import { useNavigate } from "react-router-dom";
import emptySquare from "../../assets/empty_square.svg";
import right_arrow from "../../assets/right_arrow.svg";
import left_arrow from "../../assets/left_arrow.svg";
import warning from "../../assets/warning.svg";
import MoreButton from "../../Components/MoreButton";
import useCartStore from "../Store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const menus = useCartStore((state) => state.menus);
  const storeInfo = useCartStore((state) => state.storeInfo);
  const clearCart = useCartStore((state) => state.clearCart);

    if (!storeInfo) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-[18px] font-Pretendard text-[#6B7684]">장바구니가 비어있습니다.</div>
      </div>
    );
  }

  const order = menus.reduce((acc, cur) => acc + Number(cur.price), 0);
  const deliveryFee = 2000;
  const totalPrice = order + deliveryFee;
  const isMinPrice = order < storeInfo.minDeliveryPrice;

  const handleCancelOrder = () => {
    clearCart();
    navigate("/store");
  };

  return (
    <div className="w-[390px] mx-auto min-h-screen bg-white relative pb-[120px]">
      <div className="flex justify-between pr-[15px] pt-[9px] pl-[10px] pb-[12px] items-center">
        <img className="cursor-pointer" onClick={() => navigate(-1)} src={right_arrow} alt="뒤로가기" />
        <div onClick={handleCancelOrder} className="cursor-pointer text-[16px] font-semibold font-Pretendard text-[#6B7684]">
          주문취소
        </div>
      </div>
      <div className="h-[16px] bg-[#F2F4F6]"></div>

      <div>
        <div className="justify-between items-center flex p-4">
          <div className="text-[#6B7684] text-[17px] font-bold font-Pretendard">{storeInfo.name}</div>
          
          {isMinPrice && (
            <div className="flex items-center gap-1">
              <span className="text-[#F04452] text-[15px] font-medium font-Pretendard">최소금액 미달</span>
              <img src={warning} alt="Warning" />
            </div>
          )}
        </div>
        {menus.map((menu, index) => (
          <div key={index} className="flex flex-row items-center gap-4 px-4 pb-4">
            <img className="w-[60px] h-[60px] rounded-[8px] flex-shrink-0" src={emptySquare} alt="Empty" />
            
            <div className="flex flex-col flex-1">
              <div className="text-[#333D48] text-[17px] font-bold font-Pretendard mb-1">{menu.name}</div>
              <div className="text-[#6B7684] text-[13px] font-medium font-Pretendard leading-snug mb-1">
                {menu.ingredients}
              </div>
              <div className="text-[#6B7684] text-[14px] font-medium font-Pretendard">
                {Number(menu.price).toLocaleString()}원
              </div>
            </div>
            
            <div className="flex flex-row items-center gap-1 flex-shrink-0 cursor-pointer">
              <div className="text-[#6B7684] text-[14px] font-medium font-Pretendard">1개</div>
              <img src={left_arrow} alt="Arrow" className="w-[14px] h-[14px]" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center border-t border-b border-[#F2F4F6] py-4">
        <MoreButton />
      </div>

      <div className="w-[390px] h-[16px] bg-[#F2F4F6]"></div>

      <div className="w-[390px] flex flex-col gap-4 p-4 mt-2">
        <div className="text-[17px] font-medium font-Pretendard justify-between items-center flex">
          <div className="text-[#8B95A1]">주문금액</div>
          <div className="text-[#505967]">{order.toLocaleString()}원</div>
        </div>
        <div className="text-[17px] font-medium font-Pretendard justify-between items-center flex">
          <div className="text-[#8B95A1]">배달요금</div>
          <div className="text-[#505967]">{deliveryFee.toLocaleString()}원</div>
        </div>
        <div className="pt-4 border-t border-[#F2F4F6] justify-between items-center flex">
          <div className="text-[#4E5968] text-[17px] font-medium font-Pretendard">총 결제금액</div>
          <div className="text-[#4E5968] text-[17px] font-bold font-Pretendard">{totalPrice.toLocaleString()}원</div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white pt-4 pb-8 px-4 flex flex-col items-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <div className="text-[#6B7684] text-[15px] font-medium font-Pretendard text-center mb-3">
          최소 주문금액 {storeInfo.minDeliveryPrice.toLocaleString()}원
        </div>
        <button 
          disabled={isMinPrice}
          className={`w-full rounded-[12px] py-4 text-[16px] font-bold transition-colors ${
            isMinPrice ? "bg-[#D0dffb] text-[#fff] cursor-not-allowed": "bg-[#3182f6] text-[#fff]"
          }`}
        >
          {isMinPrice ? `${totalPrice.toLocaleString()}원 결제하기` : `${totalPrice.toLocaleString()}원 결제하기`}
        </button>
      </div>

    </div>
  );
};

export default Cart;