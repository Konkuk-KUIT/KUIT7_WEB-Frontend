import Button from "../Button";

interface Menu {
  price: number;
}

const OrderBar = () => {
  const menus: Menu[] = [
    { price: 12100 },
  ];

  const handleOrder = () => {};

  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="absolute bottom-0 left-0 flex h-[111px] w-[390px] items-center justify-between rounded-t-[16px] bg-white px-[30px] shadow-[0_-8px_16px_0_rgba(0,0,0,0.10)]">
      <div>
        <div className="text-[15px] font-medium text-[#6B7684]">
          총 주문금액
        </div>

        <div className="mt-[6px] text-[17px] font-bold text-[#4E5968]">
          {totalPrice.toLocaleString()}원
        </div>
      </div>

      <Button onClick={handleOrder} type="button" size="lg">
        주문하기
      </Button>
    </div>
  );
};

export default OrderBar;