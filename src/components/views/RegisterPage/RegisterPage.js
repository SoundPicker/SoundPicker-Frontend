import React from "react";
import styled from "styled-components";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_action";
import { useDispatch } from "react-redux";
import TextComponent from '../../../components/common/TextComponent';
import BlankTop from '../../../components/common/BlankTop';
import UnderLineComponent from './UnderLineComponent';
import Bg1 from '../../../assets/images/login_background1.png';
import Bg2 from '../../../assets/images/login_background2.png';
import Bg3 from '../../../assets/images/login_background3.png';
import logo1 from '../../../assets/images/image_watermark.png';
import Text from './Text';
import ColorButton from './ColorButton';

import {
  Form,
  Button,
} from 'antd';


const Background = styled.div`
    width:100vw;
    height:1000vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-color:  #081923;
    background-size:contain;
    @media (min-width: 768px) and (max-width:1024px){
      background-image: url(${Bg2});
    }
 @media  (min-width:1024px) {
  background-image: url(${Bg1});
    }
    @media (max-width: 768px) {
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
    margin-top:35%;
      width:100%auto;
    }

    @media (min-width: 1024px) { //desktop 
      margin-top:17%;
      width:100%auto;
    }
    @media (max-width: 767px) { //iphone
      width:100%auto;
        margin-top:30%;
  }` 


const MyIcon = styled.img`
  @media (min-width: 768px) and (max-width:1024px) { //between
    width:180px;
    }

    @media (min-width: 1024px) { //desktop
    width:221px;
    }
    @media (max-width: 767px) { //iphone
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
width: 370px;
color:white;
outline:none;
@media (max-width: 767px) { //iphone
      width:240px;
  }

`

const Content=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 767px) { //iphone
    margin-left:20%
  }
`

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (
<Background>
  <Wrapper>
  <MyIcon></MyIcon>
  <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='2' />
  <TextComponent title="회원가입"  DesktopLength='15' TabletLength='15' MobileLength='13'/> 
  <BlankTop DesktopMargin='5' TabletMargin='3' MobileMargin='3' />
    <Formik
      initialValues={{
        email: '',
        nickname: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        nickname: Yup.string()
          .required('Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
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
                <UnderLineComponent DesktopLength='45' BetweenLength='45' TabletLength='45' MobileLength='30' />
              </Form.Item>
             
              <Form.Item requiredMark="optional" hasFeedback >
                 <Content>
              <Text title="패스워드"  DesktopLength='15' TabletLength='15' MobileLength='13'/>
                <Input
                  id="password"
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
              
              <Form.Item requiredMark="optional"  hasFeedback validateStatus={errors.confirmPassword && touched.confirmPassword ? "error" : 'success'}>
              <Content>
              <Text title="패스워드확인"  DesktopLength='15' TabletLength='15' MobileLength='13'/>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}
                  />
                  
                
                </Content>
                <UnderLineComponent DesktopLength='45' BetweenLength='45' TabletLength='45' MobileLength='30' />
              </Form.Item>

              <Form.Item  requiredMark="optional"   validateStatus={errors.nickname && touched.nickname ? "error" : 'success'}>
              <Content>
              <Text title="닉네임"  DesktopLength='15' TabletLength='15' MobileLength='13'/>
              <Input 
                  id="nickname"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                </Content>
                <UnderLineComponent DesktopLength='45' BetweenLength='45' TabletLength='45' MobileLength='30' /> 
                </Form.Item>

                <BlankTop DesktopMargin='3' TabletMargin='1' MobileMargin='1' />
                <ColorButton font='12' background="#60FFDA" color="#000000" border="#60FFDA"  > <Button size='large' ghost='true' type='text' onClick={handleSubmit}  disabled={isSubmitting}>
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 회원가입 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                </Button></ColorButton> 

            </form>
         
        );
      }}
    </Formik>
    </Wrapper>
    </Background>
  );
};


export default RegisterPage;