import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { logoutUser } from "../../../_actions/user_action";
const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 9.4rem;
  padding: 2.7rem 5.6rem;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 500ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 768px) {
    height: 6.4rem;
    padding: 1.2rem 1.8rem;
  }

  @media (max-width: 568px) {
    height: 3.4rem;
    padding: 1.1rem 1.4rem;
  }
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.2rem;
  height: 4rem;
  margin-right: 1.1rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-right: 0.9rem;
  }
  @media (max-width: 568px) {
    width: 3.7rem;
    height: 1.2rem;
    margin-right: 0.8rem;
  }
`;

const Login = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

const SignUpDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.2rem;
  height: 4rem;
  cursor: pointer;

  @media (max-width: 568px) {
    width: 4.3rem;
    height: 1.2rem;
  }
`;

const SignUp = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

const SignOut = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

function Header() {
  const [myState, setMyState] = useState({ status: "idle", member: null });
  const dispatch = useDispatch();
  const LogOut = async (evt) => {
    window.localStorage.setItem("isAuth", "false");
    window.localStorage.setItem("jwt", "");
    dispatch(logoutUser());
    setMyState({ status: "pending" });
    setTimeout(() => setMyState({ status: "resolved", member: null }), 600);
  };

  switch (window.localStorage.getItem("isAuth")) {
    case "false":
      return (
        <HeaderDiv>
          <LoginDiv>
            <Link to="/login">
              <Login>로그인</Login>
            </Link>
          </LoginDiv>

          <SignUpDiv>
            <Link to="/register">
              <SignUp>회원가입</SignUp>
            </Link>
          </SignUpDiv>
        </HeaderDiv>
      );
    case "true":
      return (
        <HeaderDiv>
          <SignUpDiv>
            <Link to="/">
              <SignOut onClick={LogOut}>로그아웃</SignOut>
            </Link>
          </SignUpDiv>
        </HeaderDiv>
      );
  }
}

export default Header;
