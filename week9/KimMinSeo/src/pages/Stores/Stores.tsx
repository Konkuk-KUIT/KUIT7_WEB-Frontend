import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItem from "../../components/StoreItem";

interface Store {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: [];
}

const API_URL = "http://localhost:3001/stores";

const Stores = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [newStoreName, setNewStoreName] = useState("");

  const fetchStores = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setStores(data);
  };

  useEffect(() => {
    let ignore = false;

    const getStores = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (!ignore) {
        setStores(data);
      }
    };

    getStores();

    return () => {
      ignore = true;
    };
  }, []);

  const handleAddStore = async () => {
    if (!newStoreName.trim()) return;

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newStoreName,
        rate: 4.5,
        reviewCnt: 0,
        minDeliveryTime: 15,
        maxDeliveryTime: 30,
        minDeliveryPrice: 13000,
        deliveryFee: 2000,
        menus: [],
      }),
    });

    setNewStoreName("");
    fetchStores();
  };

  const handleDeleteStore = async (id: number) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    fetchStores();
  };

  const handleEditStore = async (id: number, newName: string) => {
    const trimmedName = newName.trim();

    if (!trimmedName) return;

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: trimmedName,
      }),
    });

    if (!response.ok) {
      alert("가게 이름 수정에 실패했습니다.");
      return;
    }

    setStores((prevStores) =>
      prevStores.map((store) =>
        store.id === id ? { ...store, name: trimmedName } : store,
      ),
    );
  };

  return (
    <Page>
      <Container>
        <Header />

        <Title>샐러드</Title>

        <AddBox>
          <AddInput
            value={newStoreName}
            onChange={(e) => setNewStoreName(e.target.value)}
            placeholder="추가할 가게 이름"
          />
          <AddButton type="button" onClick={handleAddStore}>
            추가
          </AddButton>
        </AddBox>

        <StoreList>
          {stores.map((store, index) => (
            <StoreItem
              key={store.id}
              store={store}
              rank={index < 3 ? index + 1 : undefined}
              onDelete={() => handleDeleteStore(store.id)}
              onEdit={(newName) => handleEditStore(store.id, newName)}
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
  overflow-y: auto;
`;

const Title = styled.h1`
  margin: 0 0 13px 24px;
  color: #191f28;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

const AddBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 24px 12px;
`;

const AddInput = styled.input`
  flex: 1;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
`;

const AddButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: #3182f6;
  color: white;
  padding: 0 12px;
  cursor: pointer;
`;

const StoreList = styled.div`
  margin-top: 4px;
  padding-bottom: 111px;
`;
