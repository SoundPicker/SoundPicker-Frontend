import styled from "styled-components";
import Plus from "../../../assets/mobile/button_add.png";
import BlankTop from "../../common/BlankTop";
import PlayImg from "../../../assets/play.png";

const PlusBtn = styled.button`
  display: block;
  width: 27.6rem;
  height: 5.5rem;
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  border-color: #60ffda;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const Card = styled.button`
  display: block;
  width: 27.6rem;
  padding: 3.4rem 2.7rem 2.9rem 2.4rem;
  border-radius: 8px;
  border-color: #60ffda;
  color: #ffffff;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const CardTitle = styled.div`
  width: 22.5rem;
  text-align: left;
  font-size: 2.4rem;
  font-weight: 700;
`;

const CardContent = styled.div`
  width: 22.2rem;
  text-align: left;
  font-size: 1.2rem;
`;

const TestNumber = styled.div`
  font-size: 1.2rem;
`;

const Play = styled.span`
  font-size: 1.2rem;
`;

const PlayBtn = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-image: url(${PlayImg});
  background-repeat: no-repeat;
  background-position: center center;
`;

const PlayBtnBox = styled.div`
  display: flex;
  width: 6.6rem;
  align-items: center;
`;

const PlayBox = () => {
  return (
    <PlayBtnBox>
      <Play>플레이</Play>
      <PlayBtn />
    </PlayBtnBox>
  );
};

const PlayFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardList = () => {
  return (
    <>
      <PlusBtn />
      <Card>
        <CardTitle>
          오마이걸 찐팬 모여라 오마이걸 찐팬 오마이걸 찐팬 모여라. 미미 유튜브
          보셨나요? 영상을 보고 나면 아이스크림을 반드시 먹게 됩니다. 지금도
          아이스크림이 먹고 싶네요.
        </CardTitle>
        <BlankTop DesktopMargin={3} TabletMargin={2.7} MobileMargin={0} />
        <CardContent>
          내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
          들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.
        </CardContent>
        <BlankTop DesktopMargin={3.8} TabletMargin={3.3} MobileMargin={4.8} />
        <PlayFooter>
          <TestNumber>10문제</TestNumber>
          <PlayBox />
        </PlayFooter>
      </Card>
    </>
  );
};

export default CardList;
