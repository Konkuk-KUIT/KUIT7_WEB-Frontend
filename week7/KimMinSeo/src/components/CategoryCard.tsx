import styled from "styled-components";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  image: string;
  name: string;
  isLink?: boolean;
}

const CategoryCard = ({ image, name, isLink = false }: CategoryCardProps) => {
  const content = (
    <Card>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Card>
  );

  if (isLink) {
    return <StyledLink to="/store">{content}</StyledLink>;
  }

  return content;
};

export default CategoryCard;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Card = styled.div`
  width: 97px;
  height: 66px;
  border-radius: 8px;
  background-color: #fafafb;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const Image = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const Name = styled.div`
  color: #333d4b;
  font-size: 13px;
  font-weight: 600;
`;
