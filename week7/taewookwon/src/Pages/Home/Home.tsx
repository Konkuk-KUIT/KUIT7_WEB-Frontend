import FoodCard from '../../components/FoodCard';
import { categories, userAddress } from '../../models/stores';
import OrderBar from '../../components/OrderBar';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f2f4f6] flex justify-center">
      <div className="relative w-[390px] h-[844px] bg-white overflow-hidden">
        <div className="absolute left-[24px] top-[113px]">
          <p className="text-[26px] font-bold text-[#191f28] whitespace-nowrap">
            오늘은 무엇을 먹을까요?
          </p>
          <p className="mt-[18px] text-[17px] font-medium text-[#333d4b] whitespace-nowrap">
            {userAddress}(으)로 배달 &gt;
          </p>
        </div>

        <div className="absolute left-[24px] top-[251px] grid grid-cols-3 gap-x-[9px] gap-y-[10px]">
          {categories.map((category) => (
            <FoodCard
              key={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>

        <OrderBar totalPrice={12100} />
      </div>
    </div>
  );
};

export default Home;
