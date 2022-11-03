import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from 'components/common';
import { ProductShowcaseGrid } from 'components/product';
import { FEATURED_PRODUCTS, MERCADO1, MERCADO2, MERCADO3, RECOMMENDED_PRODUCTS, SHOP } from 'constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useRecommendedProducts, useScrollTop
} from 'hooks';
import bannerMercado1 from 'images/granMercadoMayorista.jpeg';
import bannerMercado2 from 'images/mercadoUnicachi.jpeg';
import bannerMercado3 from 'images/mercadoConzac.jpeg';
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
              Gran Mercado Mayorista de Lima
            </h1>
            <p>
            El Gran Mercado Mayorista de Lima es un centro de abastecimiento zonal de tipo Mayorista que inició actividades en el año 2013, con sus 9 años de existencia lo convierte en un mercado tradicional en su comunidad. Este mercado alberga 1000 puestos fijos y tiene 1000 puestos activos permanentemente. Para comprar aquí, haz click al botón de abajo.
            </p>
            <br />
            <Link to={MERCADO1} className="button">
              Comprar Aqui &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerMercado1} alt="" /></div>
        </div>

        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              Mercado Unicachi
            </h1>
            <p>
            El Mercado Unicachi es un centro de abastecimiento zonal de tipo Mixto (minorista/mayorista) que inició actividades en el año 2006, con sus 16 años de existencia lo convierte en un mercado tradicional en su comunidad. Este mercado alberga 500 puestos fijos y tiene 500 puestos activos permanentemente. Para comprar aquí, haz click al botón de abajo.
            </p>
            <br />
            <Link to={MERCADO2} className="button">
              Comprar Aqui &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerMercado2} alt="" /></div>
        </div>

        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
            Gran Mercado Mayorista Conzac
            </h1>
            <p>
            El Gran Mercado Conzac es un centro de abastecimiento zonal de tipo Mixto (minorista/mayorista) que inició actividades en el año 1997, con sus 25 años de existencia lo convierte en un mercado tradicional en su comunidad. Este mercado alberga 997 puestos fijos y tiene 997 puestos activos permanentemente. Para comprar aquí, haz click al botón de abajo.
            </p>
            <br />
            <Link to={MERCADO3} className="button">
              Comprar Aqui &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerMercado3} alt="" /></div>
        </div>

        
        
      </div>
    </main>
  );
};

export default Home;
