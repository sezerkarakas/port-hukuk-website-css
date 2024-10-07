import c from "./About.module.css";
// import Law1 from "../../assets/resized/pexels-pavel-danilyuk-8112199.jpg";
import Law1 from "../../assets/resized/pexels-matthiaszomer-618158 (1).jpg";
import { useLanguage } from "../../LanguageContext";
import { Helmet } from "react-helmet";

function About() {
  const { getContent } = useLanguage();
  const content = getContent();
  return (
    <>
      <Helmet>
        <title>{content.aboutTitle} - PORT HUKUK</title>
        <meta
          name="description"
          content="Bu sayfada hakkımızda bilgi sahibi olabileceğiniz yazılar yer alır."
        />
      </Helmet>
      <main className={c.container}>
        <section className={c.imageContainer}>
          <img className={c.croppedImage} src={Law1} alt="about image" />
          <h1 className={c.textOverlay}>{content.aboutTitle}</h1>
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
          <br />
          <p>{content.aboutText4}</p>
        </article>
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}

export default About;
