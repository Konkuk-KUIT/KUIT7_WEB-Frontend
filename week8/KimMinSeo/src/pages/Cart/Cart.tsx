import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import useCartStore from "../../pages/Stores/useCartStore";

const Cart = () => {
  const navigate = useNavigate();

  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const clearCart = useCartStore((state) => state.clearCart);

  const orderPrice = menus.reduce((acc, cur) => acc + cur.price, 0);
  const deliveryFee = 2000;
  const totalPrice = orderPrice + deliveryFee;

  const isMinPriceLack = store ? orderPrice < store.minDeliveryPrice : true;

  const handleCancelOrder = () => {
    clearCart();
    navigate("/store");
  };

  const handleMoreMenu = () => {
    if (!store) {
      navigate("/store");
      return;
    }

    navigate(`/store/${store.id}`);
  };

  return (
    <Page>
      <Container>
        <TopArea>
          <Header />
          <CancelButton onClick={handleCancelOrder}>주문취소</CancelButton>
        </TopArea>

        <StoreBox>
          <StoreHeader>
            <StoreName>
              {store ? store.name : "장바구니가 비었습니다"}
            </StoreName>
            {isMinPriceLack && <Warning>최소금액 미달 ⓘ</Warning>}
          </StoreHeader>

          {menus.map((menu, index) => (
            <CartItem key={`${menu.id}-${index}`}>
              <Thumbnail />

              <ItemInfo>
                <ItemName>{menu.name}</ItemName>

                <Ingredients>
                  추천소스, 채소볼, 베이컨추가,
                  <br />
                  시저드레싱 추가
                </Ingredients>

                <ItemPrice>{menu.price.toLocaleString()}원</ItemPrice>
              </ItemInfo>

              <RightSection>
                <ItemCount>1개</ItemCount>
                <Arrow>›</Arrow>
              </RightSection>
            </CartItem>
          ))}
        </StoreBox>

        <MoreButton onClick={handleMoreMenu}>더 담기 +</MoreButton>

        <PriceBox>
          <PriceRow>
            <Label>주문금액</Label>
            <Value>{orderPrice.toLocaleString()}원</Value>
          </PriceRow>

          <PriceRow>
            <Label>배달요금</Label>
            <Value>{deliveryFee.toLocaleString()}원</Value>
          </PriceRow>

          <TotalRow>
            <TotalLabel>총 결제금액</TotalLabel>
            <TotalValue>{totalPrice.toLocaleString()}원</TotalValue>
          </TotalRow>
        </PriceBox>

        <BottomArea>
          <MinPrice>
            최소 주문금액 {store ? store.minDeliveryPrice.toLocaleString() : 0}
            원
          </MinPrice>

          <PayButton disabled={isMinPriceLack}>
            {isMinPriceLack
              ? "최소 금액 미달"
              : `${totalPrice.toLocaleString()}원 결제하기`}
          </PayButton>
        </BottomArea>
      </Container>
    </Page>
  );
};

export default Cart;
const Page = styled.div`
  min-height: 100vh;
  background-color: #f2f4f6;

  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;

  width: 390px;
  height: 844px;

  background-color: #ffffff;
  overflow: hidden;
`;

const TopArea = styled.div`
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 24px;
  box-sizing: border-box;
`;

const CancelButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  color: #191f28;
  font-size: 15px;
  font-weight: 700;
`;

const StoreBox = styled.section`
  min-height: 190px;
  padding: 22px 24px 0;

  background-color: #ffffff;
  border-top: 16px solid #f2f4f6;

  box-sizing: border-box;
`;

const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StoreName = styled.div`
  color: #6b7684;
  font-size: 14px;
  font-weight: 700;
`;

const Warning = styled.div`
  color: #f04452;
  font-size: 13px;
  font-weight: 700;
`;

const CartItem = styled.div`
  margin-top: 24px;

  display: flex;
  align-items: center;

  text-align: left;
`;

const Thumbnail = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;

  border-radius: 8px;
  background-color: #ececec;
`;

const ItemInfo = styled.div`
  margin-left: 14px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ItemName = styled.div`
  color: #333d4b;
  font-size: 17px;
  font-weight: 700;
`;

const Ingredients = styled.div`
  width: 210px;
  margin-top: 4px;

  color: #6b7684;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const ItemPrice = styled.div`
  margin-top: 4px;

  color: #6b7684;
  font-size: 13px;
  font-weight: 500;
`;

const RightSection = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;
`;

const ItemCount = styled.div`
  color: #4e5968;
  font-size: 14px;
  font-weight: 500;
`;

const Arrow = styled.div`
  margin-left: 14px;

  color: #8b95a1;
  font-size: 28px;
  font-weight: 300;
`;

const MoreButton = styled.button`
  width: 100%;
  height: 76px;

  border: none;
  border-top: 1px solid #f2f4f6;
  border-bottom: 16px solid #f2f4f6;

  background-color: #ffffff;
  cursor: pointer;

  color: #3182f6;
  font-size: 17px;
  font-weight: 700;
`;

const PriceBox = styled.section`
  padding: 28px 24px 0;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 18px;
`;

const Label = styled.div`
  color: #8b95a1;
  font-size: 17px;
  font-weight: 500;
`;

const Value = styled.div`
  color: #505967;
  font-size: 17px;
  font-weight: 500;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 8px;
`;

const TotalLabel = styled.div`
  color: #4e5968;
  font-size: 17px;
  font-weight: 500;
`;

const TotalValue = styled.div`
  color: #4e5968;
  font-size: 17px;
  font-weight: 600;
`;

const BottomArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 0 24px 28px;

  box-sizing: border-box;
`;

const MinPrice = styled.div`
  margin-bottom: 16px;

  text-align: center;

  color: #6b7684;
  font-size: 17px;
  font-weight: 500;
`;

const PayButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 56px;

  border: none;
  border-radius: 12px;

  background-color: ${({ disabled }) => (disabled ? "#d0dffb" : "#3182f6")};
  cursor: pointer;

  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;
