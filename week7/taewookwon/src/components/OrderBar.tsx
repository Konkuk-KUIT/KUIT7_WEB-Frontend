import { useNavigate } from 'react-router-dom';
import useCartStore from '../Pages/Store/useCartStore';

const OrderBar = () => {
  const navigate = useNavigate();
  const menus = useCartStore((state) => state.menus);
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  const handleOrder = () => {
    navigate('/cart');
  };

  return (
    <div className="absolute left-0 top-[733px] w-[390px] h-[111px] bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.1)]">
      <p className="absolute left-[24px] top-[16px] text-[15px] text-[#6b7684]">
        총 주문금액
      </p>
      <p className="absolute left-[24px] top-[39px] text-[17px] font-semibold text-[#4e5968]">
        {totalPrice.toLocaleString()}원
      </p>
      <button
        onClick={handleOrder}
        className="absolute left-[282px] top-[19px] w-[84px] h-[38px] bg-[#3182f6] text-white text-[15px] font-medium rounded-[8px]"
      >
        주문하기
      </button>
    </div>
  );
};

export default OrderBar;
