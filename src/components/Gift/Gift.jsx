import styles from './Gift.module.css'
import { useTranslation } from 'react-i18next'
import giftIMG from './gift.webp'
import Contact from "../Modals/Contact";
import { useState } from "react";

export default function GiftSection() {
  const [modalContactIsOpen, setmodalContact] = useState(false);
    const {t} = useTranslation()
    return (
      <section className={styles.GiftSection}>
        <div className="container">
          <h2 className={styles.titlegift}>{t("gift.title")}</h2>
          <img src={giftIMG} alt="giftBox" className={styles.giftIMG} />
          <ul className={styles.wrapperGiftList}>
            <li>{t("gift.li1")}</li>
            <li>{t("gift.li2")}</li>
            <li>{t("gift.li3")}</li>
            <li>{t("gift.li4")}</li>
            <li>{t("gift.li5")}</li>
            <li>{t("gift.li6")}</li>
          </ul>
          <button
            className={styles.giftBtn}
            onClick={() => setmodalContact(true)}
          >
            {t("gift.btn")}
          </button>
        </div>
        <Contact
          isOpen={modalContactIsOpen}
          onClose={() => setmodalContact(false)}
        />
      </section>
    );
}