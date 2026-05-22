import { Link, useParams } from "react-router-dom";
import star from "../../assets/star.svg";

interface StoreCardProps {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
}

const StoreCard = ({
  id,
  name,
  rate,
  reviewCnt,
  minDeliveryTime,
  maxDeliveryTime,
  deliveryFee,
}: StoreCardProps) => {
  const { FoodId } = useParams();

  return (
    <Link
      to={`/store/${FoodId}/${id}`}
      className="w-full h-[116px] flex box-border pt-[18px] pl-[24px] gap-[17px] cursor-pointer no-underline text-inherit"
    >
      <div className="w-[54px] h-[54px] rounded-[8px] bg-[#ECECEC]"></div>
      <div>
        <p className="text-[#333D4B] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
          {id}위
        </p>
        <p className="text-[#333D4B] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">
          {name}
        </p>
        <span className="flex items-center">
          <img src={star} alt="별점" className="w-[13.161px] h-[13.161px]" />
          <p className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
            {rate} ({reviewCnt.toLocaleString()})
          </p>
        </span>
        <span className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
          {minDeliveryTime}분~{maxDeliveryTime}분 ∙ 배달비 {deliveryFee.toLocaleString()}원
        </span>
      </div>
    </Link>
  );
};

export default StoreCard;
