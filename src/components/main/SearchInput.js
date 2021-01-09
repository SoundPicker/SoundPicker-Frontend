import styled from "styled-components";
import SearchIconImg from "../../assets/ic_search.png";
import { useEffect, useState } from "react";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 52.4rem;
  position: relative;
  margin: 0 auto 1.3rem;
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
  @media (max-width: 1024px) {
    width: 72.4rem;
  }
  @media (max-width: 768px) {
    width: 54.9rem;
  }
`;

const SearchInput = (testList) => {
  // first는 카테고리에서 1차 분류한 결과
  const first = Object.values(testList.testList);

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
    <div filtered={result}>
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
    </div>
  );
};

export default SearchInput;
