import * as Route from 'constants/routes';
import logo from 'images/logo-full.png';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.MERCADO1,
    Route.MERCADO2,
    Route.MERCADO3,
    Route.BLOG,
    Route.UBICANOS,
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Contacto <br />
            tel : +51 999702380 <br />
            email : mcorteztouzett@gmail.com
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            Mikhuna Peru <br />
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
