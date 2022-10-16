import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {PRODUCTOS} from 'constants/routes';
import { Link } from 'react-router-dom';
import puestoImg from 'images/puesto.jpeg';

//MERCADO 3
const RecommendedProducts = () => {
  useDocumentTitle('Mercado 3');
  useScrollTop();

  return (
    <main className="content">
      <section className="product-list-wrapper">
      <h1 className="text-thin">
        <strong>Bienvenido al mercado: MERCADO3 :)</strong>
      </h1>

      <div className='product-display-grid'>
      <Link to={PRODUCTOS}>
        <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div className="product-display" role="presentation">
          <div className="product-display-img">
          <img src={puestoImg} alt="" />
          </div>
          <div className="product-display-details">
            <h2>tienda 13</h2>
            <p className="text-subtle text-italic">
              tienda 13
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
            <h2>tienda 14</h2>
            <p className="text-subtle text-italic">
              tienda 14
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
            <h2>tienda 15</h2>
            <p className="text-subtle text-italic">
              tienda 15
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
              <h2>tienda 16</h2>
              <p className="text-subtle text-italic">
                tienda 16
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
              <h2>tienda 17</h2>
              <p className="text-subtle text-italic">
                tienda 17
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
              <h2>tienda 18</h2>
              <p className="text-subtle text-italic">
                tienda 18
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

export default RecommendedProducts;
