import type { Store } from "../lib/types";

export const fetchStores = async (): Promise<Store[]> => {
  const response = await fetch('http://localhost:3001/stores');
    if (!response.ok) {
        throw new Error('Failed to fetch stores');
    }
    return response.json();
};

export const createStore = async (storeData: Store): Promise<Store> => {
  const response = await fetch('http://localhost:3001/stores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(storeData),
  });

  if (!response.ok) {
    throw new Error('Failed to create store');
  }

  return response.json();
};

export const deleteStore = async (storeId: number): Promise<void> => {
  const response = await fetch(`http://localhost:3001/stores/${storeId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete store');
  }
};

export const updateStore = async (storeId: number, updatedData: Partial<Store>): Promise<Store> => {
  const response = await fetch(`http://localhost:3001/stores/${storeId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error('Failed to update store');
  }

  return response.json();
};
