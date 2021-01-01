import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 6.4rem;
  padding: 1.2rem 1.8rem;
  margin-bottom: 8.8em;
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.2rem;
  height: 4rem
  margin-right: 0.9rem;
`;

const Login = styled.strong`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
`;

const SignUpDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.2rem;
  height: 4rem;
`;

const SignUp = styled.strong`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
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
