import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 9.4rem;
  padding: 2.7rem 5.6rem;

  @media (max-width: 768px) {
    height: 6.4rem;
    padding: 1.2rem 1.8rem;
  }
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.2rem;
  height: 4rem
  margin-right: 1.1rem;
  cursor: pointer;
  @media(max-width: 768px){
    margin-right: 0.9rem;
  }
`;

const Login = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const SignUpDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.2rem;
  height: 4rem;
  cursor: pointer;
`;

const SignUp = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Header = () => {
  return (
    <HeaderDiv>
      <LoginDiv>
        <Login>로그인</Login>
      </LoginDiv>
      <SignUpDiv>
        <SignUp>회원가입</SignUp>
      </SignUpDiv>
    </HeaderDiv>
  );
};

export default Header;
