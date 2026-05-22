interface StoreCardProps {
  rank: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
}

export default function StoreCard({
  rank,
  name,
  rate,
  reviewCnt,
  minDeliveryTime,
  maxDeliveryTime,
  deliveryFee,
}: StoreCardProps) {
  return (
    <article className="flex w-full gap-5">
      <div className="h-[70px] w-[70px] shrink-0 rounded-lg bg-neutral-200" />
      <div className="min-w-0 pt-0.5 text-gray-600">
        <h2 className="text-xl font-bold leading-7 text-gray-700">
          {rank}위
        </h2>
        <h3 className="truncate text-xl font-bold leading-7 text-gray-700">
          {name}
        </h3>
        <p className="text-base font-medium leading-6">
          ★ {rate.toFixed(1)} ({reviewCnt.toLocaleString()})
        </p>
        <p className="text-base font-medium leading-6">
          {minDeliveryTime}분~{maxDeliveryTime}분 · 배달비{" "}
          {deliveryFee.toLocaleString()}원
        </p>
      </div>
    </article>
  );
}
