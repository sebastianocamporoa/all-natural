import { FC } from "react";
import { Link } from "react-router-dom";

const Banner: FC = () => (
  <div className="container mt-8 mx-auto px-4 md:flex font-theseasons">
    <img src="/25.jpg" alt="banner" className="md:w-1/2" />
    <div className="bg-[#DED1BA] dark:bg-slate-600 dark:text-white md:w-1/2 flex flex-col items-center text-center justify-center p-4">
      <h2 className="text-4xl font-bold mb-1">No te pierdas la oferta</h2>
      <h2 className="text-3xl font-semibold mb-4">Aprovecha ahora</h2>
      <Link
        to="/product/tierra-viva"
        className="flex items-center space-x-2 hover:bg-darkBg2 text-darkBg2 hover:text-white font-bold py-2 px-4 rounded border border-darkBg2"
        data-test="banner-btn"
      >
        Comprar ahora
      </Link>
    </div>
  </div>
);

export default Banner;
