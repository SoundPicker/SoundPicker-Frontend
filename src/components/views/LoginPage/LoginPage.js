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
import Bg2 from '../../../assets/images/login_background2.png';
import Bg3 from '../../../assets/images/login_background3.png';
import logo1 from '../../../assets/images/image_watermark.png';
import Text from './Text';
import ColorButton from './ColorButton';

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
  @media (min-width: 768px) and (max-width:1024px) { //between
    width:180px;
    }

    @media (min-width: 1025px) { //desktop
    width:221px;
    }
    @media (max-width: 768px) { //iphone
      width:300px;
  }
  @media (max-width: 767px) { //iphone
    width:150px;
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
margin-bottom:5px;
@media (min-width: 768px) and (max-width:1024px) { //between
    width:300px;
    }
@media (max-width: 768px) { //iphone
      width:200px;
  }
  @media (max-width: 767px) { //iphone
    width:290px;
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
const Center=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`


function LoginPage(props) {
  
  const dispatch = useDispatch();

  const [formErrorMessage, setFormErrorMessage] = useState('')

  const goToMain = () => {
    props.history.push('/register');}

  return (
    <Fix>
    <Background><QuizHeader/>
    <Wrapper>
      <div>
      <BlankTop DesktopMargin='38' TabletMargin='48.5' MobileMargin='26.5' />

      <MyIcon></MyIcon>
    </div>
       
  <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='3' />
  <TextComponent title="로그인"  DesktopLength='15' TabletLength='15' MobileLength='15'/> 
  <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='3' />
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
                <UnderLineComponent DesktopLength='45' BetweenLength='45' TabletLength='45' MobileLength='25' />
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
                <UnderLineComponent DesktopLength='45' BetweenLength='45' TabletLength='45' MobileLength='25' />
              </Form.Item>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}

              <Form.Item>
                <div><Center>
                <ColorButton font='12' border="#60FFDA" color="#ffffff"  ><Button onClick={goToMain} ghost='true' type='text'  style={{ minWidth: '100%' }} >
                <p style={{ color: '#ffffff'}}> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;회원가입&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </p>
                </Button></ColorButton>

                <ColorButton font='12' background="#60FFDA" color="#000000" border="#60FFDA"  ><Button ghost='true' type='text' htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 로그인&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                </Button></ColorButton>
                </Center> </div>
              </Form.Item>
            </form>
        );
      }}
    </Formik> </Wrapper></Background></Fix>
  );
};

export default withRouter(LoginPage);