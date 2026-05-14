import Button from "../ui/Button";

interface FoodCategoryCardProps {
  imgSrc: string;
  name: string;
}

export default function FoodCategoryCard({ imgSrc, name }: FoodCategoryCardProps) {
  return (
    <Button variant="category">
      <img className="size-7 object-contain" src={imgSrc} alt="" />
      <span className="text-sm font-semibold leading-5">{name}</span>
    </Button>
  );
}
