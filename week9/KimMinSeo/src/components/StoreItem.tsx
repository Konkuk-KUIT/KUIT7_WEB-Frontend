import { useState } from "react";
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
  onDelete?: () => void;
  onEdit?: (newName: string) => void;
}

const StoreItem = ({ store, rank, onDelete, onEdit }: StoreItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(store.name);

  return (
    <ItemLink to={`/store/${store.id}`}>
      <Thumbnail />

      <Info>
        {rank && <Rank>{rank}위</Rank>}

        {isEditing ? (
          <EditInput
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          />
        ) : (
          <Name>{store.name}</Name>
        )}

        <Meta>
          ★ {store.rate} ({store.reviewCnt.toLocaleString()})
        </Meta>

        <Meta>
          {store.minDeliveryTime}분~{store.maxDeliveryTime}분 · 배달비{" "}
          {store.deliveryFee.toLocaleString()}원
        </Meta>
      </Info>

      <ButtonBox>
        {isEditing ? (
          <SmallButton
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              onEdit?.(editName);
              setIsEditing(false);
            }}
          >
            저장
          </SmallButton>
        ) : (
          <SmallButton
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setIsEditing(true);
            }}
          >
            수정
          </SmallButton>
        )}

        <SmallButton
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            onDelete?.();
          }}
        >
          삭제
        </SmallButton>
      </ButtonBox>
    </ItemLink>
  );
};

export default StoreItem;

const ItemLink = styled(Link)`
  min-height: 116px;
  padding: 16px 24px;
  width: 390px;

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

const EditInput = styled.input`
  width: 130px;
  height: 28px;
  margin-top: 2px;

  border: 1px solid #d0d5dd;
  border-radius: 6px;
  padding: 0 8px;

  color: #333d4b;
  font-size: 15px;
  font-weight: 600;
`;

const Meta = styled.div`
  margin-top: 4px;

  color: #6b7684;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
`;

const ButtonBox = styled.div`
  margin-left: auto;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SmallButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: #f2f4f6;
  color: #4e5968;

  padding: 6px 8px;

  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;
