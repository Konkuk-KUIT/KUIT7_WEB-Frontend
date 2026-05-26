import styled from "styled-components";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((store) => store.id === Number(storeId));

  if (!store) {
    return (
      <Page>
        <Container>
          <Header />
          <Empty>가게를 찾을 수 없습니다.</Empty>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        <Header />

        <StoreInfo>
          <StoreName>{store.name}</StoreName>

          <Rating>
            ⭐ {store.rate} 리뷰 {store.reviewCnt.toLocaleString()}
          </Rating>

          <InfoList>
            <InfoRow>
              <InfoLabel>결제방법</InfoLabel>
              <InfoValue>토스결제만 현장결제 안됨</InfoValue>
            </InfoRow>

            <InfoRow>
              <InfoLabel>최소주문</InfoLabel>
              <InfoValue>{store.minDeliveryPrice.toLocaleString()}원</InfoValue>
            </InfoRow>

            <InfoRow>
              <InfoLabel>배달시간</InfoLabel>
              <InfoValue>
                약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
              </InfoValue>
            </InfoRow>
          </InfoList>
        </StoreInfo>

        <Divider />

        <MenuSectionTitle>샐러드</MenuSectionTitle>

        <MenuList>
          {store.menus.map((menu) => (
            <MenuItem key={menu.id} menu={menu} store={store} />
          ))}
        </MenuList>

        <OrderBar />
      </Container>
    </Page>
  );
};

export default Store;

const Page = styled.div`
  min-height: 100vh;
  background-color: #f2f4f6;

  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;

  width: 390px;
  height: 1142px;

  background-color: #ffffff;
  overflow: hidden;
`;

const StoreInfo = styled.section`
  margin: 20px 0 0 24px;

  text-align: left;
`;

const StoreName = styled.h1`
  margin: 0;

  color: #191f28;
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
`;

const Rating = styled.div`
  margin-top: 7px;

  color: #4e5968;
  font-size: 17px;
  font-weight: 500;
`;

const InfoList = styled.div`
  margin-top: 21px;

  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InfoLabel = styled.div`
  width: 56px;

  color: #4e5968;
  font-size: 13px;
  font-weight: 500;
`;

const InfoValue = styled.div`
  color: #4e5968;
  font-size: 13px;
  font-weight: 500;
`;

const Divider = styled.div`
  margin-top: 24px;

  width: 390px;
  height: 1px;

  background-color: #f2f4f6;
`;

const MenuSectionTitle = styled.h2`
  margin: 18px 0 8px 24px;

  color: #6b7684;
  font-size: 17px;
  font-weight: 600;
  line-height: normal;

  text-align: left;
`;

const MenuList = styled.div``;

const Empty = styled.div`
  margin: 40px 0 0 24px;

  color: #333d4b;
  font-size: 16px;
  font-weight: 500;
`;
