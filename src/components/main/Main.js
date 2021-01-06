import Background from "../../components/main/Bg";
import Header from "../../components/main/header/Header";
import Banner from "../main/banner/Banner";
import SearchInput from "./SearchInput";
import Category from "../main/category/Category";
import CardList from "../main/test_card/TestCard";
import Footer from "../main/footer/Footer";
import BlankTop from "../common/BlankTop";

const Main = (categoryList) => {
  return (
    <Background>
      <Header />
      <BlankTop DesktopMargin={11} TabletMargin={12} MobileMargin={8.8} />
      <Banner />
      <BlankTop DesktopMargin={8} TabletMargin={5.5} MobileMargin={7.4} />
      <SearchInput />
      <BlankTop DesktopMargin={9.7} TabletMargin={7.3} MobileMargin={7.3} />
      <Category categoryList={categoryList} />
      <CardList />
      <Footer />
    </Background>
  );
};

export default Main;
