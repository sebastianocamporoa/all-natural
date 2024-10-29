import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import { useAppDispatch } from "../redux/hooks";
import {
  updateNewList,
  updateFeaturedList,
} from "../redux/features/productSlice";
import { Product } from "../models/Product";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProducts = () => {
      fetch("https://dummyjson.com/products?limit=24")
        .then((res) => res.json())
        .then(({ products }) => {
          const productList: Product[] = [];
          products.forEach((product: Product) => {
            productList.push({
              id: product.id,
              title: product.title,
              images: product.images,
              price: product.price,
              rating: product.rating,
              thumbnail: product.thumbnail,
              description: product.description,
              category: product.category,
              discountPercentage: product.discountPercentage,
            });
          });
          dispatch(updateFeaturedList(productList.slice(0, 8)));
          dispatch(updateNewList(productList.slice(8, 16)));
        });
    };
    fetchProducts();
  }, [dispatch]);

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
