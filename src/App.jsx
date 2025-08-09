import Header from "./components/Header/Header";
import HeroDesctop from "./components/Hero/HeroDesctop/HeroDesctop";
import HeroMobile from "./components/Hero/HeroMobile/HeroMobile";
import SwiperSection from "./components/SwiperSection/SwiperSection";
import useIsDesktop from "./hooks/useIsDesctop";

export default function App() {

  const isDesktop = useIsDesktop();


  return (
    <>
    <Header />
    {isDesktop ? <HeroDesctop /> : <HeroMobile />}
    <SwiperSection />
  </>
  )
}
