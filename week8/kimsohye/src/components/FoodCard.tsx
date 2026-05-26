import styled from "styled-components";

type FoodCardProps={
  icon:string;
  name:string;
}

const FoodCard = ({ icon, name }: FoodCardProps) => {
  return (
    <div className="flex h-[74px] w-[108px] flex-col items-center justify-center rounded-lg bg-[#F8F8F8]">
      <img src={icon} alt={name} className="h-[28px] w-[28px]" />
      <span className="text-[14px] text-[#333D4B]">
        {name}
      </span>
    </div>
  );
};



export default FoodCard;
