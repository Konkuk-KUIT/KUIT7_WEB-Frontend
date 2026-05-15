import BackSpaceTop from "../../components/FixedBar/BackSpaceTop";
import OrderBar from "../../components/FixedBar/OrderBar";
import Menutitle from "../../components/StoreList/Menutitle";
import StoreList from "../../components/StoreList/StoreList";

const Store = () => {
  return (
    <div>
      <BackSpaceTop />
      <Menutitle />
      <StoreList />
      <OrderBar />
    </div>
  );
};

export default Store;
