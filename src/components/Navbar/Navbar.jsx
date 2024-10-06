import { useState } from "react";
import c from "./Navbar.module.css";
import Logo from "../../assets/PORT-hukuk-yan.svg";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, getContent } = useLanguage();

  const content = getContent();

  const location = useLocation();
  console.log(location.pathname);

  const routes = [
    { path: "/", name: content.navbar[0] },
    { path: "/faaliyet-alanlari", name: content.navbar[1] },
    { path: "/makaleler", name: content.navbar[2] },
    { path: "/hakkimizda", name: content.navbar[3] },
    { path: "/iletisim", name: content.navbar[4] },
  ];

  const worksRoutes = [
    "/vatandaslik",
    "/ceza",
    "/ticaret",
    "/sirketler",
    "/is",
    "/icra-ve-iflas",
    "/imar",
    "/miras",
    "/aile",
    "/kisisel-veriler",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={c.container}>
      <Link onClick={() => setIsOpen(false)} to={"/"}>
        <img src={Logo} alt="Logo" width={200} height={200} />
      </Link>
      <div className={c.hamburger} onClick={toggleMenu}>
        <div className={c.bar}></div>
        <div className={c.bar}></div>
        <div className={c.bar}></div>
      </div>
      <ul className={`${c.routesUl} ${isOpen ? c.open : ""}`}>
        {routes.map((route, index) => {
          const isFaaliyetActive =
            route.path === "/faaliyet-alanlari" &&
            worksRoutes.includes(location.pathname);
          return (
            <li
              className={`${c.routeLi} ${
                location.pathname === route.path || isFaaliyetActive
                  ? c.activeElement
                  : ""
              }`}
              key={index}
            >
              <Link
                onClick={() => setIsOpen(false)}
                className={c.innerRouteLi}
                to={`${route.path.toLowerCase()}`}
              >
                {route.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
      <h4 onClick={toggleLanguage} className={c.languageToggle}>
        {/* {language === "tr" ? "İngilizceye Geç" : "Switch to Turkish"} */}
        EN|TR
      </h4>
    </nav>
  );
}

export default Navbar;
