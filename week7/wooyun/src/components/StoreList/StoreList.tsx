import stores from "../../models/stores";
import StoreCard from "./StoreCard";

const StoreList = () => {
  return (
    <div className="flex flex-col">
      {stores.map((store) => (
        <StoreCard
          key={store.id}
          id={store.id}
          name={store.name}
          rate={store.rate}
          reviewCnt={store.reviewCnt}
          minDeliveryTime={store.minDeliveryTime}
          maxDeliveryTime={store.maxDeliveryTime}
          deliveryFee={store.deliveryFee}
        />
      ))}
    </div>
  );
};

export default StoreList;
