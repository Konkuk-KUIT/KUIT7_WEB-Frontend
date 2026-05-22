import errorImg from "../../assets/error.svg";
import frontImg from "../../assets/front.svg";
import plusImg from "../../assets/blueplus.svg";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[510px] text-left font-[pretendard]">
      <div className="bg-[#F2F4F6] w-full h-[20px]"></div>
      <div className="px-[24px] pt-[24px]">
        <div className="flex justify-between pb-[12px] text-[#6b7684] text-[17px] font-bold items-center"><span>샐로리 한남점</span> <span className="flex gap-[6px] text-[#f04452] text-[15px] items-center">최소금액 미달 <img src={errorImg} alt="에러" className="w-[13px] h-[13px]" /></span></div>
        <div className="flex gap-4">
          <div style={{ width: "54px", height: "54px", backgroundColor: "#eee" }} className="rounded-[8px]" />
          <div className="flex flex-col">
            <span className="text-[#333d4b] text-[17px] font-bold">토마토 샐러드</span>
            <span className="text-[#6b7684] text-[13px]">추천소스, 채소볼, 베이컨 추가, 시저드레싱 추가</span>
            <span className="text-[#6b7684] text-[13px]">10,600원</span>
          </div>
          <div className="flex items-center text-[#6b7684] text-[13px] ml-[50px]"><span>1개</span><img src={frontImg} alt="상세" className="w-4 h-4"/></div>
        </div>
        
        <div className="flex justify-center items-center py-5 outline-[#E5E8EB]"><span className="text-[#3182f6] text-[17px] font-[600]">더 담기 </span><img src={plusImg} alt="추가" /></div>
      </div>
      <div className="bg-[#F2F4F6] w-full h-[20px]"></div>
      <div className="px-6 py-4">
        <div className="py-2 flex justify-between"><span className="text-[#6b7684] text-[17px]">주문 금액</span><span className="text-[#505967] text-[17px]">10,600원</span></div>
        <div className="py-2 flex justify-between"><span className="text-[#6b7684] text-[17px]">배달 요금</span><span className="text-[#505967] text-[17px]">2,000원</span></div>
        <div className="py-4 flex justify-between"><span className="text-[#4e5968] text-[17px]">총 결제금액</span><span className="text-[#4e5968] text-[17px] font-[600]">12,600원</span></div>
      </div>
      <div className="w-[510px] fixed bottom-0 flex flex-col gap-5 items-center">
        <span className="text-[#6b7684] text-[17px]">최소 주문 금액 13,000원</span>
        <button type="button" className="!bg-[#d0dffb] rounded-[16px] px-[112px] py-[18px] w-[300px]"><span className="text-white">12,600원 결제하기</span></button>
      </div>
    </div>
  );
};

export default Cart;
