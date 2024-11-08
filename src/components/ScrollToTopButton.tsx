import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mensajeCodificado = encodeURIComponent(
    `Hola 😊, estoy interesado/a en la compra de sus joyas. ¿Podrían confirmarme si el producto que elegí está disponible? También me gustaría saber cómo es el proceso de compra y envío 📦. ¿Tendrían alguna recomendación para ayudarme a elegir entre las piezas? ¡Gracias!`);

  const numeroTelefono = "51949477801";
  const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-8 z-50 flex flex-col">
      <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer" className="pb-2">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" style={{ color: 'green' }} />
      </a>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 dark:bg-white text-white dark:text-slate-800 rounded-full h-10 w-10 shadow-md hover:bg-gray-700 transition-opacity duration-300 opacity-50 hover:opacity-100"
        >
          <IoIosArrowUp size={30} className="m-auto" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
