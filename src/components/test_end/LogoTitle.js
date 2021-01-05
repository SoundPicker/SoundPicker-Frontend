import styled from "styled-components";
import LogoImage from "../../assets/image_watermark.png";

const Wrap = styled.div`
  display: flex;
  height: 3.3rem;
  justify-content: center;
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
