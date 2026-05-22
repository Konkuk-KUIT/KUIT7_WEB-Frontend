import styled from "styled-components";
import Button from "../Button";
import useCartStore from "../../pages/Stores/useCartStore";

interface Store {
  id: number;
  name: string;
  deliveryFee: number;
  minDeliveryPrice: number;
}

interface Menu {
  id: number;
  name: string;
  price: number | string;
  ingredients: string;
  isBest?: boolean;
}

interface MenuItemProps {
  menu: Menu;
  store: Store;
}

const MenuItem = ({ menu, store }: MenuItemProps) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(
      {
        id: store.id,
        name: store.name,
        deliveryFee: 2000,
        minDeliveryPrice: store.minDeliveryPrice,
      },
      {
        id: menu.id,
        name: menu.name,
        price: Number(menu.price),
        ingredients: menu.ingredients,
      },
    );
  };

  return (
    <Container>
      <LeftSection>
        <Thumbnail />

        <Info>
          <NameRow>
            <MenuName>{menu.name}</MenuName>
            {menu.isBest && <BestText>BEST</BestText>}
          </NameRow>

          <Price>{Number(menu.price).toLocaleString()}원</Price>
          <Ingredients>{menu.ingredients}</Ingredients>
        </Info>
      </LeftSection>

      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </Container>
  );
};

export default MenuItem;

const Container = styled.div`
  width: 390px;
  min-height: 104px;
  padding: 16px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
`;

const LeftSection = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;

  border-radius: 27px;
  background-color: #ececec;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MenuName = styled.h3`
  margin: 0;

  color: #333d4b;
  font-size: 17px;
  font-weight: 600;
  line-height: normal;
`;

const BestText = styled.span`
  color: #3182f6;
  font-size: 17px;
  font-weight: 600;
  line-height: normal;
`;

const Price = styled.span`
  margin-top: 4px;

  color: #6b7684;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
`;

const Ingredients = styled.p`
  margin: 4px 0 0;
  width: 210px;
  color: #6b7684;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
  white-space: pre-line;
`;
