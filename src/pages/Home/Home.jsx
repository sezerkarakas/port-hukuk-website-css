import c from "./Home.module.css";
import Background from "../../assets/resized/law1 (2).jpg";

import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useLanguage } from "../../LanguageContext"; // Context'ten hook'u getiriyoruz

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
        <h1>{content.aboutTitle}</h1>
        <br />
        <br />
        <p>{content.aboutText1}</p>
        <br />
        <p>{content.aboutText2}</p>
        <br />
        <p>{content.aboutText3}</p>
      </article>
      <section className={c.cardsContainer}>
        <h1>{content.faaliyetTitle}</h1>
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
  );
}

export default Home;
