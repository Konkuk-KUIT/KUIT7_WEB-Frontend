import CardList from "../../components/FoodList/CardList";
import FoodCardTitle from "../../components/FoodList/FoodCardTitle";
import Top from "../../components/FixedBar/Top";
import OrderBar from "../../components/FixedBar/OrderBar";

const Home = () => {
  return (
    <div className="px-[24px] py-[70px] flex flex-col">
      <Top />
      <div className="flex flex-col gap-[74px]">
        <FoodCardTitle />
        <CardList />
        <OrderBar />
      </div>
    </div>
  );
};

export default Home;
