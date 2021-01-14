import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../_actions/user_action";
import { useDispatch } from "react-redux";
import TextComponent from '../../../components/common/TextComponent';
import BlankTop from '../../../components/common/BlankTop';
import QuizHeader from '../../common/QuizHeader';
import UnderLineComponent from './UnderLineComponent';
import Bg1 from '../../../assets/images/login_background1.jpg';
import Bg2 from '../../../assets/images/login_background2.png';
import Bg3 from '../../../assets/images/login_background3.png';
import logo1 from '../../../assets/images/image_watermark.png';
import Text from './Text';
import ColorButton from './ColorButton';

import {
  Form, Button,
} from 'antd';

const Fix =styled.div`
min-height:100vh;
background-color:  #081923;
`;

const Background = styled.div`
    width:100%;
    height:100%;
    background-repeat: no-repeat;
    background-position: center top;
    background-color:  #081923;
    background-image: url(${Bg1});
    @media  (min-width:1024px) {
      min-height:1080px;
    }
    @media only screen and (max-width: 1024px) {
      background-image: url(${Bg2});
      min-height:1336px;

    }

    @media (max-width: 768px) {
      background-image: url(${Bg3});
      min-height:1024px;
    }
`;
const Wrapper=styled.div`
  width:97.1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
        width:71.5rem;
  }
    @media only screen and (max-width: 768px) {
        width:54.8rem;
  }
    @media only screen and (max-width: 548px) {
        width:100%;
        padding:0 0.5rem;
    }

  ` 

const MyIcon = styled.img`
  @media (min-width: 768px) and (max-width: 1024px) {
    //between
    width: 180px;
  }
  @media (min-width: 1024px) {
    //desktop
    width: 221px;
  }
  @media (max-width: 768px) {
    //iphone
    width: 300px;
  }
  @media (max-width: 767px) { //iphone
    width:150px;
  }
`;

MyIcon.defaultProps = {
  src: logo1,
};

const Input = styled.input`
  background-color: rgba(12, 26, 34, 0);
  border-radius: 0px;
  border-color: rgba(12, 26, 34, 0);
  width: 370px;
  color: white;
  outline: none;
  @media (max-width: 768px) {
    //iphone
    width: 250px;
  }
  @media (max-width: 767px) { //iphone
    width:220px;
  }
 
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    //iphone
    margin-left: 10%;
  }

  
`;
const Center=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (
<Fix>
<Background> <QuizHeader/>
  <Wrapper>
  <div>
      <BlankTop DesktopMargin='38' TabletMargin='48.5' MobileMargin='26.5' />

      <MyIcon></MyIcon>
    </div>  
  <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='2' />
  <TextComponent title="회원가입"  DesktopLength='15' TabletLength='15' MobileLength='13'/> 
  <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='1' />
    <Formik
      initialValues={{
        email: '',
        nickname: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        nickname: Yup.string()
          .required('닉네임을 입력해야 합니다.'),
        email: Yup.string()
          .email('이메일형식이 올바르지 않습니다.')
          .required('이메일을 입력해야 합니다.'),
        password: Yup.string()
          .min(10, '패스워드는 적어도 10글자 이상이여야 합니다.')
          .max(20,'패스워드는  20글자 이하여야 합니다.')
          .matches(
            /^(?=.*[A-z])(?=.*[0-9])/
        ,'숫자와 영어를 혼합하여야 합니다.')
          .required('패스워드를 입력해야 합니다.'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], '패스워드가 일치하지 않습니다.')
          .required('패스워드를 입력해야 합니다.')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
            nickname: values.nickname,
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,

        } = props;
        return (

            <form style={{ minWidth: '150px' }}  onSubmit={handleSubmit} > 
              <Form.Item  requiredMark="optional"  hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Content>
              <Text title="이메일"  DesktopLength='15' TabletLength='15' MobileLength='13'/> 
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                 
                  </Content>
                  <UnderLineComponent
                    DesktopLength="45"
                    BetweenLength="45"
                    TabletLength="45"
                    MobileLength="25"
                  />
                </Form.Item>

                <Form.Item requiredMark="optional" hasFeedback>
                  <Content>
                    <Text
                      title="패스워드"
                      DesktopLength="15"
                      TabletLength="15"
                      MobileLength="13"
                    />
                    <Input
                      id="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                   
                  </Content>
                  <UnderLineComponent
                    DesktopLength="45"
                    BetweenLength="45"
                    TabletLength="45"
                    MobileLength="25"
                  />
                </Form.Item>

                <Form.Item
                  requiredMark="optional"
                  hasFeedback
                  validateStatus={
                    errors.confirmPassword && touched.confirmPassword
                      ? "error"
                      : "success"
                  }
                >
                  <Content>
                    <Text
                      title="패스워드확인"
                      DesktopLength="15"
                      TabletLength="15"
                      MobileLength="13"
                    />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        "form-control" +
                        (errors.confirmPassword && touched.confirmPassword
                          ? " is-invalid"
                          : "")
                      }
                    />
                  </Content>
                  <UnderLineComponent
                    DesktopLength="45"
                    BetweenLength="45"
                    TabletLength="45"
                    MobileLength="25"
                  />
                </Form.Item>

                <Form.Item
                  requiredMark="optional"
                  validateStatus={
                    errors.nickname && touched.nickname ? "error" : "success"
                  }
                >
                  <Content>
                    <Text
                      title="닉네임"
                      DesktopLength="15"
                      TabletLength="15"
                      MobileLength="13"
                    />
                    <Input
                      id="nickname"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.name && touched.name
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                  </Content>
                  <UnderLineComponent
                    DesktopLength="45"
                    BetweenLength="45"
                    TabletLength="45"
                    MobileLength="25"
                  />
                </Form.Item>

                <BlankTop DesktopMargin="3" TabletMargin="1" MobileMargin="1" />
                <Center>{errors.password && touched.password && (
                  <div className="input-feedback" style={{color:'white'}}>{errors.password}</div>
                )}</Center>
                <BlankTop DesktopMargin="2" TabletMargin="1" MobileMargin="1" />
                <Center>
                <ColorButton
                  font="12"
                  background="#60FFDA"
                  color="#000000"
                  border="#60FFDA"
                >
                  {" "}
                  
                  <Button
                    size="large"
                    ghost="true"
                    type="text"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                  
                    
                    &nbsp; 
                    &nbsp;&nbsp; 회원가입 &nbsp; &nbsp; 
                   
                  </Button>
                </ColorButton></Center>
               
              </form>
            );
          }}
        </Formik>
      </Wrapper>
    </Background></Fix>
  );
}

export default RegisterPage;
