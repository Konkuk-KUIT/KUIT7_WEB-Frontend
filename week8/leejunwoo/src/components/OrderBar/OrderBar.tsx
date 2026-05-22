import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/cart")
  };
  const menus = useCartStore((state) => state.menus)
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const formatPrice = (price: number) => price.toLocaleString();

  return (
    <div className="h-[80px]">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] flex justify-between items-center px-6 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] rounded-2xl h-[80px] bg-white">
        <div className="flex flex-col gap-1.25">
          <div className="text-[#6B7684] text-[15px]">총 주문금액</div>
          <div className="text-[#4E5968] text-[17px]">
            {formatPrice(totalPrice)}원
          </div>
        </div>
        <Button onClick={handleOrder} type="button" size="lg">
          주문하기
        </Button>
      </div>
    </div>
  );
};

export default OrderBar;
