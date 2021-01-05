import styled from "styled-components";
import SearchIconImg from "../../assets/ic_search.png";

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

const SearchInput = () => {
  return (
    <>
      <Wrap>
        <SearchIcon />
        <Input
          type="text"
          placeholder="사용자들이 만들어놓은 다양한 테스트들을 검색해보세요!"
        />
      </Wrap>
      <SearchBorder />
    </>
  );
};

export default SearchInput;
