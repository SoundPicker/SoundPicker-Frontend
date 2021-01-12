import styled from "styled-components";
import MenuIcon from "../common/MenuIcon";

const Wrap = styled.div`
  width: 100vw;
  height: 7.3rem;
  position: relative;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 500ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 1089px) {
    height: 6.8rem;
  }
  @media (max-width: 503px) {
    height: 6rem;
  }
`;

const Header = () => {
  return (
    <Wrap>
      <MenuIcon />
    </Wrap>
  );
};

export default Header;
