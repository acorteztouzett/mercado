/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {PRODUCTOS} from 'constants/routes';
import { Link } from 'react-router-dom';
import puestoA3 from 'images/puesto3.jpeg';
import puestoA4 from 'images/puesto4.jpeg';
import puestoA5 from 'images/puesto5.jpeg';
import puestoA6 from 'images/puesto6.jpeg';
import puestoA7 from 'images/puesto7.jpeg';
import puestoA8 from 'images/puesto8.jpg';

//MERCADO 1

const Shop = () => {
  useDocumentTitle('Gran Mercado Mayorista de Lima');
  useScrollTop();

  return (
    <main className="content">
      <section className="product-list-wrapper">
      <h1 className="text-thin">
        <strong>Bienvenido al Gran Mercado Mayorista de Lima</strong>
      </h1>

      <div className='product-display-grid'>
        <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div className="product-display" role="presentation">
          <div className="product-display-img">
          <img src={puestoA3} alt="" />
          </div>
          <div className="product-display-details">
            <h2>El rincón de Patty</h2>
            <p className="text-subtle text-italic">
              Puesto A5-13
            </p>
          </div>
          </div>
        </SkeletonTheme>
        </Link>

        <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div className="product-display" role="presentation">
          <div className="product-display-img">
          <img src={puestoA4} alt="" />
          </div>
          <div className="product-display-details">
            <h2>El tarmeño</h2>
            <p className="text-subtle text-italic">
            Puesto A4-32
            </p>
          </div>
          </div>
        </SkeletonTheme>
        </Link>
        <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div className="product-display" role="presentation">
          <div className="product-display-img">
          <img src={puestoA5} alt="" />
          </div>
          <div className="product-display-details">
            <h2>La esquina de Lucy</h2>
            <p className="text-subtle text-italic">
            Puesto A4-36
            </p>
          </div>
          </div>
        </SkeletonTheme>
        </Link>
      </div>

      <div className='product-display-grid'>
      <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
          <div className="product-display" role="presentation">
            <div className="product-display-img">
            <img src={puestoA6} alt="" />
            </div>
            <div className="product-display-details">
              <h2>El super limón</h2>
              <p className="text-subtle text-italic">
              Puesto A4-39
              </p>
            </div>
          </div>
        </SkeletonTheme>
        </Link>

        <Link to={PRODUCTOS}>
          <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
          <div className="product-display" role="presentation">
            <div className="product-display-img">
            <img src={puestoA7} alt="" />
            </div>
            <div className="product-display-details">
              <h2>La esquina de Victor</h2>
              <p className="text-subtle text-italic">
              Puesto A4-41
              </p>
            </div>
          </div>
        </SkeletonTheme>
        </Link>
        <Link to={PRODUCTOS}>
          <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
          <div className="product-display" role="presentation">
            <div className="product-display-img">
            <img src={puestoA8} alt="" />
            </div>
            <div className="product-display-details">
              <h2>Las verduras de Andres</h2>
              <p className="text-subtle text-italic">
              Puesto A4-49
              </p>
            </div>
          </div>
        </SkeletonTheme>
        </Link>
      </div>

      </section>
    </main>
  );
};

export default Shop;
