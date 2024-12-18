import { FC, useEffect, useState } from "react";
import "./HeroSection.css"

const HeroSection: FC = () => {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <div
      className="relative dark:bg-darkBg2 font-theseasons h-screen flex items-center justify-center text-center"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      {/* Imagen inferior izquierda */}
      <img
        src="/hoja-1.svg"
        alt="Imagen inferior izquierda"
        className="absolute bottom-0 left-0 object-contain hoja"
        style={{
          height: `clamp(15vh, 30vw, 45vh)`,
          width: "auto",
        }}
      />

      {/* Imagen superior derecha e invertida */}
      <img
        src="/hoja-2.svg"
        alt="Imagen superior derecha"
        className="absolute top-0 right-0 object-contain transform rotate-180 hoja"
        style={{
          height: `clamp(15vh, 30vw, 45vh)`,
          width: "auto",
        }}
      />

      {/* Contenido central */}
      <div>
        <h1 className="text-black dark:text-white font-bold text-5xl md:text-6xl">
          Se natural, se tú
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
