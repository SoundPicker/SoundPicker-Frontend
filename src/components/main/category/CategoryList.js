import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 서버랑 통신해서 카테고리 이름 받아오기
const CategoryName = styled.span`
  font-size: 1.6rem;
  line-height: 1.035;
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

  &:nth-child(9) {
    margin-right: 8rem;
  }

  @media (max-width: 1024px) {
    &:nth-child(7) {
      margin-right: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    &:nth-child(5) {
      margin-right: 3.2rem;
    }
  }
`;

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const CategoryList = () => {
  const { width } = useWindowDimensions();

  const categoryNum = width > 1024 ? 8 : width > 768 ? 6 : 4;

  return (
    <>
      {[...Array(categoryNum)].map((n, index) => {
        return (
          <CategoryItem>
            <CategoryName>여아이돌</CategoryName>
            <CategoryBtn />
          </CategoryItem>
        );
      })}
    </>
  );
};

export default CategoryList;
