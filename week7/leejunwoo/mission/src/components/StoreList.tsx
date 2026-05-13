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
    <div>
        <div style={{ width: "54px", height: "54px", backgroundColor: "#eee" }} />
        <div>
            <span>{store.id}위</span>
            <span>{store.name}</span>
            <span><img src={startBlack} alt="흑백별" /> {store.rate} ({store.reviewCnt})</span>
            <span>{store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비 {store.deliveryFee}</span>
        </div>
    </div>
  )
}

export default StoreList