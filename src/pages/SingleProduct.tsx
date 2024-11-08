import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { addToCart, setCartState } from "../redux/features/cartSlice";
import { Product } from "../models/Product";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import ProductList from "../components/ProductList";
import productosData from "../data/products.json";
import { Helmet } from "react-helmet";

const SingleProduct: FC = () => {
  const dispatch = useAppDispatch();
  const { productID } = useParams();
  const [product, setProduct] = useState<Product>();
  const [imgs, setImgs] = useState<string[]>();
  const [selectedImg, setSelectedImg] = useState<string>();
  const [sCategory, setScategory] = useState<string>();
  const [similar, setSimilar] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductDetails = () => {
      // Encuentra el producto en el JSON por el `id` relacionado con el título
      const foundProduct = productosData.find(
        (prod) => prod.id === productID
      );
      if (foundProduct) {
        setProduct(foundProduct);
        setImgs(foundProduct.images);
        setScategory(foundProduct.category);
        setSelectedImg(foundProduct.images ? foundProduct.images[0] : "");
      }
    };
    fetchProductDetails();
  }, [productID]);

  useEffect(() => {
    const getRandomProducts = (products: Product[], count: number): Product[] => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    setSimilar(getRandomProducts(productosData, 4));
  }, [productID, sCategory]);

  const addCart = () => {
    if (product)
      dispatch(
        addToCart({
          id: product.id,
          price: product.price,
          title: product.title,
          category: product.category,
          rating: product.rating,
          thumbnail: product.images ? product.images[0] : "",
          discountPercentage: product.discountPercentage,
        })
      );
    toast.success("Artículo añadido al carrito con éxito", {
      duration: 3000,
    });
  };

  const buyNow = () => {
    if (product)
      dispatch(
        addToCart({
          id: product.id,
          price: product.price,
          title: product.title,
          category: product.category,
          rating: product.rating,
          thumbnail: product.images ? product.images[0] : "",
          discountPercentage: product.discountPercentage,
        })
      );
    dispatch(setCartState(true));
  };

  return (
    <>
      <Helmet>
        <meta name="keywords" content="joyería sostenible, piedras de Murano, joyería artesanal, lujo ecológico, tendencias en joyería, productos naturales, pulseras de moda, anillos sostenibles, collares ecológicos, All Natural" />
        <meta name="author" content="All Natural" />
        <meta name="publisher" content="All Natural" />
        <link rel="canonical" href="https://allnaturaljoyas.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="container mx-auto pt-8 dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 font-theseasons">
          <div className="space-y-2">
            <img src={selectedImg} alt="seleccionada" className="h-80" />
            <div className="flex space-x-1 items-center">
              {imgs &&
                imgs.map((_img) => (
                  <img
                    src={_img}
                    key={_img}
                    alt="miniatura"
                    className={`w-12 cursor-pointer hover:border-2 hover:border-black ${_img === selectedImg ? "border-2 border-black" : ""
                      }`}
                    onClick={() => setSelectedImg(_img)}
                  />
                ))}
            </div>
          </div>
          <div className="px-2">
            <h1 className="text-4xl font-bold mb-4">{product?.title}</h1>
            <div className="mt-1 text-lg">
              c/u {product?.price} soles
              {/* {product?.discountPercentage && (
              <PriceSection
                discountPercentage={product.discountPercentage}
                price={product.price}
              />
            )} */}
            </div>
            <div className="mt-2">
              <h2 className="font-bold text-lg">Sobre el producto</h2>
              <p className="leading-5 text-lg">
                {product?.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
              <button
                type="button"
                className="flex items-center space-x-2 hover:bg-darkBg2 text-darkBg2 hover:text-white font-bold py-2 px-4 rounded border border-darkBg2 mb-2"
                onClick={addCart}
              >
                <AiOutlineShoppingCart />
                <span>AÑADIR AL CARRITO</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-2 hover:bg-darkBg2 text-darkBg2 hover:text-white font-bold py-2 px-4 rounded border border-darkBg2 mb-2"
                onClick={buyNow}
              >
                <FaHandHoldingDollar />
                <span>COMPRAR AHORA</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-4" />
        <ProductList title="Productos similares" products={similar} />
        <br />
      </div>
    </>
  );
};

export default SingleProduct;
