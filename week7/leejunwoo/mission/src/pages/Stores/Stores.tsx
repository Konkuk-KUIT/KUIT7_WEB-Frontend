import { useParams } from "react-router-dom";
import stores from "../../models/stores";
import starImg from "../../assets/star.svg";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

const Stores = () => {
  const {storeId} = useParams();
  const store = stores.find((store) => store.id === Number(storeId))
  if(!store) return;
  return (
    <div className="bg-[#fff]">
      <div className="pt-[26px] pl-[24px] pr-[298px]" ><span className="text-[26px] font-bold text-[#191F28] font-pretendard">{store.name}</span></div>
      <div className="flex "><img src={starImg} alt="별" /> {store.rate} 리뷰 {store.reviewCnt}</div>
      <div><span>결제방법 토스결제만 현장결제 안 됨</span></div>
      <div><span>최소주문 {store.minDeliveryPrice}</span></div>
      <div><span>배달시간 약 {store.minDeliveryTime}~{store.maxDeliveryTime}분</span></div>
      <div></div>
      <div><span>샐러드</span></div>
      {store.menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu}/>
      ))}
      <OrderBar/>
    </div>
  );
};

export default Stores;
