import { FC } from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: FC = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src="public\logo-dark.svg" alt="Logo de la Empresa" />
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61567459979181&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@allnatural_pe?_t=8dvmJQ5c4xC&_r=1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a href="https://instagram.com/allnatural_pe?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <p className="footer-text">© 2024 All Natural. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
