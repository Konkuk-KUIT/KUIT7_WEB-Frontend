import TopBar from '../components/TopBar';
import StoreCard from '../components/StoreCard';
import OrderBar from '../components/OrderBar';
import { stores } from '../models/stores';
import { useCart } from '../context/CartContext';

export default function Stores() {
  const { totalPrice } = useCart();

  return (
    <div className="flex flex-col h-full">
      <TopBar title="샐러드" showBack />
      <div className="flex-1 overflow-y-auto px-5">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
      <OrderBar totalPrice={totalPrice} to="/cart" />
    </div>
  );
}