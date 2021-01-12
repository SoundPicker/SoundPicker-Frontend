import styled from "styled-components";
import BgDesktop from "../../assets/desktop/main_all_background.jpg";
import BgTablet from "../../assets/tablet/main_all_background.png";
import BgMobile from "../../assets/mobile/main_all_background.png";

const Warp = styled.div`
  width: 100vw;
  height: 10000vh;
  background-image: url(${BgDesktop});
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #071923;
  @media (max-width: 1024px) {
    background-image: url(${BgTablet});
  }
  @media (max-width: 768px) {
    background-image: url(${BgMobile});
  }
`;
const Background = ({ children }) => {
  return <Warp>{children}</Warp>;
};
export default Background;
