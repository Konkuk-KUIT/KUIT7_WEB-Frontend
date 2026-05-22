import stores from "../../models/stores";
import StoreCard from "./StoreCard";
import { Link } from "react-router-dom";

export default function StoresList() {
  return (
    <section className="flex flex-col gap-10">
      {stores.map((store, index) => (
        <Link key={store.id} to={`/store/${store.id}`}>
          <StoreCard
            rank={index + 1}
            name={store.name}
            rate={store.rate}
            reviewCnt={store.reviewCnt}
            minDeliveryTime={store.minDeliveryTime}
            maxDeliveryTime={store.maxDeliveryTime}
            deliveryFee={store.deliveryFee}
          />
        </Link>
      ))}
    </section>
  );
}
