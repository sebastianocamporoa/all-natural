import { FC, useEffect, useState } from "react";
import { Product } from "../models/Product";
import ProductList from "./ProductList";
import productosData from "../data/products.json";

const TrendingProducts: FC = () => {

  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Selecciona 8 productos aleatorios tipando 'products' como 'Product[]'
    const getRandomProducts = (products: Product[], count: number): Product[] => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    setFeaturedProducts(getRandomProducts(productosData, 8));
  }, []);

  return <ProductList title="Productos en tendencia" products={featuredProducts} />;
};

export default TrendingProducts;
