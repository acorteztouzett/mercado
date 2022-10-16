import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { useDocumentTitle, useScrollTop,useRecommendedProducts } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';

const Productos = () => {
  useDocumentTitle('Productos');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading, 
    error
  } = useRecommendedProducts("tienda1");

  return (
    <main className="content">
      <section className="product-list-wrapper">
        {/* <AppliedFilters filteredProductsCount={store.filteredProducts.length} /> */}
        <ProductList {...store}>
          <ProductGrid products={recommendedProducts} />
        </ProductList>

      </section>
    </main>
  );
};

export default Productos;