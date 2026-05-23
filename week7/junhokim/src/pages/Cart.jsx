// import TopBar from '../components/TopBar';
// import Button from '../components/Button';
// import { cartItems } from '../models/stores';

// const DELIVERY_FEE = 2000;
// const MIN_ORDER = 13000;

// export default function Cart() {
//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const total = subtotal + DELIVERY_FEE;

//   return (
//     <div className="page">
//       <TopBar title="주문서" showBack />

//       <div className="cart__store-section">
//         <div className="cart__store-header">
//           <span className="cart__store-name">셀로리 한남점</span>
//           <span className="cart__store-error">최소주문금액 ⓘ</span>
//         </div>

//         {cartItems.map((item) => (
//           <div key={item.id} className="cart__item">
//             <div className="cart__item-img" />
//             <div className="cart__item-info">
//               <p className="cart__item-name">{item.menuName}</p>
//               <p className="cart__item-desc">{item.description}</p>
//               <p className="cart__item-price">{item.price.toLocaleString()}원</p>
//             </div>
//             <span className="cart__item-qty">{item.quantity}개 &gt;</span>
//           </div>
//         ))}

//         <button className="cart__add-more">더 담기 +</button>
//       </div>

//       <div className="cart__divider" />

//       <div className="cart__summary">
//         <div className="cart__summary-row">
//           <span>주문금액</span>
//           <span>{subtotal.toLocaleString()}원</span>
//         </div>
//         <div className="cart__summary-row">
//           <span>배달요금</span>
//           <span>{DELIVERY_FEE.toLocaleString()}원</span>
//         </div>
//         <div className="cart__summary-row cart__summary-total">
//           <span>총 결제금액</span>
//           <span>{total.toLocaleString()}원</span>
//         </div>
//       </div>

//       <div className="cart__footer">
//         <p className="cart__min-notice">최소 주문금액 {MIN_ORDER.toLocaleString()}원</p>
//         <Button fullWidth>{total.toLocaleString()}원 결제하기</Button>
//       </div>
//     </div>
//   );
// }



import TopBar from '../components/TopBar';
import Button from '../components/Button';
import { cartItems } from '../models/stores';

const DELIVERY_FEE = 2000;
const MIN_ORDER = 13000;

export default function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + DELIVERY_FEE;

  return (
    <div className="w-[390px] min-h-screen mx-auto bg-white pb-20">
      <TopBar title="주문서" showBack />

      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-base font-bold text-gray-900">셀로리 한남점</span>
          <span className="text-xs text-red-500 font-medium">최소주문금액 ⓘ</span>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="flex items-start gap-3 py-3">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.menuName}</p>
              <p className="text-xs text-gray-400 mb-1 line-clamp-2">{item.description}</p>
              <p className="text-sm font-semibold text-gray-800">{item.price.toLocaleString()}원</p>
            </div>
            <span className="text-sm text-gray-500 self-center">{item.quantity}개 &gt;</span>
          </div>
        ))}

        <button className="w-full mt-3 py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-400 hover:bg-gray-50">
          더 담기 +
        </button>
      </div>

      <div className="h-2 bg-gray-100" />

      <div className="px-5 py-4 flex flex-col gap-3">
        <div className="flex justify-between text-sm text-gray-500">
          <span>주문금액</span>
          <span>{subtotal.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>배달요금</span>
          <span>{DELIVERY_FEE.toLocaleString()}원</span>
        </div>
        <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
          <span>총 결제금액</span>
          <span>{total.toLocaleString()}원</span>
        </div>
      </div>

      <div className="px-5">
        <p className="text-xs text-gray-400 text-center mb-3">최소 주문금액 {MIN_ORDER.toLocaleString()}원</p>
        <Button fullWidth>{total.toLocaleString()}원 결제하기</Button>
      </div>
    </div>
  );
}