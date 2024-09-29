import { FC, useEffect, useState } from "react";

const HeroSection: FC = () => {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar"); // Suponiendo que tienes un ID en el navbar
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);
  return (
    <div className="relative dark:bg-darkBg2 font-theseasons h-screen flex items-center justify-center text-center"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}>
      {/* Imagen inferior izquierda */}
      <img
        src="/hoja-1.png"
        alt="Imagen inferior izquierda"
        className="absolute bottom-0 left-0 w-1/3 h-1/3" // Ajusta el tamaño de la imagen
      />

      {/* Imagen superior derecha e invertida */}
      <img
        src="/hoja-2.png"
        alt="Imagen superior derecha"
        className="absolute top-0 right-0 w-1/3 h-1/3 transform rotate-180" // Ajusta el tamaño de la imagen e invierte la imagen
      />

      {/* Contenido central */}
      <div>
        <h1 className="text-black dark:text-white font-bold text-5xl md:text-6xl">
          Se natural, sé tú
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
