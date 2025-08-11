import styles from "./Product.module.css";
import { useTranslation } from "react-i18next";
import productIMG from "./productIMG.webp";
import Contact from "../Modals/Contact";
import { useState } from "react";

export default function Product() {
  const [modalContactIsOpen, setmodalContact] = useState(false);
  const { t } = useTranslation();
  return (
    <section className={styles.ProductSection}>
      <div className="container">
        <p className={styles.title}>{t("product.title")}</p>
      </div>
      <ul className={styles.wrapperCirckles}>
        <li className={styles.wrapperIMG}>
          <img className={styles.productIMG} src={productIMG} alt="product" />
        </li>
        <li className={styles.brownCircle}>
          <ul className={styles.brownList}>
            <li className={styles.productText}>
              {t("product.listCircle.li1")}
            </li>
            <li className={styles.productText}>
              {t("product.listCircle.li2")}
            </li>
            <li className={styles.productText}>
              {t("product.listCircle.li3")}
            </li>
            <li className={styles.productText}>
              {t("product.listCircle.li4")}
            </li>
            <li className={styles.productText}>
              {t("product.listCircle.li5")}
            </li>
          </ul>
          <p className={styles.price}>{t("product.listCircle.price")}</p>
        </li>
      </ul>
      <div className="container">
        <p className={styles.productTextBottom}>{t("product.text1")}</p>
        <p className={styles.productTextBottom2}>{t("product.text2")}</p>
        <button className={styles.productBtn} onClick={()=> setmodalContact(true)}>{t("product.btn")}</button>
      </div>
      <Contact
                isOpen={modalContactIsOpen}
                onClose={() => setmodalContact(false)}
              />
    </section>
  );
}
