import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <div className="dark:bg-darkBg2 font-theseasons h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-black dark:text-white font-bold text-5xl md:text-6xl">
        Se natural, se tú
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
