import styled from "styled-components";
import MenuIcon from "../common/MenuIcon";

const Wrap = styled.div`
  width: 100vw;
  height: 7.3rem;
  position: relative;
`;

const Header = () => {
  return (
    <Wrap>
      <MenuIcon />
    </Wrap>
  );
};

export default Header;
