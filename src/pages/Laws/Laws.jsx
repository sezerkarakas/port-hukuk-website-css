import React, { useEffect, useState } from "react";
import c from "./Laws.module.css";
import Background from "../../assets/resized/pexels-pixabay-159832.jpg";
import { useLocation } from "react-router-dom";

function Laws() {
  const location = useLocation();
  console.log("location", location);
  const [lawData, setLawData] = useState(null);

  useEffect(() => {
    fetch("/Laws.json") // Eğer public klasöründeyse bu yolu kullanın
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ağ isteği hatası: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data); // Veriyi konsola yazdır
        setLawData(data); // Veriyi state'e kaydet
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {lawData &&
        lawData.content.map((item, i) => {
          return (
            item.id === location.pathname.slice(1).toLowerCase() && (
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
            )
          );
        })}
    </>
  );
}

export default Laws;
