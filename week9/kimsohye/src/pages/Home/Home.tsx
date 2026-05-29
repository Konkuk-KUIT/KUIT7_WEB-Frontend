import { Link } from "react-router-dom";
import FoodCard from "../../components/FoodCard";
import OrderBar from "../../components/OrderBar/OrderBar";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";
import img5 from "../../assets/img5.svg";
import img6 from "../../assets/img6.svg";
import img7 from "../../assets/img7.svg";
import img8 from "../../assets/img8.svg";
import img9 from "../../assets/img9.svg";
import img10 from "../../assets/img10.svg";
import img11 from "../../assets/img11.svg";
import img12 from "../../assets/img12.svg";

const categories=[
  {icon: img1,name:"피자"},
  {icon: img2,name:"샐러드"},
  {icon: img3,name:"햄버거"},
  {icon: img4,name:"한식"},
  {icon: img5,name:"분식"},
  {icon: img6,name:"치킨"},
  {icon: img7,name:"초밥"},
  {icon: img8,name:"샌드위치"},
  {icon: img9,name:"파스타"},
  {icon: img10,name:"디저트"},
  {icon: img11,name:"커피"},
  {icon: img12,name:"더보기"},
];



const Home = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="relative h-[844px] w-[390px] overflow-hidden bg-white">
        <main className="mt-[41px]">
          <h1 className="m-0 text-left text-[26px] font-bold text-[#191F28]">
            오늘은 무엇을 먹을까요?
          </h1>

          <p className="m-0 text-left mt-[14px] text-[17px] font-medium text-[#333D4B]">
            한남중앙로 40길 &#40;한남 빌리지&#41;&#40;으&#41;로 배달 &gt;
          </p>

          <section className="mt-[86px] grid grid-cols-3 gap-x-[9px] gap-y-[9px]">
            {categories.map((category) => (
              <div
                key={category.name}
                className="text-inherit no-underline"
              >
                <FoodCard icon={category.icon} name={category.name} />
              </div>
            ))}
          </section>
        </main>

        <OrderBar />
      </div>
    </div>
  );
};

export default Home;
