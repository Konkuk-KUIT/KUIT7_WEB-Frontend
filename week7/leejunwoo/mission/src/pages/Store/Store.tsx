import OrderBar from "../../components/OrderBar/OrderBar";
import StoreList from "../../components/StoreList";
import stores from "../../models/stores";

const Store = () => {

  return (
    <div className="text-left w-[390px]">
      <div className="pl-6 pt-6.5"><span className="text-[#191F28] text-[26px] font-bold">샐러드</span></div>
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
