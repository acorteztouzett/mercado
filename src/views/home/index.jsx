import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from 'hooks';
import bannerImg from 'images/banner-mercado-home.jpg';
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  useDocumentTitle('Inicio');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended
  } = useRecommendedProducts(6);

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Mikhuna Peru, tu mercado digital :)</strong>
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
            lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
            </p>
            <br />
            <Link to={SHOP} className="button">
              Comprar Ahora &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Productos Destacados</h1>
            <Link to={FEATURED_PRODUCTS}>Ver todos</Link>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Intenta de nuevo"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Productos Recomendados</h1>
            <Link to={RECOMMENDED_PRODUCTS}>Ver todos</Link>
          </div>
          {(errorRecommended && !isLoadingRecommended) ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Intenta de nuevo"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
