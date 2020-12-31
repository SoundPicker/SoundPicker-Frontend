import styled from "styled-components";
import BannerImage from "../../../assets/mobile/main_title.png";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapImage = styled.img.attrs({
  src: BannerImage,
})``;

const LogoImage = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  margin-bottom: 2.5rem;
  border-radius: 50%;
  background-color: #ffffff;
`;

const SubTitle = styled.div`
  margin-bottom: 1.7rem;
  font-weight: 700;
  color: #ffffff;
`;

const Title = styled.h1`
  margin-bottom: 7.6rem;
  font-size: 4.8rem;
  font-weight: 700;
  color: #ffffff;
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
