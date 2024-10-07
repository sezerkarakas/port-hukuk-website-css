import { createContext, useContext, useEffect, useState } from "react";
import Law1 from "./assets/resized/nationality.jpg";
import Law2 from "./assets/resized/ceza.jpg";
import Law3 from "./assets/resized/pexels-klaus-44936-167676.jpg";
import Law4 from "./assets/resized/şirket.jpg";
import Law5 from "./assets/resized/iş2.jpg";
import Law6 from "./assets/resized/pexels-sora-shimazaki-5668473.jpg";
import Law7 from "./assets/resized/imar.jpg";
import Law8 from "./assets/resized/miras.jpg";
import Law9 from "./assets/resized/aile.jpg";
import Law10 from "./assets/resized/kisisel-veriler.jpg";

// Dil Context'i oluşturuluyor
const LanguageContext = createContext();

// Dil sağlayıcı (provider) bileşeni
// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");
  const [aboutData, setAboutData] = useState(null);
  const [lawData, setLawData] = useState(null);
  const [articles, setArticles] = useState(null);

  const hukuklar = [
    {
      title: "Vatandaşlık Hukuku",
      titleEn: "Citizenship Law",
      image: Law1,
      route: "vatandaslik",
    },
    {
      title: "Ceza Hukuku",
      titleEn: "Criminal Law",
      image: Law2,
      route: "ceza",
    },
    {
      title: "Ticaret Hukuku",
      titleEn: "Trade Law",
      image: Law3,
      route: "ticaret",
    },
    {
      title: "Şirketler Hukuku",
      titleEn: "Corporate Law",
      image: Law4,
      route: "sirketler",
    },
    { title: "İş Hukuku", titleEn: "Labor Law", image: Law5, route: "is" },
    {
      title: "İcra ve İflas Hukuku",
      titleEn: "Enforcement & Bankruptcy Law",
      image: Law6,
      route: "icra-ve-iflas",
    },
    { title: "İmar Hukuku", titleEn: "Zoning Law", image: Law7, route: "imar" },
    {
      title: "Miras Hukuku",
      titleEn: "Inheritance Law",
      image: Law8,
      route: "miras",
    },
    { title: "Aile Hukuku", titleEn: "Family Law", image: Law9, route: "aile" },
    {
      title: "Kişisel Verilerin Korunması Hukuku",
      titleEn: "Personal Data Protection Law",
      image: Law10,
      route: "kisisel-veriler",
    },
  ];

  useEffect(() => {
    fetch("/AboutTexts.json") // Eğer public klasöründeyse bu yolu kullanın
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ağ isteği hatası: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setAboutData(data); // Veriyi state'e kaydet
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("/Laws.json") // Eğer public klasöründeyse bu yolu kullanın
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ağ isteği hatası: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // Veriyi konsola yazdır
        setLawData(data); // Veriyi state'e kaydet
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("/Articles.json") // Eğer public klasöründeyse bu yolu kullanın
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ağ isteği hatası: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log("articles", data); // Veriyi konsola yazdır
        setArticles(data); // Veriyi state'e kaydet
      })
      .catch((err) => console.log(err));
  }, []);

  // Türkçe metinler
  const quotesTr = ["BAĞIMSIZ", "YENİLİKÇİ", "GÜVENİLİR", "DETAYCI"];
  const aboutTitleTr = "HAKKIMIZDA";

  const faaliyetTitleTr = "FAALIYET ALANLARIMIZ";
  const buttonTextTr = "TÜM ÇALIŞMA ALANLARIMIZ";

  const navbarItemsTr = [
    "Anasayfa",
    "Faaliyet Alanlarımız",
    "Makaleler",
    "Hakkımızda",
    "İletişim",
  ];

  const footerContactTitleTr = "İLETİŞİM BİLGİLERİMİZ";
  const footerSocialTitleTr = "SOSYAL MEDYA";
  const footerLinesTr = ["Adres", "Ofis Telefonu", "Cep Telefonu", "E-Mail"];

  const contactHeaderTr = "İLETİŞİM";
  const contactTitleTr = "BİZE ULAŞIN";

  const articlesTitleTr = "MAKALELER";

  const makaleButtonTr = "TÜM MAKALELER";

  // İngilizce metinler
  const quotesEn = ["INDEPENDENT", "INNOVATIVE", "RELIABLE", "DETAILED"];
  const aboutTitleEn = "ABOUT US";

  const faaliyetTitleEn = "OUR PRACTICE AREAS";
  const buttonTextEn = "ALL PRACTICE AREAS";

  const navbarItemsEn = [
    "Home",
    "Our Practice Areas",
    "Articles",
    "About Us",
    "Contact",
  ];
  const footerContactTitleEn = "OUR CONTACT INFORMATION";
  const footerSocialTitleEn = "SOCIAL MEDIA";
  const footerLinesEn = ["Address", "Office Phone", "Mobile Phone", "E-Mail"];

  const contactHeaderEn = "CONTACT";
  const contactTitleEn = "GET IN TOUCH";

  const articlesTitleEn = "ARTICLES";
  const makaleButtonEn = "ALL ARTICLES";

  // Metinleri ve dili dinamik olarak döndüren bir fonksiyon
  const getContent = () => {
    if (language === "tr") {
      return {
        quotes: quotesTr,
        aboutTitle: aboutTitleTr,
        aboutText1: aboutData?.tr.aboutText1,
        aboutText2: aboutData?.tr.aboutText2,
        aboutText3: aboutData?.tr.aboutText3,
        aboutText4: aboutData?.tr.aboutText4,
        faaliyetTitle: faaliyetTitleTr,
        buttonText: buttonTextTr,
        navbar: navbarItemsTr,
        footerContact: footerContactTitleTr,
        footerSocial: footerSocialTitleTr,
        footerLines: footerLinesTr,
        contactHeader: contactHeaderTr,
        contactTitle: contactTitleTr,
        hukuklar: hukuklar,
        lawData: lawData,
        articles: articles,
        articlesTitle: articlesTitleTr,
        makaleButton: makaleButtonTr,
      };
    } else {
      return {
        quotes: quotesEn,
        aboutTitle: aboutTitleEn,
        aboutText1: aboutData?.en.aboutText1,
        aboutText2: aboutData?.en.aboutText2,
        aboutText3: aboutData?.en.aboutText3,
        aboutText4: aboutData?.en.aboutText4,
        faaliyetTitle: faaliyetTitleEn,
        buttonText: buttonTextEn,
        navbar: navbarItemsEn,
        footerContact: footerContactTitleEn,
        footerSocial: footerSocialTitleEn,
        footerLines: footerLinesEn,
        contactHeader: contactHeaderEn,
        contactTitle: contactTitleEn,
        hukuklar: hukuklar,
        lawData: lawData,
        articles: articles,
        articlesTitle: articlesTitleEn,
        makaleButton: makaleButtonEn,
      };
    }
  };

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "tr" ? "en" : "tr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getContent }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Context kullanımı için özel hook
export const useLanguage = () => useContext(LanguageContext);
