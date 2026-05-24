import type { Store } from '../models/stores';

type StoreItemProps = {
  store: Store;
  rank?: number;
};

const StoreItem = ({ store, rank }: StoreItemProps) => {
  const hasRank = rank !== undefined;
  const height = hasRank ? 'h-[116px]' : 'h-[94px]';
  const imageTop = hasRank ? 'top-[16px]' : 'top-[20px]';
  const nameTop = hasRank ? 'top-[38px]' : 'top-[16px]';
  const ratingTop = hasRank ? 'top-[63px]' : 'top-[41px]';
  const deliveryTop = hasRank ? 'top-[83px]' : 'top-[61px]';
  const starTop = hasRank ? 'top-[64px]' : 'top-[42px]';

  return (
    <div className={`relative w-[390px] ${height} overflow-hidden`}>
      <div
        className={`absolute left-[24px] ${imageTop} w-[54px] h-[54px] bg-[#ececec] rounded-[8px]`}
      />

      {hasRank && (
        <p className="absolute left-[95px] top-[16px] text-[17px] font-semibold text-[#333d4b]">
          {rank}위
        </p>
      )}

      <p
        className={`absolute left-[95px] ${nameTop} text-[17px] font-semibold text-[#333d4b] whitespace-nowrap`}
      >
        {store.name}
      </p>

      <span
        className={`absolute left-[94px] ${starTop} text-[13px] text-[#fbbf24]`}
      >
        ★
      </span>

      <p
        className={`absolute left-[107px] ${ratingTop} text-[13px] font-medium text-[#6b7684] whitespace-nowrap`}
      >
        {store.rating} ({store.reviewCount.toLocaleString()})
      </p>

      <p
        className={`absolute left-[94px] ${deliveryTop} text-[13px] font-medium text-[#6b7684] whitespace-nowrap`}
      >
        {store.deliveryTime} · 배달비 {store.deliveryFee.toLocaleString()}원
      </p>
    </div>
  );
};

export default StoreItem;
