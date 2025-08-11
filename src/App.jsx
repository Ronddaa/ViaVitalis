import Header from "./components/Header/Header";
import HeroDesctop from "./components/Hero/HeroDesctop/HeroDesctop";
import HeroMobile from "./components/Hero/HeroMobile/HeroMobile";
import SwiperSection from "./components/SwiperSection/SwiperSection";
import useIsDesktop from "./hooks/useIsDesctop";
import AboutMobile from "./components/About/Mobile/AboutMobile";
import AboutDesctop from "./components/About/Desctop/AboutDesctop";
import GiftSection from "./components/Gift/Gift";
import KnowSection from "./components/KnowSection/KonwSection";
import Product from "./components/Product/Product";
import FooterMobile from "./components/Footer/FooterMobile";
import FooterDesctop from "./components/Footer/FooteDesctop";

export default function App() {
  const isDesktop = useIsDesktop();

  return (
    <>
      <Header />
      {isDesktop ? <HeroDesctop id="hero" /> : <HeroMobile id="hero" />}
      <SwiperSection id="swiper" />
      {isDesktop ? <AboutDesctop id="about" /> : <AboutMobile id="about" />}
      <GiftSection id="gift" />
      <KnowSection id="know" />
      <Product id="products" />
      {isDesktop ? <FooterDesctop id="footer" /> : <FooterMobile id="footer" />}
    </>
  );
}
