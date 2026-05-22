import Header from '../../components/Header';
import OrderBar from '../../components/OrderBar';
import StoreItem from '../../components/StoreItem';
import { stores } from '../../models/stores';

const Stores = () => {
  return (
    <div className="min-h-screen bg-[#f2f4f6] flex justify-center">
      <div className="relative w-[390px] h-[844px] bg-white overflow-hidden">
        <Header />

        <p className="absolute left-[24px] top-[114px] text-[26px] font-bold text-[#191f28] whitespace-nowrap">
          샐러드
        </p>

        <div className="absolute left-0 top-[147px] flex flex-col">
          {stores.map((store, index) => (
            <StoreItem
              key={store.id}
              store={store}
              rank={index < 3 ? index + 1 : undefined}
            />
          ))}
        </div>

        <OrderBar totalPrice={12100} />
      </div>
    </div>
  );
};

export default Stores;
