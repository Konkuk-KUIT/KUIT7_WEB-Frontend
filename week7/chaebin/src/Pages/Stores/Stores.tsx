import FoodStore from '../../Components/FoodStore';
import OrderBar from '../../Components/OrderBar/OrderBar';
import stores from '../../models/stores';

const Stores = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="p-[26px_298px_2px_24px]">
        <div className="text-[#191F28] text-[26px] font-Pretendard font-bold">샐러드</div>
      </div>
      <div className="w-full max-w-[390px] h-[116px]">
        {stores.map((store, index) => (
          <FoodStore 
            key={store.id}
            index={index+1}
            name={store.name}
            rate={store.rate}
            reviewCnt={store.reviewCnt}
            minDeliveryTime={store.minDeliveryTime}
            maxDeliveryTime={store.maxDeliveryTime}
            deliveryFee={store.deliveryFee}
          />
        ))}
      </div>

      <div>
        <OrderBar />
      </div>
    </div>
  );
};

export default Stores;
