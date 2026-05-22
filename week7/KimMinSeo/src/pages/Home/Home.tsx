import styled from "styled-components";

import CategoryCard from "../../components/CategoryCard";
import OrderBar from "../../components/OrderBar/OrderBar";

import pizzaImg from "../../assets/pizza.png";
import saladImg from "../../assets/salad.png";
import burgerImg from "../../assets/burger.png";
import koreanImg from "../../assets/korean.png";
import snackImg from "../../assets/snack.png";
import chickenImg from "../../assets/chicken.png";
import sushiImg from "../../assets/sushi.png";
import sandwichImg from "../../assets/sandwich.png";
import pastaImg from "../../assets/pasta.png";
import dessertImg from "../../assets/dessert.png";
import coffeeImg from "../../assets/coffee.png";
import moreImg from "../../assets/more.svg";

const categories = [
  { image: pizzaImg, name: "피자" },
  { image: saladImg, name: "샐러드", isLink: true },
  { image: burgerImg, name: "햄버거" },

  { image: koreanImg, name: "한식" },
  { image: snackImg, name: "분식" },
  { image: chickenImg, name: "치킨" },

  { image: sushiImg, name: "초밥" },
  { image: sandwichImg, name: "샌드위치" },
  { image: pastaImg, name: "파스타" },

  { image: dessertImg, name: "디저트" },
  { image: coffeeImg, name: "커피" },
  { image: moreImg, name: "더보기" },
];

const Home = () => {
  return (
    <Page>
      <Container>
        <Content>
          <Title>오늘은 무엇을 먹을까요?</Title>

          <Address>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</Address>

          <CategoryGrid>
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                image={category.image}
                name={category.name}
                isLink={category.isLink}
              />
            ))}
          </CategoryGrid>
        </Content>

        <OrderBar />
      </Container>
    </Page>
  );
};

export default Home;

const Page = styled.div`
  min-height: 100vh;
  background-color: #f2f4f6;

  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;

  width: 390px;
  height: 844px;

  background-color: #ffffff;
  overflow: hidden;
`;

const Content = styled.main`
  padding-top: 63px;
`;

const Title = styled.h1`
  margin: 0 0 13px 24px;

  color: #191f28;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  text-align: left;
`;

const Address = styled.p`
  margin: 0 0 60px 24px;

  color: #333d4b;
  font-size: 17px;
  font-weight: 500;

  text-align: left;
`;

const CategoryGrid = styled.div`
  margin-left: 24px;

  width: 342px;
  height: 326px;

  display: grid;
  grid-template-columns: repeat(3, 108px);
  grid-auto-rows: 66px;

  column-gap: 14px;
  row-gap: 10px;
`;
