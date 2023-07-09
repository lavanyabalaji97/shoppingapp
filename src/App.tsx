import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Cards from "./Components/Trending/Trending";
import Banner from "./Banner/Banner";
import Trending from "./Components/Trending/Trending"
import Choices from "./Components/Choices/Choices"
import Division from "./Division/Division";
import Footer from "./Footer/Footerend";
import Craft from "./Components/Trending/Craft/Craft";
import Resides from './Reside/Resides'
import Mens from "./Men/Mens";
import Children from "./Children/Children";
import Work from "./Children/Work";
import Order from "./Order/Order";
import Explore from "./Footer/Explore/Explore";
import Footerbottom from "./Footer/Footerbottom";
function App() {
  return (
    <div style={{ backgroundColor: "#F9F2EA" }}>
      <Header />
      <Section />
      <Trending />
      <Banner />
      <Choices />
      <Division />
      <Resides />
      <Craft/>
      <Mens />
      <Children />
      <Work />
      <Order />
      <Explore/>
      <Footer />
      <Footerbottom/>
    </div>
  );
}

export default App;
