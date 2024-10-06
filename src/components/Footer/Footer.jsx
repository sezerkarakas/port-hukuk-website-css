import c from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../LanguageContext";

const Footer = () => {
  const { getContent } = useLanguage();
  const content = getContent();

  return (
    <footer className={`${c.footer} ${c.fixedFooter}`}>
      <div className={c.footerContainer}>
        <section className={c.footerColumn}>
          <h3>{content.footerContact}</h3>
          <br />
          <ul>
            <li>
              <label>{content.footerLines[0]}: </label>
              <a href="https://www.google.com/maps?q=36.892471, 30.69932">
                Kızılsaray Mah. 78 Sk. Yener Ulusoy Bulv. Nazlı Apt. No:23 K:2/6
                Muratpaşa/ANTALYA
              </a>
            </li>
            <li>
              <label>{content.footerLines[1]}: </label>
              <a href="tel:+902422410778">+90 (242) 241 07 78</a>
            </li>
            <li>
              <label>{content.footerLines[2]}: </label>
              <a href="tel:+905318596732">+90 (531) 859 67 32</a>
            </li>
            <li>
              <label>{content.footerLines[3]}: </label>
              <a href="mailto:kenanmengi@hotmail.com">kenanmengi@hotmail.com</a>
            </li>
          </ul>
        </section>
        <section className={c.footerColumn}>
          <h3>{content.footerSocial}</h3>
          <br />
          <ul className={c.socialIcons}>
            <li>
              <a
                href="https://www.instagram.com/porthukuk"
                target="_blank"
                rel="noopener noreferrer"
                className={c.socialIcon}
                style={{ color: "white", backgroundColor: "purple" }}
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+905318596732"
                target="_blank"
                rel="noopener noreferrer"
                className={c.socialIcon}
                style={{ color: "white", backgroundColor: "green" }}
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="mailto:kenanmengi@hotmail.com"
                className={c.socialIcon}
                style={{ color: "white", backgroundColor: "black" }}
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className={c.footerBottom}>
        <p>&copy; 2024 PORT HUKUK. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
