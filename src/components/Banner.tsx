import { FC } from "react";
import { Link } from "react-router-dom";

const Banner: FC = () => (
  <div className="container mt-8 mx-auto px-4 md:flex font-theseasons">
    <img src="/banner.jpg" alt="banner" className="md:w-1/2" />
    <div className="bg-[#866c5a] dark:bg-slate-600 dark:text-white md:w-1/2 flex flex-col items-center text-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-1">No te pierdas la oferta</h1>
      <h2 className="text-3xl font-semibold mb-4">Aprovecha ahora</h2>
      <Link
        to="/product/4"
        className="inline-block bg-colorGreen dark:bg-darkBg rounded-md px-6 py-3 hover:bg-colorGreen2 hover:text-white"
        data-test="banner-btn"
      >
        Comprar ahora
      </Link>
    </div>
  </div>
);

export default Banner;
