import styles from "./AboutMobile.module.css";
import { useTranslation } from "react-i18next";
import aboutIMG1 from "../aboutIMG1.webp";
import aboutIMG2 from '../aboutIMG2.webp'
import aboutIMG3 from '../aboutIMG3.webp'
import aboutIMG4 from "../aboutIMG4.webp";

export default function AboutMobile() {
  const { t } = useTranslation();
  return (
    <section className={styles.AboutMobileSection}>
      <h2 className={styles.titleAbout}>{t("about.title")}</h2>
      <video
        className={styles.video}
        src="/Video.mp4"
        controls
        autoPlay={true}
        loop
        muted
      ></video>
      <div className="container">
        <p className={styles.aboutText}>{t("about.abouttext1")}</p>
        <p className={styles.aboutText}>{t("about.abouttext2")}</p>
        <div className={styles.wrapperImages}>
          <img
            className={styles.aboutIMG}
            src={aboutIMG1}
            alt="about"
            width={313}
            height={313}
          />
          <img
            className={styles.aboutIMG2}
            src={aboutIMG2}
            alt="about"
            width={313}
            height={313}
          />
        </div>
        <p className={styles.aboutText}>{t("about.abouttext3")}</p>
        <div className={styles.wrapperImages}>
          <img
            className={styles.aboutIMG}
            src={aboutIMG3}
            alt="about"
            width={313}
            height={313}
          />
          <img
            className={styles.aboutIMG2}
            src={aboutIMG4}
            alt="about"
            width={313}
            height={313}
          />
        </div>
        <p className={styles.aboutText}>{t("about.abouttext4")}</p>
      </div>
      <ul className={styles.wrapperCircles}>
        <li className={styles.aboutBrown}>
          <p className={styles.textCircle}>{t("about.textCircle")}</p>
        </li>
        <li className={styles.aboutCircle}></li>
          </ul>
          <div className="container">
              <button className={styles.aboutBtn}>{ t("about.btn")}</button>
          </div>
    </section>
  );
}
