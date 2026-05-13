import CardList from "../../components/FoodCard/CardList";
import FoodCardTitle from "../../components/FoodCard/FoodCardTitle";
import Top from "../../components/FixedBar/Top";
import OrderBar from "../../components/OrderBar/OrderBar";

const Home = () => {
  return (
    <div className="px-[24px] pt-[41px] flex flex-col">
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
