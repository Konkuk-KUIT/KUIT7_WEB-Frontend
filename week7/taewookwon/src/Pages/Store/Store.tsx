import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import OrderBar from '../../components/OrderBar';
import MenuItem from '../../components/MenuItem';
import { stores } from '../../models/stores';

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id === Number(storeId));

  if (store) {
    return (
      <div className="min-h-screen bg-[#f2f4f6] flex justify-center">
        <div className="relative w-[390px] min-h-[844px] bg-white">
          <Header />
          <div className="absolute left-0 top-[88px] w-[390px]">
            <p className="ml-[24px] mt-[26px] text-[26px] font-bold text-[#191f28]">
              {store.name}
            </p>

            <div className="ml-[24px] mt-[15px] flex items-center gap-[8px]">
              <span className="text-[#fbbf24] text-[17px]">★</span>
              <span className="text-[17px] font-semibold text-[#4e5968]">
                {store.rating}
              </span>
              <span className="text-[16px] font-medium text-[#4e5968]">
                리뷰{store.reviewCount.toLocaleString()}
              </span>
            </div>

            <div className="mt-[16px] flex">
              <p className="ml-[24px] w-[64px] text-[15px] font-medium text-[#4e5968]">
                결제방법
              </p>
              <p className="text-[15px] font-medium text-[#4e5968]">
                {store.paymentMethod}
              </p>
            </div>

            <div className="mt-[10px] flex">
              <p className="ml-[24px] w-[64px] text-[15px] font-medium text-[#4e5968]">
                최소주문
              </p>
              <p className="text-[15px] font-medium text-[#4e5968]">
                {store.minOrder.toLocaleString()}원
              </p>
            </div>

            <div className="mt-[10px] flex">
              <p className="ml-[24px] w-[64px] text-[15px] font-medium text-[#4e5968]">
                배달시간
              </p>
              <p className="text-[15px] font-medium text-[#4e5968]">
                약 15-25분
              </p>
            </div>
          </div>

          <p className="absolute left-[24px] top-[308px] text-[17px] font-semibold text-[#6b7684]">
            샐러드
          </p>

          <div className="absolute left-0 top-[339px] flex flex-col pb-[120px]">
            {store.menus.map((menu) => (
              <MenuItem key={menu.id} menu={menu} />
            ))}
          </div>

          <OrderBar totalPrice={12100} />
        </div>
      </div>
    );
  }
};

export default Store;
