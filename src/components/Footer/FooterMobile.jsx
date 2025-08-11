import styles from "./FooterMobile.module.css";
import { useTranslation } from "react-i18next";
import sprite from "../icons.svg";
import lavandaIMG from './footerLavanda.webp'

export default function FooterMobile() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2 className={styles.titleFooter}>{t("footer.title")}</h2>
        <a href="#">
          <svg className={styles.logo} width={358} height={345}>
            <use xlinkHref={`${sprite}#icon-ViaVitalisLogo`}></use>
          </svg>
        </a>
      </div>
      <ul className={styles.wrapperCircles}>
        <li className={styles.wrapperIMG}>
          <img className={styles.lavandaIMG} src={lavandaIMG} alt="lavanda" />
        </li>
        <li className={styles.wrapperContacts}>
          <h3 className={styles.contanct}>{t("footer.contact")}</h3>
          <a className={styles.number} href="tel:+393445371492">
            +39 3445371492
          </a>
          <a className={styles.mail} href="mailto:viavitalis24@gmail.com">
            viavitalis24@gmail.com
          </a>
          <p className={styles.whattext}>
            <svg className={styles.whatSVG} width={35} height={35}>
              <use xlinkHref={`${sprite}#icon-whatsappfooter`}></use>
            </svg>
            { t("footer.what")}
          </p>
          <p className={styles.piva}>{ t("footer.piva")}</p>
        </li>
      </ul>
    </footer>
  );
}
