import OrderBar from "../../components/OrderBar/OrderBar";
import backIcon from "../../assets/arrow.svg";
import { Link,useParams  } from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";

const Store = () => {
const { storeId } = useParams();
const store = stores.find((store) => store.id === Number(storeId));
 

if (!store) {
    return <div>가게 정보를 찾을 수 없습니다.</div>;
  }


  return (
    <div className="flex min-h-screen justify-center bg-white">
      <div className="relative h-[844px] w-[390px] overflow-hidden bg-white">
        <main className="h-full overflow-y-auto pb-[130px] pt-[74px]">
          <Link
            to="/store"
            className="ml-[24px] flex h-[24px] w-[24px] items-center justify-center"
          >
            <img src={backIcon} alt="뒤로가기" className="h-[24px] w-[24px]" />
          </Link>

          <section className="px-[24px] pt-[40px] border-b border-gray-400">
            <h1 className="m-0 text-[26px] font-bold leading-none text-[#191F28]">
              {store.name}
            </h1>

            <div className="mt-[14px] flex items-center text-[17px] font-bold leading-none text-[#4E5968]">
              <span className="mr-[5px] text-[#FDB022]">★</span>
              <span>{store.rate}</span>
              <span className="ml-[7px] font-medium">
                리뷰{store.reviewCnt.toLocaleString()}
              </span>
            </div>

            <div className="mt-[28px] flex text-[14px] font-medium leading-none text-[#6B7684]">
              <span className="w-[58px]">결제방법</span>
              <span>토스결제만 현장결제 안됨</span>
            </div>

            <div className="mt-[15px] flex text-[14px] font-medium leading-none text-[#6B7684]">
              <span className="w-[58px]">최소주문</span>
              <span>{store.minDeliveryPrice.toLocaleString()}원</span>
            </div>

            <div className="mb-[14px] mt-[15px] flex text-[14px] font-medium leading-none text-[#6B7684]">
              <span className="w-[58px]">배달시간</span>
              <span>
                약 {store.minDeliveryTime + 2}-{store.maxDeliveryTime - 5}분
              </span>
            </div>
          </section>

          <section className="px-[24px] pt-[25px]">
            <h2 className="m-0 text-[15px] font-semibold leading-none text-[#6B7684]">
              샐러드
            </h2>

            <div className="mt-[24px] flex flex-col gap-[32px]">
              {store.menus.map((menu) => (
                <MenuItem
                  key={menu.id}
                  {...menu}
                  store={{
                    id: store.id,
                    name: store.name,
                    deliveryFee: store.deliveryFee,
                    minDeliveryPrice: store.minDeliveryPrice,
                  }}
                />
              ))}
            </div>
          </section>
        </main>

        <OrderBar />
      </div>
    </div>
  );
};

export default Store;