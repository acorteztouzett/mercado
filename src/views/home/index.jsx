import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, MERCADO1, MERCADO2, MERCADO3, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
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
      <h1 className="text-thin">
        <strong>Mikhuna Peru, tu mercado digital :)</strong>
      </h1>
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Mercado 1</strong>
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
            lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
            </p>
            <br />
            <Link to={MERCADO1} className="button">
              Comprar Aqui &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>

        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Mercado 2</strong>
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
            lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
            </p>
            <br />
            <Link to={MERCADO2} className="button">
              Comprar Aqui &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>

        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Mercado 3</strong>
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem magna, blandit eu dignissim sed, scelerisque id velit. Morbi eget leo scelerisque, 
            lacinia nulla nec, sodales turpis. Donec quis sodales diam, at aliquet quam. Morbi mattis, mauris ut vulputate tincidunt, quam augue condimentum eros, id rutrum est ipsum et turpis.
            </p>
            <br />
            <Link to={MERCADO3} className="button">
              Comprar Aqui &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>

        
        
      </div>
    </main>
  );
};

export default Home;
