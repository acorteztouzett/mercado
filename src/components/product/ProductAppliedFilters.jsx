/* eslint-disable no-nested-ternary */
import { CloseCircleOutlined } from '@ant-design/icons';
import PropType from 'prop-types';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { applyFilter } from 'redux/actions/filterActions';

const ProductAppliedFilters = ({ filteredProductsCount }) => {
  const filter = useSelector((state) => state.filter, shallowEqual);
  const fields = ['brand', 'minPrice', 'maxPrice', 'sortBy', 'keyword'];
  const isFiltered = fields.some((key) => !!filter[key]);
  const dispatch = useDispatch();

  const onRemoveKeywordFilter = () => {
    dispatch(applyFilter({ keyword: '' }));
  };

  const onRemovePriceRangeFilter = () => {
    dispatch(applyFilter({ minPrice: 0, maxPrice: 0 }));
  };

  const onRemoveBrandFilter = () => {
    dispatch(applyFilter({ brand: '' }));
  };

  const onRemoveSortFilter = () => {
    dispatch(applyFilter({ sortBy: '' }));
  };

  return !isFiltered ? null : (
    <>
      <div className="product-list-header">
        <div className="product-list-header-title">
          <h5>
            {filteredProductsCount > 0
              && `Se encontró ${filteredProductsCount} ${filteredProductsCount > 1 ? 'productos' : 'producto'}`}
          </h5>
        </div>
      </div>
      <div className="product-applied-filters">
        {filter.keyword && (
          <div className="pill-wrapper">
            <span className="d-block">Etiqueta</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.keyword}</h5>
              <div className="pill-remove" onClick={onRemoveKeywordFilter} role="presentation">
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.brand && (
          <div className="pill-wrapper">
            <span className="d-block">Categoria</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.brand}</h5>
              <div className="pill-remove" onClick={onRemoveBrandFilter} role="presentation">
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {(!!filter.minPrice || !!filter.maxPrice) && (
          <div className="pill-wrapper">
            <span className="d-block">Rango de Precio</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">
                PEN
                {filter.minPrice}
                - PEN
                {filter.maxPrice}
              </h5>
              <div
                className="pill-remove"
                onClick={onRemovePriceRangeFilter}
                role="presentation" 
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.sortBy && (
          <div className="pill-wrapper">
            <span className="d-block">Ordenar por</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">
                {filter.sortBy === 'price-desc'
                  ? 'Precio Alto a Bajo'
                  : filter.sortBy === 'price-asc'
                    ? 'Precio Bajo a Alto'
                    : filter.sortBy === 'name-desc'
                      ? 'Nombre Z-A'
                      : 'Nombre A-Z'}
              </h5>
              <div
                className="pill-remove"
                onClick={onRemoveSortFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

ProductAppliedFilters.defaultProps = {
  filteredProductsCount: 0
};

ProductAppliedFilters.propTypes = {
  filteredProductsCount: PropType.number
};

export default ProductAppliedFilters;
