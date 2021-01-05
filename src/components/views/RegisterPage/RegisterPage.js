import React from "react";
import styled from "styled-components";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_action";
import { useDispatch } from "react-redux";
import Bg1 from '../../../assets/images/all_background.png';
import Bg2 from '../../../assets/images/all_background2.png';

import {
  Form,
  Input,
  Button,
} from 'antd';


const Background = styled.div`
    width:100vw;
    height:1000vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-color:  rgba( 12, 26, 34, 1);
    background-size:contain;
 @media  (max-width:768px) {
  background-image: url(${Bg2});
    }
    @media (min-width: 768px) {
      background-image: url(${Bg1});
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
    margin-top:12%;
      width:100%auto;
    }

    @media (min-width: 1024px) { //desktop 
      margin-top:15%;
      width:100%auto;
    }
    @media (max-width: 767px) { //iphone
      width:100%auto;
        margin-top:30%;
  }` 

  const InputStyle =styled.input`
    border-radius: 5px;
    color: red;
  `;

  

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (
<Background>
  <Wrapper>
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
              props.history.push("/mainpage");
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
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (

            <Form style={{ minWidth: '150px' }}  onSubmit={handleSubmit} >

              <Form.Item requiredMark="optional" required label="닉네임">

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
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}

              </Form.Item>

              <Form.Item  requiredMark="optional" required label="이메일" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
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
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item requiredMark="optional" required label="패스워드" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
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
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item requiredMark="optional" required label="패스워드 확인" hasFeedback>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item >
                <Button  onClick={handleSubmit} type="default" disabled={isSubmitting}>
                  회원가입
                </Button>
              </Form.Item>
            </Form>
         
        );
      }}
    </Formik>
    </Wrapper>
    </Background>
  );
};


export default RegisterPage;