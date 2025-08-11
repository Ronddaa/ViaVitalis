import styles from "./Burger.module.css";
import Modal from "react-modal";
import sprite from "../icons.svg";
import { useTranslation } from "react-i18next";

export default function Burger({ isOpen, onClose }) {
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.modalBurgerMenu}
      className={styles.modalContentBurgerMenu}
      closeTimeoutMS={1}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div className={styles.wrapperBurgerHeader}>
        <a href="#">
          <svg className={styles.logo} width={75} height={75}>
            <use xlinkHref={`${sprite}#icon-ViaVitalisLogo`}></use>
          </svg>
        </a>
        <div className={styles.wrapperClose} onClick={onClose}>
          <svg className={styles.burgerMenuClose} width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </div>
      </div>
      <div className="container">
        <button className={styles.burgerBtn}>{t("burger.btn")}</button>
        <nav>
          <ul className={styles.wrapperBurgerNav}>
            <li>
              <a className={styles.burgerLink} href="#">
                {t("burger.link1")}
              </a>
            </li>
            <li>
              <a className={styles.burgerLink} href="#">
                {t("burger.link2")}
              </a>
            </li>
            <li>
              <a className={styles.burgerLink} href="#">
                {t("burger.link3")}
              </a>
            </li>
            <li>
              <a className={styles.burgerLink} href="#">
                {t("burger.link4")}
              </a>
            </li>
            <li>
              <a className={styles.burgerLink} href="#">
                {t("burger.link5")}
              </a>
            </li>
          </ul>
        </nav>
        <ul className={styles.wrapperSocial}>
          <li>
            <a className={styles.linkSocial} href="#">
              <svg className={styles.sociallinkSVG} width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-instheader`}></use>
              </svg>
            </a>
            <a href="#" className={styles.nameSocial}>
              Instagram
            </a>
          </li>
          <li>
            <a className={styles.linkSocial} href="#">
              <svg className={styles.sociallinkSVG} width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-whatsappheader`}></use>
              </svg>
            </a>
            <a href="#" className={styles.nameSocial}>
              WhatsApp
            </a>
          </li>
          <li>
            <a className={styles.linkSocial} href="#">
              <svg className={styles.sociallinkSVG} width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-mailheader`}></use>
              </svg>
            </a>
            <a href="#" className={styles.nameSocial}>
              Email
            </a>
          </li>
        </ul>
        <ul className={styles.wrapperChoiseLang}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Modal>
  );
}
