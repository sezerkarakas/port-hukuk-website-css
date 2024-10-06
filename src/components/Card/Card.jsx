import c from "./Card.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ image, title = "Vatandaşlık", route }) {
  return (
    <Link to={`/${route}`} className={c.card}>
      <div className={c.imageContainer}>
        <img className={c.croppedImage} src={image} alt="card image" />
      </div>
      <div className={c.rightSection}>
        <h3>{title.toUpperCase()}</h3>
        <button className={c.linkButton}>Detaylı Bilgi</button>
      </div>
    </Link>
  );
}

export default Card;
