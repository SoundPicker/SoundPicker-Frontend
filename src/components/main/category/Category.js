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
  cursor: pointer;

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
  cursor: pointer;

  &:focus {
    outline: none;
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
