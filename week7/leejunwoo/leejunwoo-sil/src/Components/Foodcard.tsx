import pizza from "../assets/pizza.svg";
import styled from "styled-components";

const Foodcard = () => {
  const foodName = "피자";

  // return (
  //   <div className="w-[108px] h-[70px] rounded-[8px] bg-[blue]">
  //     <img src={pizza} alt="음식 사진" />
  //     <span className="font-[14[px]">{foodName}</span>
  //     </div>
  // )

  return (
    <StyledFoodCard>
      <img src={pizza} alt="음식 사진" />
      <span className="font-[14[px]">{foodName}</span>
    </StyledFoodCard>
  )
}

const StyledFoodCard = styled.div`
  display : flex;
  width: 108px;
  height: 70px;
  background-color: blue;
  border-radius: 8px;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
`

export default Foodcard