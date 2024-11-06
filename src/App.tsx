import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import AllProducts from "./pages/AllProducts";
import ScrollToTopButton from "./components/ScrollToTopButton";
// import BannerPopup from "./components/BannerPopup";
import PostsList from "./pages/PostsList";
import Post from "./pages/Post/Post";
import Footer from "./components/Footer/Footer";
import Faq from "./pages/Faq/Faq";
import About from "./pages/About/About";
import ReactGA from 'react-ga4';
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Inicializa Google Analytics con tu ID de seguimiento
    ReactGA.initialize('G-QVHNW47LYT');
  }, []);

  useEffect(() => {
    // Envía un evento de visualización de página cada vez que cambia la ruta
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <Provider store={store}>
      <div className="app-container">
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/blogs" element={<PostsList />} />
            <Route path="/blog/:postID" element={<Post />} />
            <Route path="/product/:productID" element={<SingleProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Cart />
          <ScrollToTopButton />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Provider>
  );
}

export default App;
