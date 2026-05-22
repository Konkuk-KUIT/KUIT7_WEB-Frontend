import { useNavigate } from "react-router-dom";
import Button from "../Button";
import useCartStore from "../../pages/Store/userCartStore";


const OrderBar = () => {

  const navigate=useNavigate();
  const handleOrder = () => {
    navigate("/cart");
  };

  const menus=useCartStore((state)=>state.menus)
  

  return (
    <div className="absolute bottom-0 left-0 flex h-[111px] w-[390px] items-center justify-between rounded-t-[16px] bg-white px-[30px] shadow-[0_-8px_16px_0_rgba(0,0,0,0.10)]">
      <div>
        <div className="text-[15px] font-medium text-[#6B7684]">
          총 주문금액
        </div>

        <div className="mt-[6px] text-[17px] font-bold text-[#4E5968]">
          {menus.reduce((acc,cur)=>acc+cur.price,0)}원
        </div>
      </div>

      <Button onClick={handleOrder} type="button" size="lg">
        주문하기
      </Button>
    </div>
  );
};

export default OrderBar;