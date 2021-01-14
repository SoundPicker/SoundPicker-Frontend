import styled from "styled-components";
import BannerImageDesktop from "../../../assets/desktop/main_title.svg";
import BannerImageTablet from "../../../assets/tablet/main_title.svg";
import BannerImageMobile from "../../../assets/mobile/main_title.svg";
import BannerImageSmallMobile from "../../../assets/small_mobile/main_title.svg";

const Wrap = styled.div`
  display: flex;
  justify-content: center;

  /*
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
  */
`;

const WrapImage = styled.div`
  width: 41rem;
  height: 10.3rem;
  background: url(${BannerImageDesktop});
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 1024px) {
    width: 32.6rem;
    height: 13.5rem;
    background: url(${BannerImageTablet});
    background-repeat: no-repeat;
  }
  @media (max-width: 768px) {
    width: 32.5rem;
    height: 7.9rem;
    background: url(${BannerImageMobile});
    background-repeat: no-repeat;
  }
  @media (max-width: 568px) {
    width: 13.1rem;
    height: 3.5rem;
    background: url(${BannerImageSmallMobile});
    background-repeat: no-repeat;
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
