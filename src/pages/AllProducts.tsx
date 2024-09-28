import { FC, useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addProducts } from "../redux/features/productSlice";
import ProductCard from "../components/ProductCard";
import { Product } from "../models/Product";

const TodosLosProductos: FC = () => {
  const dispatch = useAppDispatch();
  const sortRef = useRef<HTMLSelectElement>(null);
  const [productosActuales, setProductosActuales] = useState<Product[]>([]);
  const todosLosProductos = useAppSelector(
    (state) => state.productReducer.allProducts
  );

  useEffect(() => {
    const obtenerProductos = () => {
      fetch("https://dummyjson.com/products?limit=500")
        .then((res) => res.json())
        .then(({ products }) => {
          dispatch(addProducts(products));
        });
    };

    if (todosLosProductos.length === 0) obtenerProductos();
  }, [todosLosProductos, dispatch]);

  useEffect(() => {
    setProductosActuales(todosLosProductos);
  }, [todosLosProductos]);

  const ordenarProductos = (valorOrden: string) => {
    if (valorOrden === "asc") {
      setProductosActuales(
        [...productosActuales].sort((a, b) => {
          const precioA =
            a.price - (a.price * (a.discountPercentage ?? 0)) / 100;
          const precioB =
            b.price - (b.price * (b.discountPercentage ?? 0)) / 100;
          return precioA - precioB;
        })
      );
    } else if (valorOrden === "desc") {
      setProductosActuales(
        [...productosActuales].sort((a, b) => {
          const precioA =
            a.price - (a.price * (a.discountPercentage ?? 0)) / 100;
          const precioB =
            b.price - (b.price * (b.discountPercentage ?? 0)) / 100;
          return precioB - precioA;
        })
      );
    } else {
      setProductosActuales([...productosActuales].sort((a, b) => a.id - b.id));
    }
  };

  return (
    <div className="container mx-auto min-h-[83vh] p-4 font-theseasons">
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg dark:text-white">Productos</span>
            <select
              ref={sortRef}
              className="border border-black dark:border-white rounded p-1 dark:text-white dark:bg-slate-600"
              onChange={(e) => ordenarProductos(e.target.value)}
            >
              <option value="default">Por defecto</option>
              <option value="asc">Precio (menor a mayor)</option>
              <option value="desc">Precio (mayor a menor)</option>
            </select>
          </div>
          <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {productosActuales.map((producto) => (
              <ProductCard key={producto.id} {...producto} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosLosProductos;
