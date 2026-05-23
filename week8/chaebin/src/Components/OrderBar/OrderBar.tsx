import {useNavigate} from "react-router-dom";
import Button from "../Button";
import useCartStore from "../../Pages/Store/useCartStore";

interface Menu {
  price: number;
}

const OrderBar = () => {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/cart");
  };

  const menus = useCartStore((state) => state.menus);

  const totalPrice = menus.reduce((acc, cur) => acc + Number(cur.price), 0);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] bg-white px-5 py-4 flex items-center justify-between rounded-t-2xl shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-50">
      <div className="flex flex-col">
        <div className="text-[15px] text-[#6B7684] mb-0.5">총 주문금액</div>
        <div className="text-[17px] font-Pretendard text-[#4E5968]">{totalPrice}원</div>
      </div>
      <Button onClick={handleOrder} type="button" size="lg">
        주문하기
      </Button>
    </div>
  );
};

export default OrderBar;
