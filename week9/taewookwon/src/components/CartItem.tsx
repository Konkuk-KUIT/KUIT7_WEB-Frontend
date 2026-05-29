import type { Menu } from '../models/stores';

type CartItemProps = {
  menu: Menu;
  storeName: string;
  showStoreName: boolean;
  isMinOrderMet: boolean;
};

const CartItem = ({
  menu,
  storeName,
  showStoreName,
  isMinOrderMet,
}: CartItemProps) => {
  const height = showStoreName ? 'h-[168px]' : 'h-[110px]';
  const menuTop = showStoreName ? 'top-[74px]' : 'top-[16px]';
  const imageTop = showStoreName ? 'top-[77px]' : 'top-[28px]';
  const optionsTop = showStoreName ? 'top-[99px]' : 'top-[41px]';
  const priceTop = showStoreName ? 'top-[136px]' : 'top-[78px]';
  const quantityTop = showStoreName ? 'top-[104px]' : 'top-[46px]';

  return (
    <div className={`relative w-[390px] ${height} overflow-hidden`}>
      {showStoreName && (
        <>
          <p className="absolute left-[24px] top-[26px] text-[17px] font-bold text-[#6b7684]">
            {storeName}
          </p>
          {!isMinOrderMet && (
            <p className="absolute right-[24px] top-[27px] text-[15px] font-medium text-[#f04452]">
              최소금액 미달 ⓘ
            </p>
          )}
        </>
      )}

      <div
        className={`absolute left-[24px] ${imageTop} w-[54px] h-[54px] bg-[#ececec] rounded-[8px]`}
      />

      <p
        className={`absolute left-[95px] ${menuTop} text-[17px] font-bold text-[#333d4b]`}
      >
        {menu.name}
      </p>

      <p
        className={`absolute left-[94px] ${optionsTop} w-[210px] text-[13px] font-medium text-[#6b7684]`}
      >
        {menu.description}
      </p>

      <p
        className={`absolute left-[93px] ${priceTop} text-[13px] font-medium text-[#6b7684]`}
      >
        {menu.price.toLocaleString()}원
      </p>

      <p
        className={`absolute left-[320px] ${quantityTop} text-[15px] font-medium text-[#6b7684]`}
      >
        1개
      </p>
    </div>
  );
};

export default CartItem;
