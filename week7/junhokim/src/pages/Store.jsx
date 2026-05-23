// import { useParams } from 'react-router-dom';
// import TopBar from '../components/TopBar';
// import MenuItem from '../components/MenuItem';
// import OrderBar from '../components/OrderBar';
// import { stores } from '../models/stores';

// export default function Store() {
//   const { storeId } = useParams();
//   const store = stores.find((s) => s.id === Number(storeId)) || stores[0];

//   return (
//     <div className="w-[390px] min-h-screen mx-auto bg-white pb-20">
//       <TopBar title="가게 메뉴 리스트" showBack />

//       <div className="px-5 py-4">
//         <div className="w-full h-44 bg-gray-200 rounded-xl mb-4" />
//         <h2 className="text-xl font-extrabold text-gray-900 mb-1">{store.name}</h2>
//         <p className="text-sm text-gray-500 mb-1">⭐ {store.rating} 리뷰 {store.reviewCount.toLocaleString()}</p>
//         <p className="text-xs text-gray-400 leading-relaxed">
//           호스페단 한남점과 관련 · 티소주로 {store.minOrderPrice.toLocaleString()}원 · 배달시간 {store.deliveryTime}
//         </p>
//       </div>

//       <div className="px-5">
//         <h3 className="text-base font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-1">샐러드</h3>
//         {store.menuItems.map((item) => (
//           <MenuItem key={item.id} item={item} />
//         ))}
//       </div>

//       <OrderBar totalPrice={12100} to="/cart" />
//     </div>
//   );
// }

import { useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import MenuItem from '../components/MenuItem';
import OrderBar from '../components/OrderBar';
import { stores } from '../models/stores';
import { useCart } from '../context/CartContext';

export default function Store() {
  const { storeId } = useParams();
  const store = stores.find((s) => s.id === Number(storeId)) || stores[0];
  const { totalPrice } = useCart();

  return (
    // <div className="min-h-screen bg-white pb-20 flex flex-fol">
    <div className="min-h-screen bg-white pb-20">
      <TopBar title="가게 메뉴 리스트" showBack />

      <div className="px-5 py-4">
        <div className="w-full h-44 bg-gray-200 rounded-xl mb-4" />
        <h2 className="text-xl font-extrabold text-gray-900 mb-1">{store.name}</h2>
        <p className="text-sm text-gray-500 mb-1">⭐ {store.rating} 리뷰 {store.reviewCount.toLocaleString()}</p>
        <p className="text-xs text-gray-400 leading-relaxed">
          최소주문 {store.minOrderPrice.toLocaleString()}원 · 배달시간 {store.deliveryTime}
        </p>
      </div>

      <div className="px-5">
        <h3 className="text-base font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-1">샐러드</h3>
        {store.menuItems.map((item) => (
          <MenuItem key={item.id} item={item} store={store} />
        ))}
      </div>

      <OrderBar totalPrice={totalPrice} to="/cart" />
    </div>
  );
}