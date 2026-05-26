import FoodStore from '../../Components/FoodStore';
import OrderBar from '../../Components/OrderBar/OrderBar';
import stores from '../../models/stores';
import right_arrow from "../../assets/right_arrow.svg";
import {useNavigate, Link} from "react-router-dom";

const Stores = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-[390px] bg-white min-h-screen pb-[100px] relative">
        
        <div className="w-full flex justify-start pt-[20px] px-[24px] pb-[10px]">
          <img 
            className="cursor-pointer" 
            onClick={() => navigate(-1)} 
            src={right_arrow} 
            alt="뒤로가기" 
          />
        </div>
        
        <div className="px-[24px] pb-[20px]">
          <div className="text-[#191F28] text-[26px] font-Pretendard font-bold">샐러드</div>
        </div>
        
        <div className="w-full px-[24px]">
          {stores.map((store, index) => (
            <Link to={`/store/${store.id}`} key={store.id}>
              <FoodStore 
                index={index+1}
                name={store.name}
                rate={store.rate}
                reviewCnt={store.reviewCnt}
                minDeliveryTime={store.minDeliveryTime}
                maxDeliveryTime={store.maxDeliveryTime}
                deliveryFee={store.deliveryFee}
              />
            </Link>
          ))}
        </div>

        <OrderBar />
        
      </div>
    </div>
  );
};

export default Stores;
