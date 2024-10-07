import React, { useEffect, useState } from "react";
import c from "./Laws.module.css";
import Background from "../../assets/resized/pexels-pixabay-159832.jpg";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import { Helmet } from "react-helmet";

function Laws() {
  const location = useLocation();

  const { language, getContent } = useLanguage();
  const lawData = getContent().lawData;

  return (
    <>
      {lawData && language == "tr"
        ? lawData.contentTr?.map((item, i) => {
            return (
              item.id === location.pathname.slice(1).toLowerCase() && (
                <>
                  <Helmet>
                    <title>{item.title.toUpperCase()} - PORT HUKUK</title>
                    <meta
                      name="description"
                      content="Bu sayfada hukuk alanı hakkında bilgi sahibi olabilirsiniz."
                    />
                  </Helmet>
                  <main className={c.container}>
                    <section key={i} className={c.imageContainer}>
                      <img
                        className={c.croppedImage}
                        src={Background}
                        alt="laws image"
                      />
                      <h1 className={c.textOverlay}>
                        {item.title.toUpperCase()} HUKUKU
                      </h1>
                    </section>
                    <article className={c.aboutContainer}>
                      <br />
                      <br />

                      <div>
                        {item.content.map((subItem, subIndex) => (
                          <div key={subIndex}>
                            <h3>{subItem.title}</h3>
                            <p>{subItem.content}</p>
                            <br />
                          </div>
                        ))}
                      </div>
                    </article>
                  </main>
                </>
              )
            );
          })
        : lawData.contentEn?.map((item, i) => {
            return (
              item.id === location.pathname.slice(1).toLowerCase() && (
                <>
                  <Helmet>
                    <title>{item.title.toUpperCase()} - PORT HUKUK</title>
                    <meta
                      name="description"
                      content="Bu sayfada hukuk alanı hakkında bilgi sahibi olabilirsiniz."
                    />
                  </Helmet>
                  <main className={c.container}>
                    <section key={i} className={c.imageContainer}>
                      <img
                        className={c.croppedImage}
                        src={Background}
                        alt="laws image"
                      />
                      <h1 className={c.textOverlay}>
                        {item.title.toUpperCase()} LAW
                      </h1>
                    </section>
                    <article className={c.aboutContainer}>
                      <br />
                      <br />

                      <div>
                        {item.content.map((subItem, subIndex) => (
                          <div key={subIndex}>
                            <h3>{subItem.title}</h3>
                            <p>{subItem.content}</p>
                            <br />
                          </div>
                        ))}
                      </div>
                    </article>
                  </main>
                </>
              )
            );
          })}
    </>
  );
}

export default Laws;
