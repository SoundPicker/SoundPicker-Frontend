import styled from "styled-components";
// image 정중앙으로 만들어서 다시 export 해주시면 바꿔 끼우기
import BgMobile from "../../assets/mobile/main_all_background.png";
// BgTablet, BgDesktop import 해오기

const Warp = styled.div`
  width: 100vw;
  height: 1000vh;
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #071923;
`;
const Background = ({ children }) => {
  return <Warp>{children}</Warp>;
};
export default Background;
