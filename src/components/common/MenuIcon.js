import styled from "styled-components";
import Menu from "../../assets/menu.png";

const Icon = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  background-image: url(${Menu});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  @media (max-width: 503px) {
    top: 1rem;
    left: 1rem;
  }
`;

const MenuIcon = () => {
  return <Icon />;
};

export default MenuIcon;
