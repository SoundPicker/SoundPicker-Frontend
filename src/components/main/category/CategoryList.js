import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 서버랑 통신해서 카테고리 이름 받아오기
const CategoryName = styled.span`
  font-size: 1.28rem;
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
  @media (max-width: 568px) {
    font-size: 0.8rem;
  }
`;

const CategoryBtn = styled.button`
  &:hover {
    width: 2rem;
    height: 2rem;
    box-shadow: 0 0 12px 0 #ffffff;
    outline: none;

    @media (max-width: 568px) {
      width: 0.6rem;
      height: 0.6rem;
      padding: 0;
      box-shadow: 0 0 8px 0 #ffffff;
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
  @media (max-width: 828px) {
    &:nth-child(5) {
      margin-right: 3.2rem;
    }
  }
  @media (max-width: 568px) {
    width: 6rem;
    margin-right: 2rem;
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

const div = document.getElementsByClassName("cateBtn");

function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < div.length; i++) {
      div[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < div.length; i++) {
    div[i].addEventListener("click", handleClick);
  }
}

init();

const CategoryList = ({ categoryList, startNum, onClickDisplay }) => {
  const { width } = useWindowDimensions();

  const categoryNum = width > 1024 ? 7 : width > 828 ? 5 : width > 568 ? 3 : 2;

  return (
    <>
      {categoryList.map((item, index) => {
        if (index === 9) {
          return (
            <CategoryItem>
              <CategoryName key={index}>{item["description"]}</CategoryName>
              <CategoryBtn
                className="cateBtn"
                onClick={(evt) => {
                  onClickDisplay(item["id"]);
                  handleClick(evt);
                }}
              />
            </CategoryItem>
          );
        }
      })}
      {categoryList.map((item, index) => {
        if (index < startNum + categoryNum && index >= startNum) {
          return (
            <CategoryItem>
              <CategoryName key={index}>{item["description"]}</CategoryName>
              <CategoryBtn
                className="cateBtn"
                onClick={(evt) => {
                  onClickDisplay(item["id"]);
                  handleClick(evt);
                }}
              />
            </CategoryItem>
          );
        }
      })}
    </>
  );
};

export default CategoryList;
