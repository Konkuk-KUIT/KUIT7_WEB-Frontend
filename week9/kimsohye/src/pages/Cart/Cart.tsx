import { Link } from "react-router-dom";
import backIcon from "../../assets/arrow.svg";
import Button from "../../components/Button";

const Cart = () => {
  return (
    <div className="flex top-[56px] relative min-h-screen justify-center bg-white">
        
          <div className="absolute w-[390px] pb-[13px] flex items-center justify-between
           border-b-[16px] border-[#F2F4F6]">
            <Link
              to="/store/1"
              className="flex pl-[10px] h-[24px] w-[24px] items-center justify-center"
            >
              <img src={backIcon} alt="뒤로가기" className="h-[24px] w-[24px]" />
            </Link>
            <Link to="/" className="pr-[15px] border-0 p-0 text-[18px] font-bold text-[#333D4B]">
              주문취소
            </Link>
          </div>

        <main>
          <section className="mt-[16px] bg-white px-[24px] py-[38px]">
            <div className="flex items-center justify-between pt-[27px] pb-[13px]">
              <h1 className="m-0 text-[18px] font-bold text-[#6B7684]">
                샐로리 한남점
              </h1>

              <div className="text-[15px] text-[#F04452]">
                최소금액 미달 ⓘ
              </div>
            </div>

            <div className=" flex items-center flex">
              <div className="h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ECECEC]" />

              <div className="ml-[24px] mt-[19px] flex-1">
                <h2 className="mt-[16px] text-[17px] font-bold leading-none text-[#333D4B]">
                  토마토 샐러드
                </h2>

                <p className="m-0 mt-[10px] w-[210px] text-[13px] font-medium leading-[20px] text-[#6B7684]">
                  추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
                </p>

                <div className="mt-[5px] text-[13px] font-medium leading-none text-[#6B7684]">
                  10,600원
                </div>
              </div>

              <div className="mr-[14px] text-[15px] font-bold text-[#6B7684]">
                1개
              </div>

              <div className="text-[16px] font-light text-[#6B7684]">›</div>
            </div>
          </section>

          <button className="flex h-[57px] w-full items-center justify-center border-0 border-t border-[#E5E8EB] bg-white text-[20px] font-bold text-[#3182F6]">
            더 담기 +
          </button>

          <section className="mt-[16px] bg-white px-[24px] pt-[34px] pb-[40px]">
            <div className="flex justify-between">
              <span className="text-[18px] font-medium text-[#8B95A1]">
                주문금액
              </span>
              <span className="text-[18px] font-bold text-[#4E5968]">
                10,600원
              </span>
            </div>

            <div className="mt-[24px] flex justify-between">
              <span className="text-[18px] font-medium text-[#8B95A1]">
                배달요금
              </span>
              <span className="text-[18px] font-bold text-[#4E5968]">
                2,000원
              </span>
            </div>

            <div className="mt-[36px] flex justify-between">
              <span className="text-[19px] font-bold text-[#4E5968]">
                총 결제금액
              </span>
              <span className="text-[20px] font-bold text-[#4E5968]">
                12,600원
              </span>
            </div>
          </section>
        </main>

        <footer className="absolute bottom-[129px] left-0 w-full px-[28px]">
          <p className="m-0 mb-[28px] text-center text-[19px] font-bold text-[#6B7684]">
            최소 주문금액 13,000원
          </p>
          <div className="flex justify-center">
          <Button type="button" size="xl" disabled>
            12,600원 결제하기
          </Button>
          </div>
        </footer>

    </div>
  );
};

export default Cart;