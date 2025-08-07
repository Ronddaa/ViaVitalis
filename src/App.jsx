import HeroDesctop from "./components/Hero/HeroDesctop/HeroDesctop";
import HeroMobile from "./components/Hero/HeroMobile/HeroMobile";
import useIsDesktop from "./hooks/useIsDesctop";


export default function App() {

  const isDesktop = useIsDesktop();


  return <>
    
    {isDesktop ? <HeroDesctop /> : <HeroMobile />}
  </>;
}
