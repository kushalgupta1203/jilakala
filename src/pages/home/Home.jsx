import Navbar from "../../components/Navbar/Navbar";
import { Carousel } from "../../components/Carousel/Carousel";
import { slides } from "../../constant/slides";
import Category from "../category/Category";
import Footer from "../../components/Footer/Footer";
import Mapsec from "../../components/Mapsec/Mapsec";

function Home() {


  return (
    <>
      <Navbar />
      <Carousel data={slides} />
      <Mapsec />
      <Category />
      <Footer />
    </>
  );
}

export default Home;
