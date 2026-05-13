import errorImg from "../../assets/error.svg";
import frontImg from "../../assets/front.svg";
import plusImg from "../../assets/blueplus.svg";

const Cart = () => {
  return (
    <div>
      <div>top bar</div>
      <div>divider</div>
      <div>
        <div><span>샐로리 한남점</span> <span>최소금액 미달 <img src={errorImg} alt="에러" /></span></div>
        <div>
          <div style={{ width: "54px", height: "54px", backgroundColor: "#eee" }} />
          <div>
            <span>토마토 샐러드</span>
            <span>추천소스, 채소볼, 베이컨 추가, 시저드레싱 추가</span>
            <span>10,600원</span>
          </div>
          <div><span>1개</span><img src={frontImg} alt="상세" /></div>
          <div><span>더 담기 </span><img src={plusImg} alt="추가" /></div>
        </div>
      </div>
      <div>divider</div>
      <div>
        <div><span>주문 금액</span><span>10,600원</span></div>
        <div><span>배달 요금</span><span>2,000원</span></div>
        <div><span>총 결제금액</span><span>12,600원</span></div>
      </div>
      <div>
        <span>최소 주문 금액 13,000원</span>
        <div><span>12,600원 결제하기</span></div>
      </div>
    </div>
  );
};

export default Cart;
