import c from "./Articles.module.css";
import Background from "../../assets/resized/makale2.jpg";
import Law1 from "../../assets/resized/nationality.jpg";
import Law2 from "../../assets/resized/ceza.jpg";
import Law3 from "../../assets/resized/pexels-klaus-44936-167676.jpg";
import Law4 from "../../assets/resized/şirket.jpg";
import Law5 from "../../assets/resized/iş2.jpg";
import Law6 from "../../assets/resized/pexels-sora-shimazaki-5668473.jpg";
import Law7 from "../../assets/resized/imar.jpg";
import Law8 from "../../assets/resized/miras.jpg";
import Law9 from "../../assets/resized/aile.jpg";
import Law10 from "../../assets/resized/kisisel-veriler.jpg";
import VerticalCard from "../../components/VerticalCard/VerticalCard";
import ArticleImage from "../../assets/articles/article (1).jpg"

function Articles() {
  const hukuklar = [
    { title: "Boşanma davası nasıl açılır?", image: Law1, route: "vatandaslik" },
    { title: "Ceza", image: Law2, route: "ceza" },
    { title: "Ticaret", image: Law3, route: "ticaret" },
    { title: "Şirketler", image: Law4, route: "sirketler" },
    { title: "İş", image: Law5, route: "is" },
    { title: "İcra ve İflas", image: Law6, route: "icra-ve-iflas" },
    { title: "İmar", image: Law7, route: "imar" },
    { title: "Miras", image: Law8, route: "miras" },
    { title: "Aile", image: Law9, route: "aile" },
    {
      title: "Kişisel Verilerin Korunması",
      image: Law10,
      route: "kisisel-veriler",
    },
  ];

  return (
    <main className={c.container}>
      <section className={c.imageContainer}>
        <img className={c.croppedImage} src={Background} alt="works image" />
        <h1 className={c.textOverlay}>MAKALELER</h1>
      </section>

      <section className={c.cardsContainer}>
        <br />
        <br />
        <div className={c.cards}>
          {hukuklar.map((hukuk, i) => (
            <VerticalCard
              key={i}
              title={hukuk.title}
              image={ArticleImage}
              route={hukuk.route}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus nec libero ultricies ultricies nec nec libero. Nulla nec purus nec libero ultricies ultricies nec nec libero."}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Articles;
