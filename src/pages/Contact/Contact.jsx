import c from "./Contact.module.css";
import Law2 from "../../assets/resized/pexels-219256525-11966989 (1).jpg";
import MapComponent from "../../components/MapComponent/MapComponent";
import Logo from "../../assets/port-hukuk-logo.png";
import { useLanguage } from "../../LanguageContext";
import { Helmet } from "react-helmet";

function Contact() {
  const { getContent } = useLanguage();
  const content = getContent();
  return (
    <>
      <Helmet>
        <title>{content.contactHeader} - PORT HUKUK</title>
        <meta name="description" content="Bu sayfada bize ulaşabileceğiniz iletişim kanallarını ve büromuzun konumunu bulabilirsiniz." />
      </Helmet>
      <main className={c.container}>
        <section className={c.imageContainer}>
          <img className={c.croppedImage} src={Law2} alt="contact image" />
          <h1 className={c.textOverlay}>{content.contactHeader}</h1>
        </section>
        <section className={c.aboutContainer}>
          <h1>{content.contactTitle}</h1>
          <section className={c.logoAndContact}>
            <div className={c.logoContainer}>
              <img src={Logo} alt="port hukuk logo" />
            </div>

            <div className={c.contactContainer}>
              <ul>
                <li>
                  <h4>{content.footerLines[0].toUpperCase()}</h4>
                  <p>
                    Kızılsaray Mah. 78 Sk. Yener Ulusoy Bulv. Nazlı Apt. No:23
                    K:2/6 Muratpaşa/ANTALYA
                  </p>
                </li>
                <li>
                  <h4>
                    {content.footerLines[0] == "Adres" ? "TELEFON" : "PHONE"}
                  </h4>
                  {content.footerLines[1]}:{" "}
                  <a href="tel:+902422410778">+90 (242) 241 07 78</a>
                  <br />
                  {content.footerLines[2]}:{" "}
                  <a href="tel:+905318596732">+90 (531) 859 67 32</a>
                </li>
                <li>
                  <h4>{content.footerLines[3].toUpperCase()}</h4>
                  <p>kenanmengi@hotmail.com</p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        <div className={c.mapContainer}>
          <MapComponent />
        </div>
      </main>
    </>
  );
}

export default Contact;
