import Button from "../Button";
import useCartStore from "../../pages/Store/useCartStore";
// import Modal from "../Modal";

interface Menu {
  sid:number; // 가게의 id
  name: string;
  price: number;
  ingredients: string;
  isBest: boolean;
  minDeliveryPrice: number;
  sname: string;
}

const MenuItem = ({sid, name, price, ingredients,isBest, minDeliveryPrice,sname }: Menu) => {
  const addMenu = useCartStore((state) => state.addMenu);
  // const isModalOpen = useCartStore((state) => state.isModalOpen);
  // const closeModal = useCartStore((state) => state.closeModal);
  // const reset = useCartStore((state) => state.reset);

  const handleAddMenu = () => {
    addMenu({ sid, name, price, ingredients, minDeliveryPrice, sname})
  };
  // const handleConfirm = () => {
  //   reset();
  //   addMenu({ sid, name, price, ingredients });
  //   closeModal();
  // };
  

  return (
    <div className="flex justify-around items-center my-4">
      <div className="w-16 h-16 bg-[#ECECEC] rounded-full"></div>
      <div className="w-[205px]">
        <div className="flex gap-[6px]">
        <h3 className="text-[17px] font-semibold text-[#333D4B]">{name}</h3>
        {isBest &&(
          <div className="text-[#3182F6] text-[17px] font-medium">Best</div>
        )}
        </div>
        <span className="text-[13px] font-medium text-[#6B7684]">{price}원</span>
        
        <p className="text-[13px] font-medium text-[#6B7684]">{ingredients}</p>
      </div>
      <div onClick={handleAddMenu}>
        <Button type="button" size="sm">
          담기
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
