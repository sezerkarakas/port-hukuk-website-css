import { useState, useEffect } from "react";
import c from "./VerticalCard.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function VerticalCard({ image, text = null, title = "Vatandaşlık", route }) {
  // Renk için state tanımlıyoruz
  const [color, setColor] = useState("red");

  // useEffect ile her saniyede bir renk değiştirme işlemi yapacağız
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => (prevColor === "blue" ? "black" : "darkblue"));
    }, 2000);

    // Temizleme işlemi
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Link to={`/${route}`} className={c.card}>
      <div className={c.imageContainer}>
        <img className={c.croppedImage} src={image} alt="card image" />
      </div>
      <div className={c.rightSection}>
        <h3>{title}</h3>
        <p className={c.text}>{text}</p>
        {/* Buton rengini state'den aldığımız `color` ile ayarlıyoruz */}
        <Link style={{ color: color }} className={c.linkTag}>
          DETAYLI BİLGİ
        </Link>
      </div>
    </Link>
  );
}

export default VerticalCard;
