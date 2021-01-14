import styled from "styled-components";
import BgDesktop from "../../assets/desktop/test_end_all_background.jpg";
import BgTablet from "../../assets/tablet/test_end_all_background.jpg";
import BgMobile from "../../assets/mobile/test_end_all_background.jpg";
import BgSmallMobile from "../../assets/small_mobile/test_end_all_background.jpg";

const Warp = styled.div`
  width: 100vw;
  height: 108rem;
  background-image: url(${BgDesktop});
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #081923;
  @media (max-width: 1089px) {
    height: 136.6rem;
    background-image: url(${BgTablet});
  }
  @media (max-width: 768px) {
    height: 102.4rem;
    background-image: url(${BgMobile});
  }
  @media (max-width: 503px) {
    height: 150rem;
    background-image: url(${BgSmallMobile});
  }
`;
const Background = ({ children }) => {
  return <Warp>{children}</Warp>;
};
export default Background;
