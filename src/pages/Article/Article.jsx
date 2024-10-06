import c from "./Article.module.css";
import Background from "../../assets/resized/pexels-pixabay-159832.jpg";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import ArticleImage from "../../assets/articles/article (1).jpg";

function Article() {
  const location = useLocation();

  const { language, getContent } = useLanguage();
  const articles = getContent().articles;

  return (
    <>
      {articles && language == "tr"
        ? articles.articlesTr?.map((item, i) => {
            return (
              item.id === location.pathname.slice(1).toLowerCase() && (
                <main className={c.container}>
                  <section key={i} className={c.imageContainer}>
                    <img
                      className={c.croppedImage}
                      src={ArticleImage}
                      alt="laws image"
                    />
                    <h1 className={c.textOverlay}>
                      {item.title.toUpperCase()}
                    </h1>
                  </section>
                  <article className={c.aboutContainer}>
                    <br />
                    <br />

                    <div>
                      {item.content.map((subItem, subIndex) => (
                        <div key={subIndex}>
                          <h3>{subItem.title}</h3>
                          <br />
                          <p>{subItem.content}</p>
                          <br />
                          <br />
                        </div>
                      ))}
                    </div>
                  </article>
                </main>
              )
            );
          })
        : articles?.articlesEn?.map((item, i) => {
            return (
              item.id === location.pathname.slice(1).toLowerCase() && (
                <main className={c.container}>
                  <section key={i} className={c.imageContainer}>
                    <img
                      className={c.croppedImage}
                      src={ArticleImage}
                      alt="laws image"
                    />
                    <h1 className={c.textOverlay}>
                      {item.title.toUpperCase()}
                    </h1>
                  </section>
                  <article className={c.aboutContainer}>
                    <br />
                    <br />

                    <div>
                      {item.content.map((subItem, subIndex) => (
                        <div key={subIndex}>
                          <h3>{subItem.title}</h3>
                          <br />
                          <p>{subItem.content}</p>
                          <br />
                          <br />
                        </div>
                      ))}
                    </div>
                  </article>
                </main>
              )
            );
          })}
    </>
  );
}

export default Article;
