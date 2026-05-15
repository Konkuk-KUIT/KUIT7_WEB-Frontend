import alert from "../../assets/alert.svg";
import plus from "../../assets/plus.svg"

const SelectedMenu = () => {
  return (
    <div>
      <div className="flex justify-between pt-[26px] pl-[24px] pr-[25px]">
        <p className="text-[#6B7684] font-['Pretendard'] text-[17px] font-[700] leading-[normal]">
          샐러리 한남점
        </p>
        <div className="flex gap-[3px] items-center">
          <p className="text-[#F04452] font-['Pretendard'] text-[15px] font-[500] leading-[normal]">
            최소금액 미달
          </p>
          <img src={alert} alt="경고" className="w-[13px] h-[13px]" />
        </div>
      </div>

      <div>
        <div className="flex pt-[19px] pl-[24px]">
          <div className="w-[54px] h-[54px] rounded-[8px] bg-[#ECECEC]"></div>
          <div className="flex flex-col gap-[5px] pl-[16px]">
            <p className="text-[#333D4B] font-['Pretendard'] text-[17px] font-[700] leading-[normal]">
              토마토 샐러드
            </p>
            <div className="w-[210px]">
              <p className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
                추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
              </p>
            </div>
            <p className="text-[#6B7684] font-['Pretendard'] text-[13px] font-[500] leading-[normal]">
              10,600원
            </p>
          </div>
          <div className="pt-[40px] pl-[16px]">
            <p className="text-[#6B7684] font-['Pretendard'] text-[15px] font-[500] leading-[normal]">
              1개
            </p>
          </div>
          
        </div>
      </div>
      <div className="mt-[16px] h-[1px] bg-[#F2F4F6]"></div>
      <div className="flex pt-[19px] pl-[160px] items-center gap-[2px]">
        <p className="text-[#3182F6] font-['Pretendard'] text-[17px] font-[600] leading-[normal]">더 담기</p>
        <img src={plus} alt="더 담기" className="w-[16px] h-[16px]" />
      </div>
      <div className="mt-[16px] h-[16px] bg-[#F2F4F6]"></div>
    </div>
  );
};

export default SelectedMenu;
