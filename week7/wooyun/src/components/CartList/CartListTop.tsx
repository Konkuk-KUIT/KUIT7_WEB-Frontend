import Top from "../FixedBar/Top";
import arrow from "../../assets/arrow.svg";

const CartListTop = () => {
  return (
    <div>
      <Top />
      <div className="py-[10px] pl-[10px] pr-[15px] flex justify-between">
        <img src={arrow} alt="뒤로가기" className="w-[24px] h-[24px]" />
        <p className="text-[#333D4B] font-['Pretendard'] text-[16px] font-[600] leading-[normal]">
            주문취소
        </p>
      </div>
      <div className="mt-[16px] h-[16px] bg-[#F2F4F6]"></div>
    </div>
  )
}

export default CartListTop;