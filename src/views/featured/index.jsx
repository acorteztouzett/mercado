import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {PRODUCTOS} from 'constants/routes';
import { Link } from 'react-router-dom';
import puestoImg from 'images/puesto.jpeg';

//MERCADO 2
const FeaturedProducts = () => {
  useDocumentTitle('Mercado Unicachi');
  useScrollTop();

  return (
    <main className="content">
      <section className="product-list-wrapper">
      <h1 className="text-thin">
        <strong>Bienvenido al Mercado Unicachi</strong>
      </h1>

      <div className='product-display-grid'>
        <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div className="product-display" role="presentation">
          <div className="product-display-img">
          <img src={puestoImg} alt="" />
          </div>
          <div className="product-display-details">
            <h2>tienda 7</h2>
            <p className="text-subtle text-italic">
              tienda 7
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
            <h2>tienda 8</h2>
            <p className="text-subtle text-italic">
              tienda 8
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
            <h2>tienda 9</h2>
            <p className="text-subtle text-italic">
              tienda 9
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
              <h2>tienda 10</h2>
              <p className="text-subtle text-italic">
                tienda 10
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
              <h2>tienda 11</h2>
              <p className="text-subtle text-italic">
                tienda 11
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
              <h2>tienda 12</h2>
              <p className="text-subtle text-italic">
                tienda 12
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

export default FeaturedProducts;
