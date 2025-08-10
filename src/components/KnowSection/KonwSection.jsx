import styles from './knowSection.module.css'
import { useTranslation } from "react-i18next";

export default function KnowSection() {
    const { t } = useTranslation();
    return (
        <section className={styles.knowSection}>
            <div className="container">
                <h2 className={styles.titleKnow}>{ t("know.title")}</h2>
            </div>
        </section>
    )
}