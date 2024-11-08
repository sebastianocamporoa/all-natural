import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { addToCart, setCartState } from "../redux/features/cartSlice";
import { Product } from "../models/Product";
import PriceSection from "../components/PriceSection";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import ProductList from "../components/ProductList";
import productosData from "../data/products.json"; // Importa tu archivo JSON

const lorem =
  "Es importante cuidar al paciente, ser seguido por el paciente, pero ocurrirá en tal momento que hay mucho trabajo y dolor. Para llegar al menor detalle, nadie debe practicar ningún tipo de trabajo a menos que obtenga algún beneficio de él. No se enfade con el dolor en la reprimenda, en el placer que quiere ser un cabello del dolor con la esperanza de que no hay crianza. A menos que estén cegados por la lujuria, no salen; están en falta los que abandonan sus deberes y ablandan sus corazones, es decir, sus labores.";

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
    const fetchPreferences = () => {
      // Filtra productos similares por categoría
      const similarProducts = productosData.filter(
        (prod) => prod.category === sCategory && prod.id !== productID
      );
      setSimilar(similarProducts);
    };
    if (sCategory) fetchPreferences();
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
          <h2 className="text-2xl">{product?.title}</h2>
          <div className="mt-1">
            {product?.discountPercentage && (
              <PriceSection
                discountPercentage={product.discountPercentage}
                price={product.price}
              />
            )}
          </div>
          <table className="mt-2">
            <tbody>
              <tr>
                <td className="pr-2 font-bold">Marca</td>
                <td>{product?.brand}</td>
              </tr>
              <tr>
                <td className="pr-2 font-bold">Categoría</td>
                <td>{product?.category}</td>
              </tr>
              <tr>
                <td className="pr-2 font-bold">Stock</td>
                <td>{product?.stock}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2">
            <h2 className="font-bold">Sobre el producto</h2>
            <p className="leading-5">
              {product?.description} {lorem}
            </p>
          </div>
          <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
            <button
              type="button"
              className="flex items-center space-x-1 mb-2 hover:bg-pink-700 text-white p-2 rounded bg-pink-500"
              onClick={addCart}
            >
              <AiOutlineShoppingCart />
              <span>AÑADIR AL CARRITO</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-1 mb-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
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
  );
};

export default SingleProduct;
