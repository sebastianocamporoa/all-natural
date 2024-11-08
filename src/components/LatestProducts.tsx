import { FC } from "react";
import ProductList from "./ProductList";
import productosData from "../data/products.json";

const newProducts = productosData.slice(-8);

const LatestProducts: FC = () => {
  return <ProductList title="Agregados recientemente" products={newProducts} />;
};

export default LatestProducts;
