import CardList from "../../components/FoodCard/CardList";
import FoodCardTitle from "../../components/FoodCard/FoodCardTitle";

const Home = () => {
  return <div className="px-[24px] pt-[88px] flex flex-col gap-[74px]">
    <FoodCardTitle />
    <CardList />
  </div>;
};

export default Home;
