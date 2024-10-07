import c from "./Home.module.css";
import Background from "../../assets/resized/law1 (2).jpg";
import ArticleImage from "../../assets/articles/article (1).jpg";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useLanguage } from "../../LanguageContext"; // Context'ten hook'u getiriyoruz
import VerticalCard from "../../components/VerticalCard/VerticalCard";
import { Helmet } from "react-helmet";

function Home() {
  const { language, getContent } = useLanguage(); // Context'teki değerleri alıyoruz
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const content = getContent(); // Dil bazlı içerik

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuoteIndex(
          (prevIndex) => (prevIndex + 1) % content.quotes.length
        );
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [content.quotes.length]);

  return (
    <>
      <Helmet>
        <title>{language == "tr" ? "ANASAYFA": "HOMEPAGE"} - PORT HUKUK</title>
        <meta name="description" content="Bu sayfada hakkımızda bilgi sahibi olabileceğiniz yazılar, makaleler ve hukuk alanları yer alır." />
      </Helmet>

      <main className={c.container}>
        <section className={c.imageContainer}>
          <img className={c.croppedImage} src={Background} alt="main image" />
          <h1 className={c.textOverlay}>
            <span className={`${c.quote} ${fade ? c.fadeIn : c.fadeOut}`}>
              {content.quotes[currentQuoteIndex]}
            </span>{" "}
            {language === "tr" ? "GÜÇLÜ KADRO" : "STRONG TEAM"}
          </h1>
        </section>
        <article className={c.aboutContainer}>
          <h2>{content.aboutTitle}</h2>
          <br />
          <br />
          <p>{content.aboutText1}</p>
          <br />
          <p>{content.aboutText2}</p>
          <br />
          <p>{content.aboutText3}</p>
          <br />
          <p>{content.aboutText4}</p>
        </article>
        <section className={c.verticalCardsContainer}>
          <h2>{content.articlesTitle}</h2>
          <br />
          <br />
          <section className={c.verticalCards}>
            {language == "tr"
              ? content.articles?.articlesTr
                  ?.slice(0, 3)
                  .map((hukuk, i) => (
                    <VerticalCard
                      key={i}
                      title={hukuk.title}
                      image={ArticleImage}
                      route={hukuk.id}
                      text={hukuk.content[0].content.slice(0, 200) + "..."}
                    />
                  ))
              : content.articles?.articlesEn
                  ?.slice(0, 3)
                  .map((article, i) => (
                    <VerticalCard
                      key={i}
                      title={article.title}
                      image={ArticleImage}
                      route={article.id}
                      text={article.content[0].content.slice(0, 200) + "..."}
                    />
                  ))}
          </section>
          <br />
          <Link to={"/makaleler"}>
            <button className={c.linkButton}>{content.makaleButton}</button>
          </Link>
        </section>
        <section className={c.cardsContainer}>
          <h2>{content.faaliyetTitle}</h2>
          <br />
          <br />
          <section className={c.cards}>
            {content.hukuklar.slice(0, 6).map((hukuk, index) => (
              <Card
                key={index}
                title={language === "tr" ? hukuk.title : hukuk.titleEn}
                image={hukuk.image}
                route={hukuk.route}
              />
            ))}
          </section>
        </section>
        <Link to={"/faaliyet-alanlari"}>
          <button className={c.linkButton}>{content.buttonText}</button>
        </Link>
      </main>
    </>
  );
}

export default Home;
