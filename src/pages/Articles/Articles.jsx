import c from "./Articles.module.css";
import Background from "../../assets/resized/makale2.jpg";

import VerticalCard from "../../components/VerticalCard/VerticalCard";
import ArticleImage from "../../assets/articles/article (1).jpg";
import { useLanguage } from "../../LanguageContext";

function Articles() {
  const { language, getContent } = useLanguage();
  const content = getContent();
  const articles = getContent().articles;

  console.log(articles);

  return (
    <main className={c.container}>
      <section className={c.imageContainer}>
        <img className={c.croppedImage} src={Background} alt="works image" />
        <h1 className={c.textOverlay}>{content.articlesTitle}</h1>
      </section>

      <section className={c.cardsContainer}>
        <br />
        <br />
        <div className={c.cards}>
          {language == "tr"
            ? articles?.articlesTr?.map((hukuk, i) => (
                <VerticalCard
                  key={i}
                  title={hukuk.title}
                  image={ArticleImage}
                  route={hukuk.id}
                  text={hukuk.content[0].content.slice(0, 200) + "..."}
                />
              ))
            : articles?.articlesEn?.map((article, i) => (
                <VerticalCard
                  key={i}
                  title={article.title}
                  image={ArticleImage}
                  route={article.id}
                  text={article.content[0].content.slice(0, 200) + "..."}
                />
              ))}
        </div>
      </section>
    </main>
  );
}

export default Articles;
