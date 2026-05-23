// import TopBar from '../components/TopBar';
// import StoreCard from '../components/StoreCard';
// import OrderBar from '../components/OrderBar';
// import { stores } from '../models/stores';

// export default function Stores() {
//   return (
//     <div className="page">
//       <TopBar title="샐러드" showBack />
//       <div className="stores__list">
//         {stores.map((store) => (
//           <StoreCard key={store.id} store={store} />
//         ))}
//       </div>
//       <OrderBar totalPrice={12100} to="/cart" />
//     </div>
//   );
// }

import TopBar from '../components/TopBar';
import StoreCard from '../components/StoreCard';
import OrderBar from '../components/OrderBar';
import { stores } from '../models/stores';

export default function Stores() {
  return (
    <div className="w-[390px] min-h-screen mx-auto bg-white pb-20">
      <TopBar title="샐러드" showBack />
      <div className="px-5">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
      <OrderBar totalPrice={12100} to="/cart" />
    </div>
  );
}