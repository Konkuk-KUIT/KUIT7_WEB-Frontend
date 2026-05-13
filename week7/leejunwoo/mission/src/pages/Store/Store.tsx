import OrderBar from "../../components/OrderBar/OrderBar";
import StoreList from "../../components/StoreList";
import stores from "../../models/stores";

const Store = () => {

  return (
    <div>
      <div><span>샐러드</span></div>
      <div>
        {stores.map((store)=> (
          <StoreList key={store.id} {...store} />
        ))}
      </div>
      <div><OrderBar/></div>
    </div>
  )
};

export default Store;
