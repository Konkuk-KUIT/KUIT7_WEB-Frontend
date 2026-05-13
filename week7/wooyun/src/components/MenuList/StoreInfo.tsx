import star from "../../assets/star.svg";

interface StoreInfoProps {
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryPrice: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
}

const StoreInfo = ({
  name,
  rate,
  reviewCnt,
  minDeliveryPrice,
  minDeliveryTime,
  maxDeliveryTime,
}: StoreInfoProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-[#191F28] font-['Pretendard'] text-[26px] font-[700] leading-[normal] pt-[26px] pl-[24px]">
        {name}
      </p>
      <div className="flex items-center pt-[7px] pl-[23px] gap-[5px]">
        <img
          src={star}
          alt="평점"
          className="w-[18px] h-[19px] fill-[#FFD158]"
        />
        <span className="text-[#4E5968] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
          {rate}
        </span>
        <span className="text-[#4E5968] font-['Pretendard'] text-[16px] font-[500] leading-[normal]">
          리뷰{reviewCnt}
        </span>
      </div>
      <div className="flex items-center pt-[21px] pl-[24px] gap-[12px]">
        <p className="text-[#4E5968] font-['Pretendard'] text-[16px] font-[500] leading-[normal]">
          결제방법
        </p>
        <p className="text-[#4E5968] font-['Pretendard'] text-[16px] font-[500] leading-[normal]">
          토스결제만 현장결제 안됨
        </p>
      </div>
      <div className="flex items-center pt-[10px] pl-[24px] gap-[12px]">
        <p className="text-[#4E5968] font-['Pretendard'] text-[16px] font-[500] leading-[normal]">
          최소주문
        </p>
        <p className="text-[#4E5968] font-['Pretendard'] text-[16px] font-[500] leading-[normal]">
          {minDeliveryPrice}원
        </p>
      </div>
      <div className="flex items-center pt-[10px] pl-[24px] gap-[12px]">
        <p className="text-[#4E5968] font-['Pretendard'] text-[16px] font-[500] leading-[normal]">
          배달시간
        </p>
        <p className="text-[#4E5968] font-['Pretendard'] text-[16px] font-[500] leading-[normal]">
          약 {minDeliveryTime}~{maxDeliveryTime}분
        </p>
      </div>
      <div className="mt-[14px] border-b border-[#E5E8EB]"></div>
    </div>
  );
};

export default StoreInfo;
