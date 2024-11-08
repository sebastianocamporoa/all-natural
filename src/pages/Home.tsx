import { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Home: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Flecha personalizada para ir a la diapositiva anterior
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  // Flecha personalizada para ir a la diapositiva siguiente
  const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const heroSlides = [
    { id: 1, title: "Hero 1", image: "/25.jpg" },
    { id: 2, title: "Hero 2", image: "/24.jpg" },
    { id: 3, title: "Hero 3", image: "/21.jpg" },
  ];

  return (
    <>
      <Helmet>
        <meta name="keywords" content="joyería sostenible, piedras de Murano, joyería artesanal, lujo ecológico, tendencias en joyería, productos naturales, pulseras de moda, anillos sostenibles, collares ecológicos, All Natural" />
        <meta name="author" content="All Natural" />
        <meta name="publisher" content="All Natural" />
        <link rel="canonical" href="https://allnaturaljoyas.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="dark:bg-darkBg overflow-x-hidden">
        <HeroSection />

        {/* Contenedor para el slider con margen lateral */}
        <div className="px-4 container mx-auto">
          <Slider {...settings}>
            {heroSlides.map((slide, index) => (
              <div key={slide.id}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`md:h-auto lg:h-[900px] object-contain ${index === currentSlide ? "animate-zoom" : ""}`}
                />
              </div>
            ))}
          </Slider>
        </div>

        <Features />
        <TrendingProducts />
        <Banner />
        <LatestProducts />
        <br />
      </div>
    </>
  );
};

export default Home;
