import Background from "../../components/main/Bg";
import Header from "../../components/main/header/Header";
import Banner from "../main/banner/Banner";
import Category from "../main/category/Category";
import CardList from "../main/test_card/TestCard";
import Footer from "../main/footer/Footer";
import BlankTop from "../common/BlankTop";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIconImg from "../../assets/ic_search.png";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 52.4rem;
  position: relative;
  margin: 0 auto 1.3rem;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1500ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 1024px) {
    width: 46.5rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    width: 33.8rem;
    margin-bottom: 1.2rem;
  }
`;

const SearchIcon = styled.img.attrs({
  src: SearchIconImg,
})`
  display: block;
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: -1.2rem;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1500ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 768px) {
    left: -5.6rem;
  }
`;

const Input = styled.input`
  width: 52.4rem;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.035;
  border-style: none;
  color: #dadada;
  background-color: transparent;

  &:focus {
    outline: none;
    color: #dadada;
  }

  @media (max-width: 1024px) {
    width: 46.5rem;
  }

  @media (max-width: 768px) {
    width: 33.9rem;
    font-size: 1.4rem;
    line-height: 1;
  }
`;

const SearchBorder = styled.hr`
  display: block;
  width: 88.6rem;
  height: 0.2rem;
  margin: 0 auto;
  border: none;
  color: #000;
  background: #fff;
  background: radial-gradient(
    80.42% 65929741.39% at 50% 74.84%,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0) 57.29%
  );

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1300ms 1;
  animation-timing-function: ease-in;

  @media (max-width: 1024px) {
    width: 72.4rem;
  }
  @media (max-width: 768px) {
    width: 54.9rem;
  }
`;

// testList는 내가 선택한 카테고리에 따라 오게됨.
const Main = ({ categoryList, testList, onClickDisplay, allList }) => {
  console.log(testList);

  const first = Object.values(allList);
  console.log(first);

  const [search, setSearch] = useState("");

  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    // 제목, 내용에 해당되는 거
    const title = first.filter((item) => {
      // console.log(item.title.toLowerCase());
      return (
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search)
      );
    });
    setResult(title);
  }, [search]);

  console.log(result);

  return (
    <Background>
      <Header />
      <BlankTop DesktopMargin={11} TabletMargin={12} MobileMargin={8.8} />
      <Banner />
      <BlankTop DesktopMargin={8} TabletMargin={5.5} MobileMargin={7.4} />
      <>
        <Wrap>
          <SearchIcon />
          <Input
            type="text"
            placeholder="사용자들이 만들어놓은 다양한 테스트들을 검색해보세요!"
            value={search}
            onChange={handleChange}
          />
        </Wrap>
        <SearchBorder />
      </>
      <BlankTop DesktopMargin={9.7} TabletMargin={7.3} MobileMargin={7.3} />
      <Category categoryList={categoryList} onClickDisplay={onClickDisplay} />
      <CardList testList={testList} testList2={result} />
      <Footer />
    </Background>
  );
};

export default Main;
