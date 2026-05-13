import styled from "styled-components";

import Header from "../../components/Header";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItem from "../../components/StoreItem";
import stores from "../../models/stores";

const Stores = () => {
  return (
    <Page>
      <Container>
        <Header />

        <Title>샐러드</Title>

        <StoreList>
          {stores.map((store, index) => (
            <StoreItem
              key={store.id}
              store={store}
              rank={index < 3 ? index + 1 : undefined}
            />
          ))}
        </StoreList>

        <OrderBar />
      </Container>
    </Page>
  );
};

export default Stores;

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

const Title = styled.h1`
  margin: 0 0 13px 24px;

  color: #191f28;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  text-align: left;
`;

const StoreList = styled.div`
  margin-top: 4px;
  padding-bottom: 111px;
`;
