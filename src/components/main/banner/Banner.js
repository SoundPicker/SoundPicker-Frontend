import styled from "styled-components";
import BannerImageDesktop from "../../../assets/desktop/main_title.png";
import BannerImageTablet from "../../../assets/tablet/main_title.png";
import BannerImageMobile from "../../../assets/mobile/main_title.png";

const Wrap = styled.div`
  display: flex;
  justify-content: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1000ms 1;
  animation-timing-function: ease-in;
`;

const WrapImage = styled.div`
  width: 40.5rem;
  height: 19.3rem;
  background: url(${BannerImageDesktop});
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 1024px) {
    width: 32.3rem;
    height: 15.3rem;
    background: url(${BannerImageTablet});
  }
  @media (max-width: 768px) {
    width: 32.3rem;
    height: 13.4rem;
    background: url(${BannerImageMobile});
  }
`;

const Banner = () => {
  return (
    <>
      <Wrap>
        <WrapImage />
      </Wrap>
    </>
  );
};

export default Banner;
