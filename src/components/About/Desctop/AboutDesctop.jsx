import styles from './AboutDesctop.module.css'
import { useTranslation } from 'react-i18next'
import aboutIMG1 from "../aboutIMG1.webp";
import aboutIMG2 from "../aboutIMG2.webp";
import aboutIMG3 from "../aboutIMG3.webp";
import aboutIMG4 from "../aboutIMG4.webp";

export default function AboutDesctop() {
    const {t} = useTranslation()
    return (
      <section className={styles.AboutDesctopSection}>
        <h2 className={styles.titleAbout}>{t("about.title")}</h2>
        <video
          className={styles.video}
          src="/Video.mp4"
          controls
          autoPlay={true}
          loop
          muted
        ></video>
        <ul className={styles.wrapperAboutList}>
          <li className={styles.wrapperAboutText1}>
            <p className={styles.textAbout}>{t("about.abouttext1")}</p>
            <p className={styles.textAbout}>{t("about.abouttext2")}</p>
          </li>
          <li className={styles.wrapperImages1}>
            <img
              className={styles.aboutIMG}
              src={aboutIMG1}
              alt="about"
              width={525}
              height={525}
            />
            <img
              className={styles.aboutIMG2}
              src={aboutIMG2}
              alt="about"
              width={525}
              height={525}
            />
          </li>
        </ul>
        <ul className={styles.wrapperAboutList2}>
          <li className={styles.wrapperImages2}>
            <img
              className={styles.aboutIMG3}
              src={aboutIMG3}
              alt="about"
              width={525}
              height={525}
            />
            <img
              className={styles.aboutIMG4}
              src={aboutIMG4}
              alt="about"
              width={525}
              height={525}
            />
          </li>
          <li className={styles.wrapperAboutText2}>
            <p className={styles.textAbout}>{t("about.abouttext3")}</p>
          </li>
        </ul>
        <ul className={styles.wrapperAboutList3}>
          <li>
            <button className={styles.aboutBtn}>{t("about.btn")}</button>
          </li>
          <li className={styles.circles}>
            <p className={styles.textAboutWhite}>{t("about.abouttext4")}</p>
            <p className={styles.textAboutBrown}>{t("about.textCircle")}</p>
          </li>
        </ul>
      </section>
    );
}