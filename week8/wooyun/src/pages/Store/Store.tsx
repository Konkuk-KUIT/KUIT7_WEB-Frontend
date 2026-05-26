import BackSpaceTop from "../../components/FixedBar/BackSpaceTop";
import OrderBar from "../../components/FixedBar/OrderBar";
import Menutitle from "../../components/StoreList/Menutitle";
import StoreList from "../../components/StoreList/StoreList";

const Store = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <BackSpaceTop />
        <Menutitle />
        <StoreList />
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
