interface FoodSpaceProps {
    foodSrc: string;
    foodName: string;
}

const FoodSpace = ({ foodSrc, foodName }: FoodSpaceProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-[12px_0_13px_0] bg-[#FAFAFB] rounded-[8px]">
        <img className="w-[26px] h-[28px] flex-col items-center justify-content" src={`${foodSrc}`} alt={`${foodName}`}></img>
        <span className="text-[14px] text-[#191F28] text-center">{foodName}</span>
    </div>
    );
};

export default FoodSpace;