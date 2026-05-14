import MenuButton from "../../components/MenuItem/MenuButton";
import pizzaImg from "../../assets/pizza.svg";
import saladImg from "../../assets/salad.svg";
import hamburgerImg from "../../assets/hambuger.svg";
import hansikImg from "../../assets/hansik.svg";
import bunsikImg from "../../assets/bunsik.svg";
import chickenImg from "../../assets/chicken.svg";
import sushiImg from "../../assets/sushi.svg";
import sandwichImg from "../../assets/sandwich.svg";
import pastaImg from "../../assets/pasta.svg";
import dessertImg from "../../assets/dessert.svg";
import coffeeImg from "../../assets/coffe.svg";
import moreImg from "../../assets/more.svg";
import OrderBar from "../../components/OrderBar/OrderBar";
import frontImg from "../../assets/front.svg"

const Home = () => {

  return (
    <div className="text-left w-[390px] font-[pretendard]">
      <div className="flex flex-col gap-3 pl-6">
        <span className="font-bold text-[26px] text-[#191f28] ">오늘은 무엇을 먹을까요?</span>
        <span className="font-[500] text-[#333d48] text-[17px] flex items-center">한남중앙로 40길 (한남 빌리지)(으)로 배달 <img src={frontImg} alt="화살표" className="w-[20px] h-[20px]" /> </span>
      </div>
      <div className="grid grid-cols-3 gap-x-[10px] gap-y-[10px] px-6 pt-7">
        <MenuButton image={pizzaImg} name="피자" />
        <MenuButton image={saladImg} name="샐러드" />
        <MenuButton image={hamburgerImg} name="햄버거" />
        <MenuButton image={hansikImg} name="한식" />
        <MenuButton image={bunsikImg} name="분식" />
        <MenuButton image={chickenImg} name="치킨" />
        <MenuButton image={sushiImg} name="초밥" />
        <MenuButton image={sandwichImg} name="샌드위치" />
        <MenuButton image={pastaImg} name="파스타" />
        <MenuButton image={dessertImg} name="디저트" />
        <MenuButton image={coffeeImg} name="커피" />
        <MenuButton image={moreImg} name="더보기" />
      </div>
      <div>
        <OrderBar/>
      </div>
    </div>
  )
};

export default Home;
