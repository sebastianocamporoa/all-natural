import { FC, useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCartState } from "../../redux/features/cartSlice";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(
    (state) => state.cartReducer.cartItems.length
  );

  const showCart = () => {
    dispatch(setCartState(true));
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShowNavbar(window.scrollY <= lastScrollY);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div id="navbar" className={`bg-[#f1e8d9] top-0 sticky z-10 shadow-lg bg-opacity-70 font-theseasons transition-transform duration-300 ${showNavbar ? "transform translate-y-0" : "transform -translate-y-full"}`}>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold" data-test="main-logo">
          <img src="/logo-dark.svg" alt="Logo" className="h-24" />
        </Link>

        {/* Botón Hamburguesa */}
        <div className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Opciones del Menú en pantallas grandes */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/products" className="text-xl font-bold hover:opacity-80">Productos</Link>
          <Link to="/blogs" className="text-xl font-bold hover:opacity-80">Blog</Link>
          <Link to="/about" className="text-xl font-bold hover:opacity-80">Nosotros</Link>
          <Link to="/faq" className="text-xl font-bold hover:opacity-80">F.A.Q</Link>
          <div className="text-black text-2xl relative hover:opacity-80" onClick={showCart}>
            <AiOutlineShoppingCart />
            <div className="absolute top-[-15px] right-[-10px] bg-darkBg2 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
              {cartCount}
            </div>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f1e8d9] flex flex-col items-center md:hidden shadow-lg p-4 space-y-4">
            <Link to="/products" className="text-xl font-bold hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Productos</Link>
            <Link to="/blogs" className="text-xl font-bold hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/about" className="text-xl font-bold hover:opacity-80" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
            <Link to="/faq" className="text-xl font-bold hover:opacity-80" onClick={() => setIsMenuOpen(false)}>F.A.Q</Link>
            <div className="text-black text-2xl relative hover:opacity-80" onClick={() => { showCart(); setIsMenuOpen(false); }}>
              <AiOutlineShoppingCart />
              <div className="absolute top-[-10px] right-[-10px] bg-darkBg2 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
