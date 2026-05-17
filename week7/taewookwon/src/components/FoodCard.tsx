type FoodCardProps = {
  name: string;
  image: string;
};

const FoodCard = ({ name, image }: FoodCardProps) => {
  return (
    <div className="relative w-[108px] h-[74px] bg-[#fafafb] rounded-[8px] overflow-hidden">
      <img
        src={image}
        alt={name}
        className="absolute left-[40px] top-[12px] w-[28px] h-[28px] object-cover"
      />
      <p className="absolute left-1/2 -translate-x-1/2 top-[44px] text-[14px] text-[#333d4b] font-semibold whitespace-nowrap">
        {name}
      </p>
    </div>
  );
};

export default FoodCard;
