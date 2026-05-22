import stores from "../../models/stores";
import OrderBar from "../../components/OrderBar/OrderBar";
import backIcon from "../../assets/arrow.svg";
import { Link,useNavigate } from "react-router-dom";
import StoreItem from "../../components/storeItem";
const Stores = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen justify-center bg-white">
      <div className="relative h-[844px] w-[390px] overflow-hidden bg-white">
        <main className="h-full overflow-y-auto pb-[130px] pt-[92px]">
          <Link
            to="/"
            className="ml-[24px] flex h-[24px] w-[24px] items-center justify-center border-0 bg-transparent p-0"
          >
            <img src={backIcon} alt="뒤로가기" className="h-[24px] w-[24px]" />
          </Link>

          <h1 className="m-0 ml-[24px] mt-[52px] text-[26px] font-bold leading-none text-[#191F28]">
            샐러드
          </h1>

          <section>
            {stores.map((store, index) => (
              <button
                key={store.id}
                type="button"
                onClick={() => navigate(`/store/${store.id}`)}
                className="block w-full border-0 bg-white p-0 text-left"
              >
                <StoreItem
                  rank={index + 1}
                  name={store.name}
                  rate={store.rate}
                  reviewCnt={store.reviewCnt}
                  minDeliveryTime={store.minDeliveryTime}
                  maxDeliveryTime={store.maxDeliveryTime}
                  deliveryFee={store.deliveryFee}
                />
              </button>
            ))}
          </section>
        </main>

        <OrderBar />
      </div>
    </div>
  );
};

export default Stores;