// import styled from "styled-components";
// import Bg from "../common/Bg.js";

// const Sibal = styled.div`
//   width: 100%;
//   height: 100%;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Main = () => {
//   // component에서는 스타일 지정만
//   return <Sibal>{Bg}</Sibal>;
// };

// export default Main;
// import styled from "styled-components";
// import BgMobile from "../../assets/mobile/all_background.png";

// const Warp = styled.div`
//   width: 100vw;
//   height: 1000vh;
//   background-image: url(${BgMobile});
//   background-repeat: no-repeat;
//   background-position: center top;
//   background-color: black;
// `;
// const Background = ({ children }) => {
//   return <Warp>{children}</Warp>;
// };
// export default Background;

import Background from "../../components/main/Bg";
import Header from "../../components/main/header/Header";
import Banner from "../main/banner/Banner";
import SearchInput from "./SearchInput";
import Category from "../main/category/Category";
import CardList from "../main/test_card/TestCard";

const Main = () => {
  return (
    <Background>
      <Header />
      <Banner />
      <SearchInput />
      <Category />
    </Background>
  );
};

export default Main;
