import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>‹</BackButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 56px;
  padding-left: 24px;

  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  border: none;
  background: none;
  padding: 0;

  color: #333d4b;
  font-size: 34px;
  font-weight: 300;
  line-height: 1;

  cursor: pointer;
`;
