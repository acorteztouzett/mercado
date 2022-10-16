/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {PRODUCTOS} from 'constants/routes';
import { Link } from 'react-router-dom';
import puestoImg from 'images/puesto.jpeg';

//MERCADO 1

const Shop = () => {
  useDocumentTitle('Mercado 1');
  useScrollTop();

  return (
    <main className="content">
      <section className="product-list-wrapper">
      <h1 className="text-thin">
        <strong>Bienvenido al mercado: MERCADO1 :)</strong>
      </h1>

      <div className='product-display-grid'>
        <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div className="product-display" role="presentation">
          <div className="product-display-img">
          <img src={puestoImg} alt="" />
          </div>
          <div className="product-display-details">
            <h2>tienda 1</h2>
            <p className="text-subtle text-italic">
              tienda 1
            </p>
          </div>
          </div>
        </SkeletonTheme>
        </Link>

        <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div className="product-display" role="presentation">
          <div className="product-display-img">
          <img src={puestoImg} alt="" />
          </div>
          <div className="product-display-details">
            <h2>tienda 2</h2>
            <p className="text-subtle text-italic">
              tienda 2
            </p>
          </div>
          </div>
        </SkeletonTheme>
        </Link>
        <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div className="product-display" role="presentation">
          <div className="product-display-img">
          <img src={puestoImg} alt="" />
          </div>
          <div className="product-display-details">
            <h2>tienda 3</h2>
            <p className="text-subtle text-italic">
              tienda 3
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
            <img src={puestoImg} alt="" />
            </div>
            <div className="product-display-details">
              <h2>tienda 4</h2>
              <p className="text-subtle text-italic">
                tienda 4
              </p>
            </div>
          </div>
        </SkeletonTheme>
        </Link>

        <Link to={PRODUCTOS}>
          <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
          <div className="product-display" role="presentation">
            <div className="product-display-img">
            <img src={puestoImg} alt="" />
            </div>
            <div className="product-display-details">
              <h2>tienda 5</h2>
              <p className="text-subtle text-italic">
                tienda 5
              </p>
            </div>
          </div>
        </SkeletonTheme>
        </Link>
        <Link to={PRODUCTOS}>
          <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
          <div className="product-display" role="presentation">
            <div className="product-display-img">
            <img src={puestoImg} alt="" />
            </div>
            <div className="product-display-details">
              <h2>tienda 6</h2>
              <p className="text-subtle text-italic">
                tienda 6
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
