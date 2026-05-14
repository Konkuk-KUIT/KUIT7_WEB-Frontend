import FoodCategoryCard from "./FoodCategoryCard";

const foodCategories = [
  { id: 1, name: "피자", imgSrc: "/category/image.png" },
  { id: 2, name: "샐러드", imgSrc: "/category/image2.png" },
  { id: 3, name: "햄버거", imgSrc: "/category/image3.png" },
  { id: 4, name: "한식", imgSrc: "/category/image4.png" },
  { id: 5, name: "분식", imgSrc: "/category/image5.png" },
  { id: 6, name: "치킨", imgSrc: "/category/image6.png" },
  { id: 7, name: "초밥", imgSrc: "/category/image7.png" },
  { id: 8, name: "샌드위치", imgSrc: "/category/image8.png" },
  { id: 9, name: "파스타", imgSrc: "/category/image9.png" },
  { id: 10, name: "디저트", imgSrc: "/category/image10.png" },
  { id: 11, name: "커피", imgSrc: "/category/image11.png" },
  { id: 12, name: "더보기", imgSrc: "/category/image12.png" },
] as const;

export default function FoodCategoryList() {
  return (
    <section className="mx-auto grid w-full max-w-md grid-cols-3 gap-3 px-10 pt-20 pb-36">
      {foodCategories.map((category) => (
        <FoodCategoryCard
          key={category.id}
          imgSrc={category.imgSrc}
          name={category.name}
        />
      ))}
    </section>
  );
}
