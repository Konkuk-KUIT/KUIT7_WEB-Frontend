import Button from "../Button";

interface Menu {
  price: number;
}

const OrderBar = () => {
  const menus: Menu[] = [];

  const handleOrder = () => {};

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="flex justify-between items-center px-6 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] rounded-2xl h-[80px]">
      <div className="flex flex-col gap-1.25">
        <div className="text-[#6B7684] text-[15px]">총 주문금액</div>
        <div className="text-[#4E5968] text-[17px]">{totalPrice}원</div>
      </div>
      <Button onClick={handleOrder} type="button" size="lg">
        주문하기
      </Button>
    </div>
  );
};

export default OrderBar;
