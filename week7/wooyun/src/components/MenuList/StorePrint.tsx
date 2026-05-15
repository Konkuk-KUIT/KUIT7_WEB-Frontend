import { useParams } from "react-router-dom";
import stores from "../../models/stores";
import StoreInfo from "./StoreInfo";
import Menulist from "./Menulist";

const StorePrint = () => {
  const { storeId } = useParams();

  const store = stores.find((store) => store.id === Number(storeId));

  if (!store) {
    return <div></div>;
  }

  return (
    <div>
      <StoreInfo
        name={store.name}
        rate={store.rate}
        reviewCnt={store.reviewCnt}
        minDeliveryPrice={store.minDeliveryPrice}
        minDeliveryTime={store.minDeliveryTime}
        maxDeliveryTime={store.maxDeliveryTime}
      />
      <Menulist menus={store.menus} />
    </div>
  );
};

export default StorePrint;
