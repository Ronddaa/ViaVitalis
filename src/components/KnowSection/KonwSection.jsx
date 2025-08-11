import styles from './knowSection.module.css'
import { useTranslation } from "react-i18next";
import knowSVG1 from "./knowSVG1.png";
import knowSVG2 from "./knowSVG2.png";
import Contact from "../Modals/Contact";
import { useState } from "react";

export default function KnowSection() {
  const [modalContactIsOpen, setmodalContact] = useState(false);
    const { t } = useTranslation();
    return (
      <section className={styles.knowSection}>
        <img className={styles.knowSVG1} src={knowSVG1} alt="" />
        <div className="container">
          <h2 className={styles.titleKnow}>{t("know.title")}</h2>
          <ul className={styles.wrapperKnowList}>
            <li className={styles.KnowList}>
              <h3 className={styles.titleList}>{t("know.block1.title")}</h3>
              <p className={styles.textKnow}>{t("know.block1.text")}</p>
            </li>
            <li className={styles.KnowList}>
              <h3 className={styles.titleList}>{t("know.block2.title")}</h3>
              <ul className={styles.wrapperBlockList}>
                <li className={styles.textKnow}>{t("know.block2.text1")}</li>
                <li className={styles.textKnow}>{t("know.block2.text2")}</li>
                <li className={styles.textKnow}>{t("know.block2.text3")}</li>
                <li className={styles.textKnow}>{t("know.block2.text4")}</li>
                <li className={styles.textKnow}>{t("know.block2.text5")}</li>
                <li className={styles.textKnow}>{t("know.block2.text6")}</li>
              </ul>
            </li>
            <li className={styles.KnowList}>
              <h3 className={styles.titleList}>{t("know.block3.title")}</h3>
              <p className={styles.textKnow}>{t("know.block3.text")}</p>
            </li>
            <li className={styles.KnowList}>
              <h3 className={styles.titleList}>{t("know.block4.title")}</h3>
              <ul className={styles.wrapperBlockList}>
                <li className={styles.textKnow}>{t("know.block4.text1")}</li>
                <li className={styles.textKnow}>{t("know.block4.text2")}</li>
                <li className={styles.textKnow}>{t("know.block4.text3")}</li>
                <li className={styles.textKnow}>{t("know.block4.text4")}</li>
                <li className={styles.textKnow}>{t("know.block4.text5")}</li>
                <li className={styles.textKnow}>{t("know.block4.text6")}</li>
                <li className={styles.textKnow}>{t("know.block4.text7")}</li>
                <li className={styles.textKnow}>{t("know.block4.text8")}</li>
                <li className={styles.textKnow}>{t("know.block4.text9")}</li>
                <li className={styles.textKnow}>{t("know.block4.text10")}</li>
                <li className={styles.textKnow}>{t("know.block4.text11")}</li>
              </ul>
            </li>
          </ul>
        </div>
            <img className={styles.knowSVG2} src={knowSVG2} alt="" />
        <button className={styles.knowBtn} onClick={()=> setmodalContact(true)}>{t("know.btn")}</button>
        <Contact
                  isOpen={modalContactIsOpen}
                  onClose={() => setmodalContact(false)}
                />
      </section>
    );
}