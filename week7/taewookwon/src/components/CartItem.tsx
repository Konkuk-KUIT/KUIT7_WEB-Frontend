import type { CartItem as CartItemType } from '../models/stores';

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="relative w-[390px] h-[168px] overflow-hidden">
      <p className="absolute left-[24px] top-[26px] text-[17px] font-bold text-[#6b7684]">
        샐로리 한남점
      </p>

      <p className="absolute right-[24px] top-[27px] text-[15px] font-medium text-[#f04452]">
        최소금액 미달 ⓘ
      </p>

      <div className="absolute left-[24px] top-[77px] w-[54px] h-[54px] bg-[#ececec] rounded-[8px]" />

      <p className="absolute left-[95px] top-[74px] text-[17px] font-bold text-[#333d4b]">
        {item.menuName}
      </p>

      <p className="absolute left-[94px] top-[99px] w-[210px] text-[13px] font-medium text-[#6b7684]">
        {item.options}
      </p>

      <p className="absolute left-[93px] top-[136px] text-[13px] font-medium text-[#6b7684]">
        {item.totalPrice.toLocaleString()}원
      </p>

      <p className="absolute left-[320px] top-[104px] text-[15px] font-medium text-[#6b7684]">
        {item.quantity}개
      </p>
    </div>
  );
};

export default CartItem;
