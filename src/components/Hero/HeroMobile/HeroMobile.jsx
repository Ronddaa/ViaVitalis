import styles from "./HeroMobile.module.css";
import { useTranslation } from "react-i18next";
import heroMainIMG from "../heroMainIMG.webp";
import heroLavandaIMG from '../heroLavandaIMG.webp'
import Contact from "../../Modals/Contact";
import { useState } from "react";

export default function HeroMobile() {
  const [modalContactIsOpen, setmodalContact] = useState(false);
  const { t } = useTranslation();

  return (
    <section className={styles.HeroMobile}>
      <div className="container">
        <h1 className={styles.mainTitle}>{t("hero.mainTitle")}</h1>
        <p className={styles.mainText}>{t("hero.mainText")}</p>
        <p className={styles.mainTextscnd}>{t("hero.mainTextscnd")}</p>
        <button className={styles.heroBtn} onClick={() => setmodalContact(true)}>{t("hero.heroBtn")}</button>
      </div>
      <div className={styles.wrapperIMGhero}>
        <img
          className={styles.mainLavandaIMG}
          src={heroMainIMG}
          alt="lavanda"
        />
        <div className={styles.wrapperCircleHeroText}>
          <p className={styles.mainTextInCircle}>{t("hero.textInCircle")}</p>
        </div>
      </div>
      <div className="container">
        <p className={`${styles.mainText} ${styles.maintextLowWidth}`}>
          {t("hero.heroText1")}
        </p>
        <img
          className={styles.heroLavandaIMG}
          src={heroLavandaIMG}
          alt="lavandaOil"
        />
        <p className={`${styles.mainTextscnd} ${styles.maintextLowWidth}`}>
          {t("hero.heroText2")}
        </p>
        <p className={`${styles.mainText} ${styles.maintextLowWidth}`}>
          {t("hero.heroText3")}
        </p>
      </div>
      <Contact
              isOpen={modalContactIsOpen}
              onClose={() => setmodalContact(false)}
            />
    </section>
  );
}
