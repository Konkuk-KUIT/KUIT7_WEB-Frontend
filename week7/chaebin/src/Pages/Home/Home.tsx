import FoodSpace from "../../Components/FoodSpace";
import pizza from "../../assets/pizza.svg";
import salad from "../../assets/salad.svg";
import hanburger from "../../assets/hamburger.svg";
import korean from "../../assets/korean.svg";
import snack from "../../assets/snack.svg";
import chicken from "../../assets/chicken.svg";
import sushi from "../../assets/sushi.svg";
import sandswich from "../../assets/sandwich.svg";
import pasta from "../../assets/pasta.svg";
import dessert from "../../assets/dessert.svg";
import coffee from "../../assets/coffee.svg";
import more from "../../assets/more.svg";
import OrderBar from "../../Components/OrderBar/OrderBar";
import { Link } from "react-router";

const FoodCategory = [
  {id: 1, name: "피자", icon: pizza},
  {id: 2, name: "샐러드", icon: salad},
  {id: 3, name: "햄버거", icon: hanburger},
  {id: 4, name: "한식", icon: korean},
  {id: 5, name: "분식", icon: snack},
  {id: 6, name: "치킨", icon: chicken},
  {id: 7, name: "초밥", icon: sushi},
  {id: 8, name: "샌드위치", icon: sandswich},
  {id: 9, name: "파스타", icon: pasta},
  {id: 10, name: "디저트", icon: dessert},
  {id: 11, name: "커피", icon: coffee},
  {id: 12, name: "더보기", icon: more}

]

const Home = () => {
  return(
    <div className="flex justify-center">
      <div className="fixed w-full max-w-[400px] flex p-[25px_66px_4px_24px] flex-col">
        <div className="text-[#191F28] text-[26px] font-[pretendard] font-bold gap-y-[13px]">오늘은 무엇을 먹을까요?</div>
        <div className="text-[#333D48] font-[pretendard] text-[17px] font-[500]">한남중앙로 40길 (한남 빌리지)(으)로 배달 {'>'}</div>
      </div>

      <div className="fixed w-full max-w-[400px] top-[120px]">
        <div className="grid grid-cols-3 gap-y-4 gap-x-3 px-6 mt-4 p-74px">
        {FoodCategory.map((food) => (
          <Link to="/store" key={food.id}>
            <FoodSpace key={food.id} foodSrc={food.icon} foodName={food.name}/>
          </Link>
        ))}
       </div>
      </div>
        <div>
          <OrderBar />
        </div>
    </div>
  );
};

export default Home;
