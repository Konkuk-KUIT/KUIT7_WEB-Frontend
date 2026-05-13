import Top from "./Top";
import arrow from "../../assets/arrow.svg";

const BackSpaceTop = () => {
  return (
    <div>
      <Top />
      <div className="py-[10px] pl-[10px]">
        <img src={arrow} alt="뒤로가기" className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default BackSpaceTop;
