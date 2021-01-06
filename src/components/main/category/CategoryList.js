import React, { useEffect, useState } from "react";
import styled from "styled-components";

import getCategories from "../../../lib/api/main/categoryAPI";

// 서버랑 통신해서 카테고리 이름 받아오기
const CategoryName = styled.span`
  font-size: 1.3rem;
  line-height: 1.035;
  color: #dadada;

  @media (max-width: 1440px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1047px) {
    font-size: 1.15rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.035;
  }
`;

const CategoryBtn = styled.button`
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 9px 0 #ffffff;
  background-color: #ffffff;
  cursor: pointer;

  &:focus {
    width: 2rem;
    height: 2rem;
    outline: none;
    box-shadow: 0 0 12px 0 #60ffda;
    background-color: #60ffda;
  }

  &:hover {
    width: 2rem;
    height: 2rem;
    box-shadow: 0 0 12px 0 #ffffff;
    outline: none;
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
  @media (max-width: 828px) {
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

// startNum은 CategoryList 시작 인덱스
const CategoryList = ({ newList }) => {
  console.log(newList);
  const { width } = useWindowDimensions();

  const categoryNum = width > 1024 ? 8 : width > 828 ? 6 : 4;

  //const [categoriesState, setCategoriesState] = useState();

  // useEffect는 component가 마운트될 때 나타난다.
  // useEffect(() => {
  //   console.log("=== useEffect ===");

  //   const fetchCategories = async () => {
  //     const categoryData = await getCategories();
  //     console.log(categoryData); //  10개의 카테고리 정보: [{…}, ... ,{…}]
  //     setCategoriesState(categoryData);
  //   };

  //   fetchCategories();
  // }, []);

  useEffect(() => {
    console.log(newList, "카테고리 리스트 잘 도착함");
  }, []);

  return (
    <>
      {[...Array(categoryNum)].map((n, index) => {
        return (
          <CategoryItem>
            <CategoryName>영화/드라마</CategoryName>
            <CategoryBtn />
          </CategoryItem>
        );
      })}
    </>
  );

  // return (
  //   ...categoriesState.map((n, index) => {
  //     <CategoryItem>
  //       <CategoryName></CategoryName>
  //       <CategoryBtn />
  //     </CategoryItem>;
  //   }),
  // );
};

export default CategoryList;
