import React, { useState } from "react";
import { withRouter,Link } from "react-router-dom";
import { loginUser } from "../../../_actions/user_action";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form,  Button,  } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import { useDispatch } from "react-redux";
import styled from "styled-components"
import TextComponent from '../../../components/common/TextComponent';
import BlankTop from '../../../components/common/BlankTop';
import QuizHeader from '../../common/QuizHeader';
import UnderLineComponent from './UnderLineComponent';
import Bg1 from '../../../assets/images/login_background1.jpg';
import Bg2 from '../../../assets/images/login_background2.jpg';
import Bg3 from '../../../assets/images/login_background3.jpg';
import logo1 from '../../../assets/images/image_watermark.png';
import Text from './Text';
import ColorButton from './ColorButton';

const Background = styled.div`
    width:100vw;
    height:1000vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-color:  rgba( 12, 26, 34, 1);
    background-size:contain;
    background-image: url(${Bg1});
    @media only screen and (max-width: 1024px) {
      background-image: url(${Bg2});
      }
      @media only screen and (max-width: 769px) {
        background-image: url(${Bg3});
      }
`;
const Wrapper=styled.div`
 position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 768px) and (max-width:1024px) { //between
    margin-top:50%;
      width:100%auto;
    }

    @media (min-width: 1025px) { //desktop 
      margin-top:20%;
      width:100%auto;
    }
    @media (max-width: 768px) { //iphone
      width:100%auto;
        margin-top:35%;
  }` 


const MyIcon = styled.img`
  @media (min-width: 768px) and (max-width:1024px) { //between
    width:180px;
    }

    @media (min-width: 1025px) { //desktop
    width:221px;
    }
    @media (max-width: 768px) { //iphone
      width:300px;
  }
`;

MyIcon.defaultProps = {
  src: logo1,
};

const Input =styled.input`
background-color:  rgba( 12, 26, 34, 0);
border-radius:0px;
border-color:rgba( 12, 26, 34, 0);
width: 400px;
color:white;
outline:none;
@media (min-width: 768px) and (max-width:1024px) { //between
    width:300px;
    }
@media (max-width: 767px) { //iphone
      width:200px;
  }
`

const Content=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) { //iphone
    margin-left:15%;
  }
`


function LoginPage(props) {
  
  const dispatch = useDispatch();

  const [formErrorMessage, setFormErrorMessage] = useState('')

  const goToMain = () => {
    props.history.push('/register');}

  return (
    <Background><QuizHeader/><Wrapper>
       <MyIcon></MyIcon>
  <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='3' />
  <TextComponent title="로그인"  DesktopLength='15' TabletLength='15' MobileLength='15'/> 
  <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='5' />
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.success) {
                window.localStorage.setItem('isAuth','true');
                window.localStorage.setItem('jwt',response.payload.data.accessToken);
                props.history.push("/");
              } else {
                setFormErrorMessage('Check out your Account or Password again');
                window.localStorage.setItem('isAuth','false');
              }
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          

            <form onSubmit={handleSubmit} style={{ minWidth: '100px' }}>

              <Form.Item required>
              <Content>
              <Text title="아이디&nbsp; &nbsp;"  DesktopLength='15' TabletLength='13' MobileLength='15'/> 
                <Input
                  id="email"
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                
                 </Content>
                <UnderLineComponent DesktopLength='45' BetweenLength='45' TabletLength='45' MobileLength='30' />
              </Form.Item>

              <Form.Item required>
              <Content>
              <Text title="패스워드&nbsp; &nbsp;"  DesktopLength='15' TabletLength='15' MobileLength='15'/> 
                <Input
                  id="password"
                  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                </Content>
                <UnderLineComponent DesktopLength='45' BetweenLength='45' TabletLength='45' MobileLength='30' />
              </Form.Item>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}

              <Form.Item>
                <div>
                <ColorButton font='12' border="#60FFDA" color="#ffffff"  ><Button onClick={goToMain} ghost='true' type='text'  style={{ minWidth: '100%' }} >
                <p style={{ color: '#ffffff'}}>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;회원가입&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p>
                </Button></ColorButton>

                <ColorButton font='12' background="#60FFDA" color="#000000" border="#60FFDA"  ><Button ghost='true' type='text' htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 로그인&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                </Button></ColorButton>
                </div>
              </Form.Item>
            </form>
        );
      }}
    </Formik> </Wrapper></Background>
  );
};

export default withRouter(LoginPage);