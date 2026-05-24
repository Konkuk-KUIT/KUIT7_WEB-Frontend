import MenuItem from '../../Components/MenuItem/MenuItem';
import OrderBar from '../../Components/OrderBar/OrderBar';
import stores from '../../models/stores';

const Store = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[390px] pb-[100px] relative">
        
        <div className="px-[24px] pt-[26px] pb-[20px] border-b border-gray-100">
          <div className="text-[#191F28] text-[26px] font-bold">{stores[0].name}</div>
          <div className="h-[38px] text-[#333D4B] text-[15px] font-medium">
            ★ {stores[0].rate} 리뷰 {stores[0].reviewCnt.toLocaleString()}
          </div>
          
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-row text-[#4E5968] text-[15px] font-medium gap-x-4">
              <div className="w-[60px]">결제방법</div>
              <div>토스 결제만 현장결제 안됨</div>
            </div>
            <div className="flex flex-row text-[#4E5968] text-[15px] font-medium gap-x-4">
              <div className="w-[60px]">최소주문</div>
              <div>{stores[0].minDeliveryPrice.toLocaleString()}원</div>
            </div>
            <div className="flex flex-row text-[#4E5968] text-[15px] font-medium gap-x-4">
              <div className="w-[60px]">배달시간</div>
              <div>{stores[0].minDeliveryTime}-{stores[0].maxDeliveryTime}분</div>
            </div>
          </div>
        </div>

        <div className="px-[24px] pt-[26px] pb-[11px]">
          <div className="text-[#6B7684] text-[17px] font-semibold">샐러드</div>
        </div>
        <div className="flex flex-col">
          {stores[0].menus.map((menu) => (
            <MenuItem 
              key={menu.id}
              menu={menu}
            />
          ))}
        </div>
        <OrderBar />
        
      </div>
    </div>
  )
};

export default Store;
