import styled from "styled-components";
import { Link } from "react-router-dom";

interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryFee: number;
}

interface StoreItemProps {
  store: Store;
  rank?: number;
}

const StoreItem = ({ store, rank }: StoreItemProps) => {
  return (
    <ItemLink to={`/store/${store.id}`}>
      <Thumbnail />

      <Info>
        {rank && <Rank>{rank}위</Rank>}
        <Name>{store.name}</Name>

        <Meta>
          ★ {store.rate} ({store.reviewCnt.toLocaleString()})
        </Meta>

        <Meta>
          {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
          {store.deliveryFee.toLocaleString()}원
        </Meta>
      </Info>
    </ItemLink>
  );
};

export default StoreItem;

const ItemLink = styled(Link)`
  width: 390px;
  height: 116px;
  padding: 16px 24px;

  display: flex;
  align-items: flex-start;
  gap: 17px;

  text-decoration: none;
  box-sizing: border-box;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  text-align: left;
`;

const Thumbnail = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #e5e5e5;
`;

const Rank = styled.div`
  color: #333d4b;
  font-size: 17px;
  font-weight: 600;
  line-height: normal;
`;

const Name = styled.div`
  margin-top: 2px;

  color: #333d4b;
  font-size: 17px;
  font-weight: 600;
  line-height: normal;
`;

const Meta = styled.div`
  margin-top: 4px;

  color: #6b7684;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
`;
