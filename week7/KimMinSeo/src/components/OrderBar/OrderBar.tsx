import styled from "styled-components";
import Button from "../Button";

interface Menu {
  price: number;
}

const OrderBar = () => {
  const menus: Menu[] = [{ price: 12100 }];

  const handleOrder = () => {};

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <Container>
      <Inner>
        <PriceBox>
          <PriceLabel>총 주문금액</PriceLabel>
          <Price>{totalPrice.toLocaleString()}원</Price>
        </PriceBox>

        <Button onClick={handleOrder} type="button" size="lg">
          주문하기
        </Button>
      </Inner>
    </Container>
  );
};

export default OrderBar;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 111px;

  background: #ffffff;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -8px 16px rgba(0, 0, 0, 0.1);
`;

const Inner = styled.div`
  height: 100%;
  padding: 16px 20px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
`;

const PriceBox = styled.div`
  margin-top: 2px;
`;

const PriceLabel = styled.div`
  color: #8b95a1;
  font-size: 13px;
  font-weight: 500;
`;

const Price = styled.div`
  margin-top: 4px;
  color: #333d4b;
  font-size: 17px;
  font-weight: 800;
`;
