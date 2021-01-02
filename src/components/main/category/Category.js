import styled from "styled-components";
import BtnLeft from "../../../assets/button_left.png";
import BtnRight from "../../../assets/button_right.png";
import BlankTop from "../../common/BlankTop";
import CategoryList from "../category/CategoryList";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftBtn = styled.button`
  display: block;
  width: 5.4rem;
  height: 5.4rem;
  margin-right: 8.1rem;
  background-image: url(${BtnLeft});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    margin-right: 1.7rem;
  }
  @media (max-width: 768px) {
    margin-right: 2.6rem;
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

  // 마지막 CategoryItem은 margin을 따로 줘야 함
  &:nth-child(5) {
    margin-right: 8rem;
  }

  @media (max-width: 1024px) {
    &:nth-child(5) {
      margin-right: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    &:nth-child(5) {
      margin-right: 3.2rem;
    }
  }
`;

const Category = () => {
  return (
    <>
      <Wrap>
        <LeftBtn></LeftBtn>
        <CategoryList />
        <RightBtn></RightBtn>
      </Wrap>
      <BlankTop DesktopMargin={5.2} TabletMargin={4} MobileMargin={3.8} />
    </>
  );
};

export default Category;
