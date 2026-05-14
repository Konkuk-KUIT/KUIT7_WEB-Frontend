import startBlack from "../assets/starblack.svg";

type Store = {
    id: number
    name: string
    rate: number 
    reviewCnt: number
    minDeliveryTime: number
    maxDeliveryTime: number
    deliveryFee: number
}

const StoreList = (store : Store) => {
  return (
    <div className="pl-6 py-4 flex gap-4">
        <div style={{ width: "54px", height: "54px", backgroundColor: "#eee" }} className="rounded-lg" />
        <div className="flex flex-col" >
            <span className="text-[17px] text-[#333d4b] font-[600]">{store.id} 위</span>
            <span className="text-[17px] text-[#333d4b] font-[600]">{store.name}</span>
            <span className="flex items-center text-[13px] text-[#6b7684]"><img src={startBlack} alt="흑백별"  className="w-3 h-3"/> {store.rate} ({store.reviewCnt})</span>
            <span className="text-[13px] text-[#6b7684]">{store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비 {store.deliveryFee}</span>
        </div>
    </div>
  )
}

export default StoreList