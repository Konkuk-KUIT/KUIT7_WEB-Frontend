import stores from "../../models/stores";
import emptySquare from "../../assets/empty_square.svg";
import arrow from "../../assets/arrow.svg";
import warning from "../../assets/warning.svg";
import MoreButton from "../../Components/MoreButton";

const Cart = () => {
  return(
    <div className="w-[390px] mx-auto min-h-screen bg-white relative pb-[120px]">
      <div className="h-[16px] bg-[#F2F4F6]"></div>

      <div>
        <div className="justify-between items-center flex p-4">
          <div className="text-[#6B7684] text-[17px] font-bold font-Pretendard">{stores[0].name}</div>
          <div className="flex items-center gap-1">
            <span className="text-[#F04452] text-[15px] font-medium font-Pretendard">최소금액 미달</span>
            <img src={warning} alt="Warning" />
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 px-4 pb-4">
          
          <img className="w-[60px] h-[60px] rounded-[8px] flex-shrink-0" src={emptySquare} alt="Empty" />
          
          <div className="flex flex-col flex-1">
            <div className="text-[#333D48] text-[17px] font-bold font-Pretendard mb-1">{stores[0].menus[0].name}</div>
            <div className="text-[#6B7684] text-[13px] font-medium font-Pretendard leading-snug mb-1">
              {stores[0].menus[0].ingredients}
            </div>
            <div className="text-[#6B7684] text-[14px] font-medium font-Pretendard">
              {stores[0].menus[0].price.toLocaleString()}원
            </div>
          </div>
          
          <div className="flex flex-row items-center gap-1 flex-shrink-0 cursor-pointer">
            <div className="text-[#6B7684] text-[14px] font-medium font-Pretendard">1개</div>
            <img src={arrow} alt="Arrow" className="w-[14px] h-[14px]" />
          </div>

        </div>
      </div>

      <div className="flex justify-center border-t border-b border-[#F2F4F6] py-4">
        <MoreButton />
      </div>

      <div className="w-[390px] h-[16px] bg-[#F2F4F6]"></div>

      <div className="w-[390px] flex flex-col gap-4 p-4 mt-2">
        <div className="text-[17px] font-medium font-Pretendard justify-between items-center flex">
          <div className="text-[#8B95A1]">주문금액</div>
          <div className="text-[#505967]">{(stores[0].menus[0].price * 1).toLocaleString()}원</div>
        </div>
        <div className="text-[17px] font-medium font-Pretendard justify-between items-center flex">
          <div className="text-[#8B95A1]">배달요금</div>
          <div className="text-[#505967]">{stores[0].deliveryFee.toLocaleString()}원</div>
        </div>
        <div className="pt-4 justify-between items-center flex">
          <div className="text-[#4E5968] text-[17px] font-medium font-Pretendard">총 결제금액</div>
          <div className="text-[#4E5968] text-[17px] font-bold font-Pretendard">{(stores[0].menus[0].price * 1 + stores[0].deliveryFee).toLocaleString()}원</div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white pt-4 pb-8 px-4 flex flex-col items-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <div className="text-[#6B7684] text-[15px] font-medium font-Pretendard text-center mb-3">
          최소 주문금액 {stores[0].minDeliveryPrice.toLocaleString()}원
        </div>
        <button className="w-full bg-[#E8F3FF] rounded-[12px] py-4 text-[#3182F6] text-[16px] font-bold">
          {(stores[0].menus[0].price * 1 + stores[0].deliveryFee).toLocaleString()}원 결제하기
        </button>
      </div>

    </div>
  )
};

export default Cart;