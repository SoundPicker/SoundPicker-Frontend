import styled from "styled-components";
import LogoImage from "../../assets/image_watermark.png";

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

const Logo = styled.img.attrs({
  src: LogoImage,
})``;

const LogoTitle = () => {
  return (
    <Wrap>
      <Logo />
    </Wrap>
  );
};

export default LogoTitle;
