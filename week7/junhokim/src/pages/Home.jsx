import { Link } from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import OrderBar from '../components/OrderBar';
import { categories } from '../models/stores';

export default function Home() {
  return (
    <div className="w-[390px] min-h-screen mx-auto bg-white pb-20">
      <div className="px-5 pt-6 pb-4">
        <p className="text-xl font-extrabold text-gray-900 mb-1">오늘은 무엇을 먹을까요?</p>
        <Link to="/store" className="text-sm text-gray-400">
          한남동삼로 40길 (한남 빌리지아) 으로 배달 &gt;
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-3 px-5 py-3">
        {categories.map((cat) => (
          <Link key={cat.id} to="/store">
            <CategoryButton emoji={cat.emoji} name={cat.name} />
          </Link>
        ))}
      </div>

      <OrderBar totalPrice={12100} to="/cart" />
    </div>
  );
}