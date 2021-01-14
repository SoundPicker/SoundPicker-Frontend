import styled from "styled-components";
import LogoImage from "../../assets/image_watermark.png";
import LogoImage768 from "../../assets/tablet/tablet_image_watermark.png";
import LogoImage503 from "../../assets/small_mobile/small_mobile_image_watermark.png";

const Wrap = styled.div`
  display: flex;
  height: 3.3rem;
  justify-content: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 700ms 1;
  animation-timing-function: ease-in;
`;

const Logo = styled.div`
  width: 19rem;
  height: 3.6rem;
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 768px) {
    width: 22.2rem;
    height: 3.8rem;
    background-image: url(${LogoImage768});
  }
  @media (max-width: 503px) {
    width: 10.5rem;
    height: 1.8rem;
    background-image: url(${LogoImage503});
  }
`;

const LogoTitle = () => {
  return (
    <Wrap>
      <Logo />
    </Wrap>
  );
};

export default LogoTitle;
