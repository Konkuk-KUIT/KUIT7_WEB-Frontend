import { useNavigate } from "react-router-dom";
import backImg from "../../assets/back.svg";

interface TopBarProps {
  showCancel?: boolean;
  onCancel?: () => void;
}

const TopBar = ({ showCancel = false, onCancel }: TopBarProps) => {
  const navigate = useNavigate();
  console.log(backImg);
  return (
    <div className="flex h-[64px] w-full items-center justify-between bg-white px-6">
      <button type="button" onClick={() => navigate(-1)} className="flex h-8 w-8 items-center">
        <img src={backImg} alt="뒤로가기" className="h-10 w-10" />
      </button>
      {showCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="text-[17px] font-bold text-[#333d4b]"
        >
          주문취소
        </button>
      )}
    </div>
  );
};

export default TopBar;
