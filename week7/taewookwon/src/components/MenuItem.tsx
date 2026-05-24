import type { Menu } from '../models/stores';

type MenuItemProps = {
  menu: Menu;
};

const MenuItem = ({ menu }: MenuItemProps) => {
  return (
    <div className="relative w-[390px] h-[110px] overflow-hidden">
      <div className="absolute left-[24px] top-[28px] w-[54px] h-[54px] bg-[#ececec] rounded-full" />

      <p className="absolute left-[94px] top-[16px] text-[17px] font-semibold text-[#333d4b] whitespace-nowrap">
        {menu.name}
      </p>

      {menu.isBest && (
        <p className="absolute left-[193px] top-[16px] text-[17px] font-semibold text-[#3182f6]">
          BEST
        </p>
      )}

      <p className="absolute left-[94px] top-[41px] text-[13px] font-medium text-[#6b7684]">
        {menu.price.toLocaleString()}원
      </p>

      <p className="absolute left-[94px] top-[62px] w-[201px] text-[13px] font-medium text-[#6b7684] leading-tight">
        {menu.description}
      </p>

      <button className="absolute left-[314px] top-[40px] w-[52px] h-[32px] bg-[#3182f6] rounded-[8px] text-white text-[13px] font-medium">
        담기
      </button>
    </div>
  );
};

export default MenuItem;
