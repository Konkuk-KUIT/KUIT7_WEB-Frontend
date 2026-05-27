import type { ChangeEvent, SubmitEvent } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  createStore,
  deleteStore,
  fetchStores,
  updateStore,
} from "../../api/store.api";
import type { Store } from "../../lib/types";
import Button from "../ui/Button";
import StoreCard from "./StoreCard";

interface StoreFormData {
  name: string;
  rate: string;
  reviewCnt: string;
  minDeliveryTime: string;
  maxDeliveryTime: string;
  deliveryFee: string;
}

const emptyForm: StoreFormData = {
  name: "",
  rate: "",
  reviewCnt: "",
  minDeliveryTime: "",
  maxDeliveryTime: "",
  deliveryFee: "",
};

const newStoreDefaults = {
  rate: 4.5,
  reviewCnt: 1000,
  minDeliveryTime: 20,
  maxDeliveryTime: 40,
  minDeliveryPrice: 13000,
  deliveryFee: 3000,
  menus: [],
};

const toFormData = (store: Store): StoreFormData => ({
  name: store.name,
  rate: String(store.rate),
  reviewCnt: String(store.reviewCnt),
  minDeliveryTime: String(store.minDeliveryTime),
  maxDeliveryTime: String(store.maxDeliveryTime),
  deliveryFee: String(store.deliveryFee),
});

export default function StoresList() {
  const [stores, setStores] = useState<Store[]>([]);
  const [formData, setFormData] = useState<StoreFormData>(emptyForm);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingStoreId, setEditingStoreId] = useState<number | null>(null);

  useEffect(() => {
    const loadStores = async () => {
      try {
        const data = await fetchStores();
        setStores(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    loadStores();
  }, []);

  const openCreateForm = () => {
    setEditingStoreId(null);
    setFormData(emptyForm);
    setIsFormOpen(true);
  };

  const openUpdateForm = (store: Store) => {
    setEditingStoreId(store.id);
    setFormData(toFormData(store));
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setEditingStoreId(null);
    setFormData(emptyForm);
    setIsFormOpen(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getNextStoreId = () => {
    return stores.length + 1;
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSaving(true);

    try {
      if (editingStoreId === null) {
        const newStore: Store = {
          id: getNextStoreId(),
          name: formData.name.trim(),
          ...newStoreDefaults,
        };

        const createdStore = await createStore(newStore);

        setStores((prev) => [...prev, createdStore]);
      } else {
        const updatedStore = await updateStore(editingStoreId, {
          name: formData.name.trim(),
          rate: Number(formData.rate),
          reviewCnt: Number(formData.reviewCnt),
          minDeliveryTime: Number(formData.minDeliveryTime),
          maxDeliveryTime: Number(formData.maxDeliveryTime),
          deliveryFee: Number(formData.deliveryFee),
        });

        setStores((prev) =>
          prev.map((store) =>
            store.id === editingStoreId ? updatedStore : store,
          ),
        );
      }

      closeForm();
    } catch (error) {
      console.error("Error saving store:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (storeId: number) => {
    if (!confirm("이 가게를 삭제하시겠습니까?")) {
      return;
    }

    try {
      await deleteStore(storeId);
      setStores((prev) => prev.filter((store) => store.id !== storeId));

    } catch (error) {
      console.error("Error deleting store:", error);
    }
  };

  return (
    <>
      <section className="flex flex-col gap-10">
        {stores.map((store, index) => (
          <div key={store.id} className="flex items-start gap-5">
            <Link to={`/store/${store.id}`}>
              <StoreCard
                rank={index + 1}
                name={store.name}
                rate={store.rate}
                reviewCnt={store.reviewCnt}
                minDeliveryTime={store.minDeliveryTime}
                maxDeliveryTime={store.maxDeliveryTime}
                deliveryFee={store.deliveryFee}
              />
            </Link>

            <Button
              onClick={() => handleDelete(store.id)}
            >
              삭제
            </Button>

            <Button onClick={() => openUpdateForm(store)}>수정</Button>
          </div>
        ))}
      </section>

      {isFormOpen && (
        <form
          className="mt-8 flex flex-col gap-3 rounded-lg bg-neutral-50 p-4"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-md border border-gray-300 px-3 py-2"
            name="name"
            placeholder="가게 이름"
            required
            value={formData.name}
            onChange={handleInputChange}
          />

          {editingStoreId !== null && (
            <>
              <input
                className="rounded-md border border-gray-300 px-3 py-2"
                name="rate"
                type="number"
                min="0"
                max="5"
                step="0.1"
                placeholder="평점"
                required
                value={formData.rate}
                onChange={handleInputChange}
              />

              <input
                className="rounded-md border border-gray-300 px-3 py-2"
                name="reviewCnt"
                type="number"
                min="0"
                placeholder="리뷰 수"
                required
                value={formData.reviewCnt}
                onChange={handleInputChange}
              />

              <input
                className="rounded-md border border-gray-300 px-3 py-2"
                name="minDeliveryTime"
                type="number"
                min="0"
                placeholder="최소 배달 시간"
                required
                value={formData.minDeliveryTime}
                onChange={handleInputChange}
              />

              <input
                className="rounded-md border border-gray-300 px-3 py-2"
                name="maxDeliveryTime"
                type="number"
                min="0"
                placeholder="최대 배달 시간"
                required
                value={formData.maxDeliveryTime}
                onChange={handleInputChange}
              />

              <input
                className="rounded-md border border-gray-300 px-3 py-2"
                name="deliveryFee"
                type="number"
                min="0"
                placeholder="배달비"
                required
                value={formData.deliveryFee}
                onChange={handleInputChange}
              />
            </>
          )}

          <div className="mt-2 flex gap-2">
            <Button type="submit" disabled={isSaving}>
              {isSaving
                ? "저장 중"
                : editingStoreId === null
                  ? "추가"
                  : "수정 완료"}
            </Button>

            <Button type="button" variant="ghost" onClick={closeForm}>
              취소
            </Button>
          </div>
        </form>
      )}

      {!isFormOpen && (
        <div className="mt-10">
          <Button onClick={openCreateForm}>가게 추가하기</Button>
        </div>
      )}
    </>
  );
}