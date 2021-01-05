import styled from "styled-components";
import MenuIcon from "../common/MenuIcon";

const Wrap = styled.div`
  width: 100vw;
  height: 7.3rem;
  position: relative;

  @media (max-width: 1089px) {
    height: 6.8rem;
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
