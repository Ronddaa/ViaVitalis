import styles from './SwiperSection.module.css'
import { useTranslation } from 'react-i18next'
import { Swiper , SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperIMG1 from "./SwiperIMG1.webp";
import SwiperIMG2 from './SwiperIMG2.webp';
import SwiperIMG3 from './SwiperIMG3.webp';
import SwiperIMG4 from './SwiperIMG4.webp';
import SwiperIMG5 from "./SwiperIMG5.webp";
import useIsDesktop from '../../hooks/useIsDesctop';
import Contact from "../Modals/Contact";
import { useState } from "react";


export default function SwiperSection() {

  const [modalContactIsOpen, setmodalContact] = useState(false);

    const { t } = useTranslation()
    
    const isDesctop = useIsDesktop()

    const slidesPerViewValue = isDesctop ? 3.2 : 1;

    return (
      <section className={styles.SwiperSection}>
          <h2 className={styles.titleSwiperSection}>
            {t("swiperSection.title")}
          </h2>
          <Swiper
            spaceBetween={20}
                pagination={{clickable: true}}
            modules={[Pagination]}
            className="mySwiper"
            autoHeight={true}
            slidesPerView={slidesPerViewValue}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <article className={styles.articleSlide}>
                <p className={styles.heightLvl}>
                  {t("swiperSection.startText")}
                </p>
                <img
                  className={styles.swiperSlideIMG}
                  src={SwiperIMG1}
                  alt="oilLavanda"
                />
                <h3 className={styles.titleSlide}>
                  {t("swiperSection.swiperTitle1")}
                </h3>
                <p className={styles.naturalText}>
                  {t("swiperSection.naturalText")}
                </p>
                <p className={styles.opt}>{t("swiperSection.opt")}</p>
                <p className={styles.slidesPrice}>
                  {t("swiperSection.swiperPrice1")}
                </p>
              </article>
              <button className={styles.slidesBtn} onClick={()=> setmodalContact(true)}>
                {t("swiperSection.btn")}
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <article className={styles.articleSlide}>
                <p className={styles.heightLvl}>
                  {t("swiperSection.startText")}
                </p>
                <img
                  className={styles.swiperSlideIMG}
                  src={SwiperIMG2}
                  alt="oilLavanda"
                />
                <h3 className={styles.titleSlide}>
                  {t("swiperSection.swiperTitle2")}
                </h3>
                <p className={styles.naturalText}>
                  {t("swiperSection.naturalText")}
                </p>
                <p className={styles.opt}>{t("swiperSection.opt")}</p>
                <p className={styles.slidesPrice}>
                  {t("swiperSection.swiperPrice2")}
                </p>
              </article>
              <button className={styles.slidesBtn} onClick={()=> setmodalContact(true)}>
                {t("swiperSection.btn")}
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <article className={styles.articleSlide}>
                <p className={styles.heightLvl}>
                  {t("swiperSection.startText")}
                </p>
                <img
                  className={styles.swiperSlideIMG}
                  src={SwiperIMG3}
                  alt="oilLavanda"
                />
                <h3 className={styles.titleSlide}>
                  {t("swiperSection.swiperTitle3")}
                </h3>
                <p className={styles.naturalText}>
                  {t("swiperSection.naturalText")}
                </p>
                <p className={styles.opt}>{t("swiperSection.opt")}</p>
                <p className={styles.slidesPrice}>
                  {t("swiperSection.swiperPrice3")}
                </p>
              </article>
              <button className={styles.slidesBtn} onClick={()=> setmodalContact(true)}>
                {t("swiperSection.btn")}
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <article className={styles.articleSlide}>
                <p className={styles.heightLvl}>
                  {t("swiperSection.startText")}
                </p>
                <img
                  className={styles.swiperSlideIMG}
                  src={SwiperIMG4}
                  alt="oilLavanda"
                />
                <h3 className={styles.titleSlide}>
                  {t("swiperSection.swiperTitle4")}
                </h3>
                <p className={styles.naturalText}>
                  {t("swiperSection.naturalText")}
                </p>
                <p className={styles.opt}>{t("swiperSection.opt")}</p>
                <p className={styles.slidesPrice}>
                  {t("swiperSection.swiperPrice4")}
                </p>
              </article>
              <button className={styles.slidesBtn} onClick={()=> setmodalContact(true)}>
                {t("swiperSection.btn")}
              </button>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <article className={styles.articleSlide}>
                <p className={styles.heightLvl}>
                  {t("swiperSection.startText")}
                </p>
                <img
                  className={styles.swiperSlideIMG}
                  src={SwiperIMG5}
                  alt="oilLavanda"
                />
                <h3 className={styles.titleSlide}>
                  {t("swiperSection.swiperTitle5")}
                </h3>
                <p className={styles.naturalText}>
                  {t("swiperSection.naturalText")}
                </p>
                <p className={styles.opt}>{t("swiperSection.opt")}</p>
                <p className={styles.slidesPrice}>
                  {t("swiperSection.swiperPrice5")}
                </p>
              </article>
              <button className={styles.slidesBtn} onClick={()=> setmodalContact(true)}>
                {t("swiperSection.btn")}
              </button>
            </SwiperSlide>
        </Swiper>
        <Contact
                            isOpen={modalContactIsOpen}
                            onClose={() => setmodalContact(false)}
                          />
      </section>
    );
}