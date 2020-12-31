import styled from "styled-components";
import SearchIconImg from "../../assets/ic_search.png";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7.4rem;
  margin-bottom: 1.2rem;
`;

const SearchIcon = styled.img.attrs({
  src: SearchIconImg,
})`
  display: block;
  width: 2rem;
  height: 2rem;
  margin-right: 1.8rem;
`;

const Input = styled.input`
  width: 37.4rem;
  text-align: center;
  letter-spacing: 0;
  border-style: none;
  color: #dadada;
  background-color: transparent;

  &:focus {
    outline: none;
    color: #dadada;
  }
`;

const SearchBorder = styled.hr`
  display: block;
  width: 54.9rem;
  height: 0.2rem;
  margin: 0 auto 7.4rem;
  border: none;
  color: #000;
  background: #fff;
  background: radial-gradient(
    80.42% 65929741.39% at 50% 74.84%,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0) 57.29%
  );
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
