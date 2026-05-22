import { useParams } from "react-router-dom";
import starImg from "../../assets/star.svg";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import useStoreStore from "./useStoreStore";

const Stores = () => {
  const {storeId} = useParams();
  // const store = stores.find((store) => store.id === Number(storeId))
  const getStoreById = useStoreStore((state) => state.getStoreById);
  const store = getStoreById(Number(storeId));
  if(!store) return;
  return (
    <div className="bg-white text-left w-[390px] relative">
      <div className="pt-[26px] pl-[24px]" ><span className="text-[26px] font-bold text-[#191F28] font-pretendard">{store.name}</span></div>
      <div className="flex gap-2 pl-[23px] pb-[12px] pt-[7px]"><img src={starImg} alt="별" /> {store.rate} 리뷰 {store.reviewCnt}</div>
      <div className="pt-[9px] pl-[24px] gap-2 flex"><span>결제방법</span><span>토스결제만 현장결제 안 됨</span></div>
      <div className="pt-[9px] pl-[24px]  gap-2 flex"><span>최소주문</span> <span>{store.minDeliveryPrice}</span></div>
      <div className="pt-[9px] pl-[24px]  pb-[14px] gap-2 flex"><span>배달시간</span> <span>약 {store.minDeliveryTime}~{store.maxDeliveryTime}분</span></div>
      <div className="w-auto h-[1px] bg-[#E5E8EB]"></div>
      <div className="pl-[24px] pt-[20px] pb-[5px] font-[#6B7684] font-bold font-[17px] font-[pretendard]"><span>샐러드</span></div>
      {store.menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu}/>
      ))}
      <OrderBar/>
    </div>
  );
};

export default Stores;
