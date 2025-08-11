import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";
import sprite from "../icons.svg";
import Modal from "react-modal";

export default function Contact({ isOpen, onClose }) {
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.modalContact}
      className={styles.modalContentContact}
      closeTimeoutMS={1}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <svg
        className={styles.ContactClose}
        width={18}
        height={18}
        onClick={onClose}
      >
        <use xlinkHref={`${sprite}#icon-close`}></use>
      </svg>
      <div className="container">
        <ul className={styles.wrapperContactModal}>
          <li>
            <h2 className={styles.title}>{t("modal.title1")}</h2>
            <ul className={styles.wrapperwhats}>
              <li>
                <svg className={styles.whatsSVG} width={47} height={47}>
                  <use xlinkHref={`${sprite}#icon-whatsappfooter`}></use>
                </svg>
              </li>
              <li>
                <p className={styles.whats}>WhatsApp</p>
                <a href="tel:+380637265565" className={styles.whats}>
                  +380637265565
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2 className={styles.title}>{t("modal.title2")}</h2>
            <ul className={styles.wrapperwhats}>
              <li>
                <svg className={styles.whatsSVG} width={47} height={47}>
                  <use xlinkHref={`${sprite}#icon-whatsappfooter`}></use>
                </svg>
              </li>
              <li>
                <p className={styles.whats}>WhatsApp</p>
                <a href="tel:+393445371492" className={styles.whats}>
                  +39 344 537 1492
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2 className={styles.titleLast}>{t("modal.title3")}</h2>
            <p className={styles.whats}>{t("modal.text")}</p>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
