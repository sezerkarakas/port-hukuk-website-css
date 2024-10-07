import c from "./Works.module.css";
import Background from "../../assets/resized/pexels-pixabay-159832.jpg";

import Card from "../../components/Card/Card";
import { useLanguage } from "../../LanguageContext";
import { Helmet } from "react-helmet";

function Works() {
  const { language, getContent } = useLanguage();
  const content = getContent();

  return (
    <>
      <Helmet>
        <title>{content.faaliyetTitle} - PORT HUKUK</title>
        <meta name="description" content="Bu sayfada faaliyet gösterdiğimiz hukuk alanlarını görebilirsiniz." />
      </Helmet>
      <main className={c.container}>
        <section className={c.imageContainer}>
          <img className={c.croppedImage} src={Background} alt="works image" />
          <h1 className={c.textOverlay}>{content.faaliyetTitle}</h1>
        </section>

        <section className={c.cardsContainer}>
          <br />
          <br />
          <div className={c.cards}>
            {content.hukuklar.map((hukuk, i) => (
              <Card
                key={i}
                title={language === "tr" ? hukuk.title : hukuk.titleEn}
                image={hukuk.image}
                route={hukuk.route}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Works;
