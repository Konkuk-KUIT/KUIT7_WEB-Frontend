import Plus from '../assets/plus.svg';

const PlusButton = () => {
  return (
    <button className="plusButton">
      <img src={Plus} alt="추가 버튼" />
    </button>
  );
};

export default PlusButton;