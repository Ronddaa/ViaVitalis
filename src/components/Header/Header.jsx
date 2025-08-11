import styles from "./Header.module.css";
import sprite from "../icons.svg";
import { useTranslation } from "react-i18next";
import Burger from "../Modals/Burger";
import { useState, useEffect } from "react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [modalBurgerMenuIsOpen, setmodalBurgerMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowHeader(false); // скролл вниз
      } else {
        setShowHeader(true); // скролл вверх
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const changeLang = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("lang", selectedLanguage);
  };

  return (
    <header
      className={`${styles.header} ${showHeader ? styles.show : styles.hide}`}
    >
      <div className="container">
        <a href="#">
          <svg className={styles.logo} width={107} height={103}>
            <use xlinkHref={`${sprite}#icon-ViaVitalisLogo`}></use>
          </svg>
        </a>
        <ul className={`${styles.wrapperNavigationList} hideElementForMobile`}>
          <li>
            <a className={styles.headerNavLink} href="#products">
              {t("header.navigation1")}
            </a>
          </li>
          <li>
            <a className={styles.headerNavLink} href="#about">
              {t("header.navigation2")}
            </a>
          </li>
          <li>
            <a className={styles.headerNavLink} href="#gift">
              {t("header.navigation3")}
            </a>
          </li>
          <li>
            <a className={styles.headerNavLink} href="#know">
              {t("header.navigation4")}
            </a>
          </li>
          <li>
            <a className={styles.headerNavLink} href="#footer">
              {t("header.navigation5")}
            </a>
          </li>
        </ul>
        <select
          className={styles.languageSelector}
          id="language-select"
          value={i18n.language}
          onChange={changeLang}
        >
          <option value="ru">RU</option>
          <option value="en">EN</option>
          <option value="ua">UA</option>
          <option value="it">IT</option>
          <option value="es">ES</option>
        </select>
        <ul className={styles.wrapperSocialLinkHeader}>
          <li className="hideElementForMobile">
            <a href="https://www.instagram.com/via_vitalis/">
              <svg className={styles.sociallinkSVG} width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-instheader`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className={styles.sociallinkSVG} width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-whatsappheader`}></use>
              </svg>
            </a>
          </li>
          <li className="hideElementForMobile">
            <a href="#">
              <svg className={styles.sociallinkSVG} width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-mailheader`}></use>
              </svg>
            </a>
          </li>
          <li className="hideElementForMobile">
            <a
              className={styles.mailLinkHeader}
              href="mailto:viavitalis24@gmail.com"
            >
              viavitalis24@gmail.com
            </a>
          </li>
        </ul>
        <button
          className={styles.burgerBtn}
          onClick={() => setmodalBurgerMenu(true)}
        >
          <svg className={styles.burgerMenu} width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-burger`}></use>
          </svg>
        </button>
      </div>
      <Burger
        isOpen={modalBurgerMenuIsOpen}
        onClose={() => setmodalBurgerMenu(false)}
      />
    </header>
  );
}
