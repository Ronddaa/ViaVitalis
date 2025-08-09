import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroDesctop.module.css";
import heroMainIMG from "../heroMainIMG.webp";
import heroLavandaIMG from "../heroLavandaIMG.webp";

// Регистрируем плагин ScrollTrigger один раз
gsap.registerPlugin(ScrollTrigger);

export default function HeroDesctop() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const elementsToAnimate = useRef([]);

  useLayoutEffect(() => {
    // Получаем элементы, которые нужно анимировать
    const animateElements = elementsToAnimate.current;

    // Создаем анимацию с ScrollTrigger
    gsap.fromTo(
      animateElements,
      {
        // Начальное состояние: элементы находятся за пределами экрана внизу
        opacity: 0,
        y: "-50vh",
      },
      {
        // Конечное состояние: элементы возвращаются на свои места
        opacity: 1,
        y: "10dvh",
        scrollTrigger: {
          trigger: containerRef.current, // Триггером служит весь контейнер
          start: "top bottom", // Анимация начинается, когда верх контейнера достигает низа экрана
          end: "center center", // Анимация заканчивается, когда центр контейнера достигает центра экрана
          scrub: true, // Привязываем анимацию к прокрутке
          markers: false, // Отладочные маркеры, можно поставить true для просмотра
        },
      }
    );

    // Функция очистки для GSAP
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.HeroDesctop}>
      <div className="container">
        <h1 className={styles.mainTitle}>{t("hero.mainTitle")}</h1>
        <p className={styles.mainText}>{t("hero.mainText")}</p>
        <p className={styles.mainTextscnd}>{t("hero.mainTextscnd")}</p>
        <button className={styles.heroBtn}>{t("hero.heroBtn")}</button>
        <div className={styles.heroJustCircke}></div>
      </div>
      <div className={styles.wrapperHeroIMG}>
        <img className={styles.heroMainIMG} src={heroMainIMG} alt="lavanda" />
        <ul className={styles.wrapperTextOnIMG}>
          <li className={styles.whiteCircle}>
            <p className={styles.mainTextInCircle}>{t("hero.textInCircle")}</p>
          </li>
          <li className={styles.transperentCircle}>{/* design circle */}</li>
        </ul>
      </div>
      <div className="container">
        <ul className={styles.wrapperHeroLavandaGSAP} ref={containerRef}>
          <li
            className="gsapAnimation"
            ref={(el) => (elementsToAnimate.current[0] = el)}
          >
            <p
              className={`${styles.mainTextLavanda} ${styles.maintextLowWidth}`}
            >
              {t("hero.heroText1")}
            </p>
          </li>
          <li className={styles.scndLi}>
            <p
              className={`${styles.mainTextscndLavanda} ${styles.maintextLowWidth}`}
            >
              {t("hero.heroText2")}
            </p>
            <img
              className={styles.heroLavandaIMG}
              src={heroLavandaIMG}
              alt="lavandaOil"
              width={806}
              height={660}
            />
          </li>
          <li
            className="gsapAnimation"
            ref={(el) => (elementsToAnimate.current[1] = el)}
          >
            <p
              className={`${styles.mainTextLavanda} ${styles.maintextLowWidth}`}
            >
              {t("hero.heroText3")}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
