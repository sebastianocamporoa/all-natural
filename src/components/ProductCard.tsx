import { FC } from "react";
import { Product } from "../models/Product";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import PriceSection from "./PriceSection";

const ProductCard: FC<Product> = ({
  id,
  price,
  thumbnail,
  title,
  category,
  rating,
  discountPercentage,
}) => {
  const dispatch = useAppDispatch();

  const agregarAlCarrito = () => {
    dispatch(
      addToCart({
        id,
        price,
        title,
        category,
        rating,
        thumbnail,
        discountPercentage,
      })
    );
    toast.success("Artículo añadido al carrito con éxito", {
      duration: 3000,
    });
  };

  return (
    <div style={{ backgroundColor: "#DED1BA" }} className="border border-gray-200 font-theseasons rounded-lg" data-test="product-card">
      <div className="text-center border-b border-gray-200">
        <Link to={{ pathname: `/product/${id}` }}>
          <img
            src={thumbnail}
            alt={title}
            className="inline-block h-60 transition-transform duration-200 hover:scale-110"
          />
        </Link>
      </div>
      <div className="px-8 pt-4">
        <p className="text-gray-500 text-[14px] font-medium dark:text-white">
          {category}
        </p>
        <Link
          className="font-semibold hover:underline dark:text-white"
          to={{ pathname: `/product/${id}` }}
        >
          {title}
        </Link>
      </div>
      <div className="flex items-center justify-between px-8 pb-4">
        {discountPercentage && (
          <PriceSection discountPercentage={discountPercentage} price={price} />
        )}
      </div>
      <div className="flex items-center justify-between px-8 pb-4">
        <button
          type="button"
          className="flex items-center space-x-2 hover:bg-darkBg2 text-darkBg2 hover:text-white font-bold py-2 px-4 rounded border border-darkBg2"
          onClick={agregarAlCarrito}
          data-test="add-cart-btn"
        >
          <AiOutlineShoppingCart />
          <span>AÑADIR AL CARRITO</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
