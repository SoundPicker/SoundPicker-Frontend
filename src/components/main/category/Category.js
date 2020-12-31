import { useState } from "react";
import styled from "styled-components";
import BtnLeft from "../../../assets/button_left.png";
import BtnRight from "../../../assets/button_right.png";
import BlankTop from "../../common/BlankTop";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftBtn = styled.button`
  display: block;
  width: 5.4rem;
  height: 5.4rem;
  margin-right: 2.6rem;
  background-image: url(${BtnLeft});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const RightBtn = styled.button`
  display: block;
  width: 5.4rem;
  height: 5.4rem;
  background-image: url(${BtnRight});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

// 서버랑 통신해서 카테고리 이름 받아오기
const CategoryName = styled.span`
  font-size: 1.6rem;
  color: #dadada;
`;

const CategoryBtn = styled.button`
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 9px 0 #ffffff;
  background-color: #ffffff;

  &:focus {
    width: 2rem;
    height: 2rem;
    outline: none;
    box-shadow: 0 0 12px 0 #60ffda;
    background-color: #60ffda;
  }

  &:hover{
    width: 2rem;
    height: 2rem;
    box-shadow: 0 0 12px 0 #ffffff;
    outline: none; 
  }


  }
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 6.9rem;
  height: 5.3rem;
  margin-right: 4.3rem;

  // 마지막 CategoryItem은 margin을 따로 줘야 함
  &:nth-child(5) {
    margin-right: 3.2rem;
  }
`;

// CategoryList에서 map 사용해서 CategoryItem 불러오기(개수는 vw에 따라 달라짐)
const CategoryList = styled.div`
  display: flex;
`;

const Category = ({ click, hover }) => {
  return (
    <>
      <Wrap>
        <LeftBtn></LeftBtn>
        <CategoryItem>
          <CategoryName>전체</CategoryName>
          <CategoryBtn />
        </CategoryItem>
        <CategoryItem>
          <CategoryName>남아이돌</CategoryName>
          <CategoryBtn />
        </CategoryItem>
        <CategoryItem>
          <CategoryName>여아이돌</CategoryName>
          <CategoryBtn />
        </CategoryItem>
        <CategoryItem>
          <CategoryName>여아이돌</CategoryName>
          <CategoryBtn />
        </CategoryItem>
        <RightBtn></RightBtn>
      </Wrap>
      <BlankTop DesktopMargin={5.2} TabletMargin={4} MobileMargin={3.8} />
    </>
  );
};

export default Category;
