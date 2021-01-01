import styled from "styled-components";
import BlankTop from "../../common/BlankTop";
import Divider from "../../common/Divider";
import MobileMotoText from "../../../assets/mobile/mobile_text_moto.png";
import MobileWaterMark from "../../../assets/mobile/mobile_image_watermark.png";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const MotoText = styled.img.attrs({
  src: MobileMotoText,
})``;

const WaterMark = styled.img.attrs({
  src: MobileWaterMark,
})``;

const TextIntroduction = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  color: #ffffff;
`;

const Plan = styled.div`
  width: 8.7rem;
  height: 10.2rem;
`;

const Design = styled.div`
  width: 11.7rem;
  height: 13.4rem;
`;

const Web = styled.div`
  width: 7.2rem;
  height: 16.6rem;
`;

const Server = styled.div`
  width: 8.7rem;
  height: 10.3rem;
`;

const PartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.6rem;
`;

const PartTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
`;

const NameTitle = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: #ffffff;
`;

const Member = styled.div`
  display: flex;
  justify-content: space-between;
  width: 54.3rem;
  height: 16.6rem;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    // Desktop은 중간 구분선 없이 BlankTop만 191px 있음 주의
    <>
      <BlankTop DesktopMargin={19.1} TabletMargin={6.2} MobileMargin={5.9} />
      <Divider DesktopLength={0} TabletLength={7.1} MobileLength={6.2} />
      <BlankTop DesktopMargin={0} TabletMargin={5.3} MobileMargin={6} />
      <Wrap>
        <MotoText />
      </Wrap>
      <BlankTop DesktopMargin={4.0} TabletMargin={3.6} MobileMargin={1.7} />
      <Wrap>
        <WaterMark />
      </Wrap>
      <BlankTop DesktopMargin={7.4} TabletMargin={5.3} MobileMargin={4.6} />
      <TextIntroduction>소리로 하는 모든 즐거움을 지향합니다.</TextIntroduction>
      <br />
      <TextIntroduction>
        사운드피커를 통해 함께하는 사람들과의 즐거운 시간을 경험해보세요.
      </TextIntroduction>
      <br />
      <br />
      <br />
      <TextIntroduction>contact us. soundpickerrr@gmail.com</TextIntroduction>
      <BlankTop DesktopMargin={17.6} TabletMargin={10.6} MobileMargin={12.5} />
      <Member>
        <Plan>
          <PartWrap>
            <Divider DesktopLength={2} TabletLength={2} MobileLength={2} />
            <PartTitle>기획</PartTitle>
            <Divider DesktopLength={2} TabletLength={2} MobileLength={2} />
          </PartWrap>
          <NameTitle>권상호</NameTitle>
          <NameTitle>신지훈</NameTitle>
        </Plan>
        <Design>
          <PartWrap>
            <Divider DesktopLength={2} TabletLength={2} MobileLength={2} />
            <PartTitle>디자인</PartTitle>
            <Divider DesktopLength={2} TabletLength={2} MobileLength={2} />
          </PartWrap>
          <NameTitle>정아린</NameTitle>
          <NameTitle>최혜린</NameTitle>
          <NameTitle>김동우</NameTitle>
        </Design>
        <Web>
          <PartWrap>
            <Divider DesktopLength={2} TabletLength={2} MobileLength={2} />
            <PartTitle>웹</PartTitle>
            <Divider DesktopLength={2} TabletLength={2} MobileLength={2} />
          </PartWrap>
          <NameTitle>정재현</NameTitle>
          <NameTitle>이재훈</NameTitle>
          <NameTitle>정아연</NameTitle>
          <NameTitle>김승미</NameTitle>
        </Web>
        <Server>
          <PartWrap>
            <Divider DesktopLength={2} TabletLength={2} MobileLength={2} />
            <PartTitle>서버</PartTitle>
            <Divider DesktopLength={2} TabletLength={2} MobileLength={2} />
          </PartWrap>
          <NameTitle>강준우</NameTitle>
          <NameTitle>홍혜림</NameTitle>
        </Server>
      </Member>
    </>
  );
};

export default Footer;
