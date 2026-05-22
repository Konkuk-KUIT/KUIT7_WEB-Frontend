interface StoreItemProps {
  rank: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
}

const StoreItem = ({
  rank,
  name,
  rate,
  reviewCnt,
  minDeliveryTime,
  maxDeliveryTime,
  deliveryFee,
}: StoreItemProps) => {
  return (
    <div className="flex h-[116px] w-full items-center px-[26px]">
      <div className="h-[54px] w-[54px] shrink-0 rounded-[7px] bg-[#ECECEC]" />

      <div className="ml-[18px]">
        {rank <= 3 ? (
        <div className="text-[18px] font-bold leading-none text-[#333D4B]">
            {rank}위
        </div>
        ) : null}

        <div className="mt-[6px] text-[17px] font-bold leading-none text-[#333D4B]">
          {name}
        </div>

        <div className="mt-[5px] text-[13px] font-medium leading-none text-[#6B7684]">
          ★ {rate} ({reviewCnt.toLocaleString()})
        </div>

        <div className="mt-[4px] text-[13px] font-medium leading-none text-[#6B7684]">
          {minDeliveryTime}분~{maxDeliveryTime}분 · 배달비{" "}
          {deliveryFee.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default StoreItem;