import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { cartItems } from '../../models/stores';

const Cart = () => {
  const navigate = useNavigate();

  const orderAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = 2000;
  const totalAmount = orderAmount + deliveryFee;

  return (
    <div className="min-h-screen bg-[#f2f4f6] flex justify-center">
      <div className="relative w-[390px] h-[844px] bg-white overflow-hidden">
        <div className="absolute left-0 top-0 w-[390px] h-[88px] bg-white">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-[10px] top-[54px] w-[24px] h-[24px]"
            aria-label="뒤로가기"
          >
            <span className="text-[20px]">‹</span>
          </button>
          <p className="absolute right-[16px] top-[56px] text-[16px] font-semibold text-[#333d4b]">
            주문취소
          </p>
        </div>

        <div className="absolute left-0 top-[88px] w-[390px] h-[16px] bg-[#f2f4f6]" />

        <div className="absolute left-0 top-[104px]">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="absolute left-0 top-[272px] w-[390px] h-[59px] border-t border-[#e5e8eb] flex items-center justify-center">
          <p className="text-[17px] font-semibold text-[#3182f6]">더 담기 +</p>
        </div>

        <div className="absolute left-0 top-[331px] w-[390px] h-[32px] bg-[#f2f4f6]" />

        <div className="absolute left-0 top-[363px] w-[390px] bg-white">
          <div className="h-[38px] flex items-center justify-between px-[24px]">
            <p className="text-[17px] font-medium text-[#8b95a1]">주문금액</p>
            <p className="text-[17px] font-medium text-[#505967]">
              {orderAmount.toLocaleString()}원
            </p>
          </div>
          <div className="h-[38px] flex items-center justify-between px-[24px]">
            <p className="text-[17px] font-medium text-[#8b95a1]">배달요금</p>
            <p className="text-[17px] font-medium text-[#505967]">
              {deliveryFee.toLocaleString()}원
            </p>
          </div>
          <div className="h-[54px] flex items-center justify-between px-[24px]">
            <p className="text-[17px] font-medium text-[#4e5968]">
              총 결제금액
            </p>
            <p className="text-[17px] font-semibold text-[#4e5968]">
              {totalAmount.toLocaleString()}원
            </p>
          </div>
        </div>

        <div className="absolute left-0 top-[715px] w-[390px] h-[129px]">
          <p className="text-center text-[17px] font-medium text-[#6b7684]">
            최소 주문금액 13,000원
          </p>
          <div className="mt-[19px] mx-[20px] h-[56px] bg-[#d0dffb] rounded-[16px] flex items-center justify-center">
            <p className="text-[16px] font-semibold text-white">
              {totalAmount.toLocaleString()}원 결제하기
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
