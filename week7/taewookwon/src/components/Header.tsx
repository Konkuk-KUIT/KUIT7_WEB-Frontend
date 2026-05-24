import { useNavigate } from 'react-router-dom';
import arrowIcon from '../assets/arrow.svg'; // ← 실제 파일명에 맞게

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute left-0 top-0 w-[390px] h-[88px] bg-white">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-[10px] top-[54px] w-[24px] h-[24px] flex items-center justify-center"
        aria-label="뒤로가기"
      >
        <img src={arrowIcon} alt="뒤로가기" className="w-[24px] h-[24px]" />
      </button>
    </div>
  );
};

export default Header;
