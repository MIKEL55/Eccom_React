import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MainBannerCarouser from "../components/MainBannerCarousel";
import Categories from "../components/Categories";
import Newsletter from "../components/NewsLetter";



const Home = () => {
    return (
        <>
        <Banner/>
        <Navbar/>
        <MainBannerCarouser/>
        <Categories/>
        <Newsletter/>
        <Footer/>
        </>
    );
};

export default Home;