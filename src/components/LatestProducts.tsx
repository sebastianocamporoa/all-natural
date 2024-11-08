import { FC } from "react";
import ProductList from "./ProductList";
import productosData from "../data/products.json";

const LatestProducts: FC = () => {
  // Obtiene los últimos 8 productos del JSON
  const newProducts = productosData.slice(-8);

  return <ProductList title="Agregados recientemente" products={newProducts} />;
};

export default LatestProducts;
