import React from "react";
import { useEffect, useState, useRef } from 'react';
import {  useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import BlankTop from '../../components/common/BlankTop';
import QuizHeader from '../../components/common/QuizHeader';
import UnderLineWrap from './UnderLineWrap';
import TextComponent from '../../components/common/TextComponent';
import Button from './Button';
import Button2 from './Button2';
import BoldTextComponent from './BoldTextComponent';
import Bg1 from '../../assets/images/mypage_background1.jpg';
import Bg2 from '../../assets/images/mypage_background2.png';
import logo1 from '../../assets/images/image_watermark.png';
import StartLoading from "../../components/loading/StartLoading";
import {auth, changeName,changePassword,deleteTest} from "../../_actions/user_action";
import { Input } from 'antd';


const Background = styled.div`
    width:100vw;
    height:100%;
    min-height:100vh;

    border:1px solid rgba(0,0,0,0);
    background-repeat: no-repeat;
    background-position: center top;
    background-color: rgba( 12, 26, 34, 1);
    background-size:contain;
    @media (min-width: 768px) and (max-width:1024px){
      background-image: url(${Bg2});
    }
 @media  (min-width:1024px) {
  background-image: url(${Bg1});
    }
    @media (max-width: 768px) {
      background-image: url(${Bg2});
    }
`;


const Wrapper=styled.div`

  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    //between
    margin-top: 3%;
    width: 100%auto;
  }

  @media (min-width: 1024px) {
    //desktop
    margin-top: 3%;
    width: 100%auto;
  }
  @media (max-width: 767px) {
    //iphone
    width: 100%auto;
    margin-top: 3%;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
`

const Detail=styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const MyIcon = styled.img`
  @media (min-width: 768px) and (max-width: 1024px) {
    //between
    width: 221px;
  }

  @media (min-width: 1024px) {
    //desktop
    width: 297px;
  }
  @media (max-width: 767px) {
    //iphone
    width: 150px;
  }
`

MyIcon.defaultProps = {
  src: logo1,
};




function MyPage({props}) {
  

  const [myState, setMyState] =useState({status: 'idle', member:null});
  const dispatch = useDispatch();
  
  const nameInput = useRef();
  const passwordInput = useRef();

  useEffect(()=>{
      dispatch(auth()).then(response => {
        setMyState({status:'pending'});
        const data=response.payload.data;
        setTimeout(() => setMyState({ status: 'resolved' , member:data}), 600);
         });
  },[]);

  const onChangeInputs = async evt => {
    const { name, value } = evt.target
    try {
      await changeName({
        ...myState.member,
        [name]: value,
      })
      setMyState({
        status: 'resolved',
        member: {
          ...myState.member,
          [name]: value,
        },
      })
    } catch (e) {
      console.error(e)
    }
  }

  const onChangePassword = async evt => {
    const { name, value } = evt.target
    try {
      await changePassword({
        ...myState.member,
        [name]: value,
      })
      setMyState({
        status: 'resolved',
        member: {
          ...myState.member,
          [name]: value,
        },
      })
    } catch (e) {
      console.error(e)
    }
  }



const onDeleteTest = async (evt) => {
  console.log(evt);
  try {
      await deleteTest(evt.id);
      console.log(myState)
      const tests = myState.member.Tests.filter(test =>{
          return test.id !== evt.id
      })
      setMyState({
        status: 'resolved',
        member: {
          ...myState.member,
          Tests:tests
        }
    });
  } catch (e) {
      console.error(e);
  }
};

  const history = useHistory();

switch (myState.status) {
  case 'pending':
      return <StartLoading/>;
  case 'resolved':
      return (
        myState.member&&
        <Background>
          <QuizHeader />
            <Wrapper>
              
                <MyIcon></MyIcon>
                <BlankTop DesktopMargin='3' TabletMargin='3' MobileMargin='1' />
                <TextComponent title="마이페이지"  DesktopLength='20' TabletLength='15' MobileLength='13'/>  
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <Content>
                  <BoldTextComponent title="개인정보 수정"  DesktopLength='25' TabletLength='20' MobileLength='15'/>
                </Content>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='5' />
                <Content>
                  <Input  style={{ color: 'white'  }} ref={nameInput} bordered={false} name="nickname" value={myState.member.nickname} onChange={onChangeInputs}/>
                  <Button2 font='12' onClick = {() => {nameInput.current.focus();}}>닉네임 변경</Button2>
                </Content>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='1' />
                <Content>
                <Input  style={{ color: 'white'  }} bordered={false} name="email" value={myState.member.email} disabled={true}/>
                <Button2 font='12' color='gray'>이메일 <div></div>변경불가</Button2>
                </Content>
                <BlankTop DesktopMargin='5' TabletMargin='5' MobileMargin='1' />
                <Content>
                  <Input placeholder='******'
                    style={{ color: 'white'  }} ref={passwordInput} bordered={false} name="password" onChange={onChangePassword}disabled={true}/>
                  <Button2 font='12' color='gray' onClick = {() => {passwordInput.current.focus(); }} >비밀번호 <div></div> 변경불가</Button2>
                </Content>
                <BlankTop DesktopMargin='8' TabletMargin='7' MobileMargin='5' />
                <Content>
                  <BoldTextComponent title="마이테스트 수정"  DesktopLength='25' TabletLength='20' MobileLength='15'/>
                </Content>
                <BlankTop DesktopMargin='7' TabletMargin='5' MobileMargin='3' />
            
                  {myState.member.Tests && myState?.member?.Tests.map((member,i)=>
                  
                  <div>
                  <Detail>
                  <BoldTextComponent key={i} title={member.title}  DesktopLength='15' TabletLength='12' MobileLength='12'/>
                  <div>
                  <Button font='12' onClick={() => history.push(`/testedit/${member.id}`)}>수정</Button>
                   <Button font='12' onClick={()=>onDeleteTest(member)}>삭제</Button>
                  <Button font='12'  color="#60FFDA" border="#60FFDA"  onClick={() => history.push(`/test/${member.id}`)} > 플레이</Button> </div></Detail>  
                  <Detail>
                    <TextComponent  key={i} title={member.description}  DesktopLength='10' TabletLength='9' MobileLength='7'/>
                  </Detail> 
                  <BlankTop DesktopMargin='2' TabletMargin='2' MobileMargin='2' />
                  <UnderLineWrap  DesktopLength='130'BetweenLength='95' TabletLength='70' MobileLength='36' ></UnderLineWrap>
                  <BlankTop DesktopMargin='4' TabletMargin='2' MobileMargin='2' /> 
                </div>
                )}
               
              
                </Wrapper>
          </Background> 
      )
    case 'rejected':
      return <h1>해당 페이지가 없습니다. </h1>
    case 'idle':
    default:
      return <div></div>
  }
}
export default MyPage
