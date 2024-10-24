import { FC, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { emptyCart, setCartState } from "../redux/features/cartSlice";
import CartRow from "./CartRow";
import toast from "react-hot-toast";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.cartReducer.cartOpen);
  const items = useAppSelector((state) => state.cartReducer.cartItems);
  const [checkout, setCheckout] = useState(false);
  console.log(items)

  const calcularTotal = () => {
    let total = 0;
    items.forEach((item) => {
      if (item.quantity && item.discountPercentage)
        total +=
          (item.price - (item.price * item.discountPercentage) / 100) *
          item.quantity;
    });
    return total.toFixed(2);
  };

  const manejarPedido = () => {
    const mensaje = items
      .map(
        (item) =>
          `Producto: ${item.title}, Cantidad: ${item.quantity}, Precio: ${item.price}, url: https://all-natural.netlify.app/product/${item.id}`
      )
      .join("\n");

    const mensajeCodificado = encodeURIComponent(
      `Hola, quiero realizar el siguiente pedido:\n${mensaje}\nTotal: $${calcularTotal()}`
    );

    //const numeroTelefono = "51947381423";
    const numeroTelefono = "51949477801";
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

    window.location.href = urlWhatsApp;

    dispatch(setCartState(false));
    dispatch(emptyCart());
    setCheckout(false);
    toast.success("Tu pedido ha sido confirmado", { duration: 3000 });
  };

  if (isOpen) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
        {checkout ? (
          <div className="max-w-[400px] w-full min-h-full bg-colorbg absolute right-0 top-0 p-6 font-theseasons dark:bg-slate-600 dark:text-white">
            <h1 className="font-bold text-xl mb-1">Finalizar compra</h1>
            <div className="flex justify-center items-center space-x-2 p-4">
              <span
                className="w-1/2 border border-none color-white rounded cursor-pointer text-center py-1 bg-darkBg2 hover:bg-colorbg2hover"
                onClick={() => setCheckout(false)}
              >
                Cancelar
              </span>
              <span
                className="w-1/2 border color-white border-none rounded cursor-pointer text-center py-1 bg-colorGreen hover:bg-colorGreen2"
                onClick={manejarPedido}
                data-test="confirm-order-btn"
              >
                Confirmar
              </span>
            </div>
          </div>
        ) : (
          <div
            className="max-w-[400px] w-full min-h-full font-theseasons bg-white absolute right-0 top-0 p-6 dark:bg-slate-600 dark:text-white"
            style={{ backgroundColor: `#f1e8d9` }}
            data-test="cart-container"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-2xl">Tu Carrito</h3>
              <RxCross1
                className="text-[24px] cursor-pointer hover:opacity-70"
                onClick={() => dispatch(setCartState(false))}
                data-test="cart-close"
              />
            </div>
            <div className="mt-6 space-y-2">
              {items?.length > 0 ? (
                items.map((item) => <CartRow key={item.id} {...item} />)
              ) : (
                <div className="flex flex-col justify-center items-center p-4">
                  <p className="text-center text-xl my-2">
                    Tu carrito está vacío
                  </p>
                </div>
              )}
            </div>
            {items?.length > 0 && (
              <>
                <div className="flex items-center justify-between p-2">
                  <h2 className="font-bold text-2xl">Total</h2>
                  <h2 className="font-bold text-2xl">${calcularTotal()}</h2>
                </div>
                <button
                  type="button"
                  data-test="checkout-btn"
                  onClick={() => setCheckout(true)}
                  className="w-full text-center bg-colorGreen text-white py-2 my-4 rounded font-bold text-xl hover:bg-colorGreen2"
                >
                  FINALIZAR COMPRA
                </button>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
};

export default Cart;
