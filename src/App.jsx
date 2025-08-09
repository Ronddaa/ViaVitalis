import { useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollSmoother зависит от ScrollTrigger
import { useGSAP } from "@gsap/react";
import Header from "./components/Header/Header";
import HeroDesctop from "./components/Hero/HeroDesctop/HeroDesctop";
import HeroMobile from "./components/Hero/HeroMobile/HeroMobile";
import SwiperSection from "./components/SwiperSection/SwiperSection";
import useIsDesktop from "./hooks/useIsDesctop";

// Регистрируем плагины GSAP
gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

export default function App() {
  const smoother = useRef();
  const main = useRef(); // Внешний контейнер для ScrollSmoother

  useGSAP(
    () => {
      // Создаём ScrollSmoother. Он должен быть инициализирован первым.
      smoother.current = ScrollSmoother.create({
        smooth: 1.5, // Скорость "догоняющего" скролла (в секундах)
        effects: true, // Включаем эффекты параллакса (работает с data-speed/data-lag)
      });
    },
    { scope: main } // Ограничиваем область действия хука
  );

  const isDesktop = useIsDesktop();

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        <Header />
        {isDesktop ? <HeroDesctop /> : <HeroMobile />}
        <SwiperSection />
      </div>
    </div>
  );
}