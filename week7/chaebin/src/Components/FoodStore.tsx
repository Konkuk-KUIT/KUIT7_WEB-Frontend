import emptySquare from '../assets/empty_square.svg';

interface FoodStoreProps {
    index: number;
    name: string;
    rate: number;
    reviewCnt: number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    deliveryFee: number;
}

const FoodStore = ({
    index, name, rate, reviewCnt, minDeliveryTime, maxDeliveryTime, deliveryFee 
}: FoodStoreProps)=> {
    return(
    <div className="flex flex-row items-center gap-4 p-4">
        <img className="w-[54px] h-[54px]" src={emptySquare} alt="" />
        <div className="flex flex-col items-start">
            <div className="text-[#333D48] font-pretendard text-[17px] font-semibold ">{index}위</div>
            <div className="text-[#333D48] font-pretendard text-[17px] font-semibold">{name}</div>
            <div className="text-[#6B7684] font-pretendard text-[13px] font-[500]">★{rate} ({reviewCnt})</div>
            <div className="text-[#6B7684] font-pretendard text-[13px] font-[500]">{minDeliveryTime}-{maxDeliveryTime}분 / 배달비 {deliveryFee}원</div>
        </div>
    </div>

    );
}

export default FoodStore;