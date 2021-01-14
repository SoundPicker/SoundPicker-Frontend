import styled from "styled-components";
import BlankTop from "../../common/BlankTop";
import MainDivider from "../MainDivider";
import DesktopMotoText from "../../../assets/desktop/image_moto.png";
import TabletMotoText from "../../../assets/tablet/image_moto.png";
import MobileMotoText from "../../../assets/mobile/mobile_text_moto.png";
import SmallMobileMotoText from "../../../assets/small_mobile/text_moto.png";
import DesktopWaterMark from "../../../assets/desktop/image_watermark.png";
import TabletWaterMark from "../../../assets/tablet/image_watermark.png";
import MobileWaterMark from "../../../assets/mobile/mobile_image_watermark.png";
import SmallMobileWaterMark from "../../../assets/small_mobile/image_watermark.png";
import MainBlankTop from "../MainBlankTop";

const OuterWrap = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 2000ms 1;
  animation-timing-function: ease-in;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const MotoText = styled.div`
  width: 16.4rem;
  height: 1.6rem;
  background: url(${DesktopMotoText});
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 1024px) {
    width: 14.5rem;
    height: 1.3rem;
    background: url(${TabletMotoText});
  }
  @media (max-width: 768px) {
    width: 14.3rem;
    height: 1.3rem;
    background: url(${MobileMotoText});
  }
  @media (max-width: 568px) {
    width: 6rem;
    height: 0.5rem;
    background: url(${SmallMobileMotoText});
  }
`;

const WaterMark = styled.div`
  width: 37.5rem;
  height: 6.5rem;
  background: url(${DesktopWaterMark});
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 1024px) {
    width: 33.2rem;
    height: 5.8rem;
    background: url(${TabletWaterMark});
  }
  @media (max-width: 768px) {
    width: 32.3rem;
    height: 4.7rem;
    background: url(${MobileWaterMark});
  }
  @media (max-width: 568px) {
    width: 12.925rem;
    height: 2.2rem;
    background: url(${SmallMobileWaterMark});
  }
`;

const TextIntroduction = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

const Plan = styled.div`
  width: 8.7rem;
  height: 10.2rem;

  @media (max-width: 568px) {
    width: 4.871rem;
    height: 5.9rem;
  }
`;

const Design = styled.div`
  width: 11.7rem;
  height: 13.4rem;

  @media (max-width: 568px) {
    width: 6.55rem;
    height: 7.7rem;
  }
`;

const Web = styled.div`
  width: 7.2rem;
  height: 16.6rem;

  @media (max-width: 568px) {
    width: 4.031rem;
    height: 9.393rem;
  }
`;

const Server = styled.div`
  width: 8.7rem;
  height: 10.3rem;

  @media (max-width: 568px) {
    width: 4.871rem;
    height: 5.802rem;
  }
`;

const PartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.6rem;

  @media (max-width: 568px) {
    margin-bottom: 2.5rem;
  }
`;

const PartTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

const NameTitle = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: #ffffff;

  @media (max-width: 568px) {
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
`;

const Member = styled.div`
  display: flex;
  justify-content: space-between;
  width: 84.6rem;
  height: 25rem;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 59.1rem;
    height: 24.6rem;
  }
  @media (max-width: 768px) {
    width: 54.3rem;
  }
  @media (max-width: 568px) {
    width: 30.4rem;
    height: 17.4rem;
  }
`;

const Footer = () => {
  return (
    // Desktop은 중간 구분선 없이 BlankTop만 191px 있음 주의
    <OuterWrap>
      <MainBlankTop
        DesktopMargin={19.1}
        TabletMargin={6.2}
        MobileMargin={6.9}
        SmallMobileMargin={4.8}
      />
      <MainDivider DesktopLength={0} TabletLength={7.1} MobileLength={6.2} />
      <MainBlankTop
        DesktopMargin={0}
        TabletMargin={5.3}
        MobileMargin={6}
        SmallMobileMargin={3.9}
      />
      <Wrap>
        <MotoText />
      </Wrap>
      <MainBlankTop
        DesktopMargin={4.0}
        TabletMargin={3.6}
        MobileMargin={1.7}
        SmallMobileMargin={0.6}
      />
      <Wrap>
        <WaterMark />
      </Wrap>
      <MainBlankTop
        DesktopMargin={7.4}
        TabletMargin={5.3}
        MobileMargin={4.6}
        SmallMobileMargin={1.8}
      />
      <TextIntroduction>소리로 하는 모든 즐거움을 지향합니다.</TextIntroduction>

      <TextIntroduction>
        사운드피커를 통해 함께하는 사람들과의 즐거운 시간을 경험해보세요.
      </TextIntroduction>
      <br />
      <TextIntroduction>contact us. soundpickerrr@gmail.com</TextIntroduction>
      <MainBlankTop
        DesktopMargin={17.6}
        TabletMargin={10.6}
        MobileMargin={12.5}
        SmallMobileMargin={4.4}
      />
      <Member>
        <Plan>
          <PartWrap>
            <MainDivider
              DesktopLength={2}
              TabletLength={2}
              MobileLength={2}
              SmallMobileLength={1.12}
            />
            <PartTitle>기획</PartTitle>
            <MainDivider
              DesktopLength={2}
              TabletLength={2}
              MobileLength={2}
              SmallMobileLength={1.12}
            />
          </PartWrap>
          <NameTitle>권상호</NameTitle>
          <NameTitle>신지훈</NameTitle>
        </Plan>
        <Design>
          <PartWrap>
            <MainDivider
              DesktopLength={2}
              TabletLength={2}
              MobileLength={2}
              SmallMobileLength={1.12}
            />
            <PartTitle>디자인</PartTitle>
            <MainDivider
              DesktopLength={2}
              TabletLength={2}
              MobileLength={2}
              SmallMobileLength={1.12}
            />
          </PartWrap>
          <NameTitle>정아린</NameTitle>
          <NameTitle>최혜린</NameTitle>
          <NameTitle>김동우</NameTitle>
        </Design>
        <Web>
          <PartWrap>
            <MainDivider
              DesktopLength={2}
              TabletLength={2}
              MobileLength={2}
              SmallMobileLength={1.12}
            />
            <PartTitle>웹</PartTitle>
            <MainDivider
              DesktopLength={2}
              TabletLength={2}
              MobileLength={2}
              SmallMobileLength={1.12}
            />
          </PartWrap>
          <NameTitle>정재현</NameTitle>
          <NameTitle>이재훈</NameTitle>
          <NameTitle>정아연</NameTitle>
          <NameTitle>김승미</NameTitle>
        </Web>
        <Server>
          <PartWrap>
            <MainDivider
              DesktopLength={2}
              TabletLength={2}
              MobileLength={2}
              SmallMobileLength={1.12}
            />
            <PartTitle>서버</PartTitle>
            <MainDivider
              DesktopLength={2}
              TabletLength={2}
              MobileLength={2}
              SmallMobileLength={1.12}
            />
          </PartWrap>
          <NameTitle>강준우</NameTitle>
          <NameTitle>홍혜림</NameTitle>
        </Server>
      </Member>
    </OuterWrap>
  );
};

export default Footer;
