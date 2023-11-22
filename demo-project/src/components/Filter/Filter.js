import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, setFilters } from '../../redux-toolkit/slices/productSlice';

const PRODUCT_TYPES = ['PC', 'CLOTHES', 'SHOES'];
const SHIPPING_UNITS = ['EXPRESS', 'FAST', 'SAVING'];
const PRODUCT_STATUSES = ['NEW', 'USED'];


const FilterComponent = () => {
  const dispatch = useDispatch();

  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [selectedShippingUnits, setSelectedShippingUnits] = useState([]);
  const [selectedProductStatuses, setSelectedProductStatuses] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleApplyFilters = () => {
    console.log('Selected Product Types:', selectedProductTypes);
    console.log('Selected Shipping Units:', selectedShippingUnits);
    console.log('Selected Product Statuses:', selectedProductStatuses);
    console.log('Min Price:', minPrice);
    console.log('Max Price:', maxPrice);

    const categoriesFilters = {
      productTypes: selectedProductTypes,
      shippingUnits: selectedShippingUnits,
      productStatuses: selectedProductStatuses,
      minPrice: minPrice,
      maxPrice: maxPrice
    }

    // dispatch(setFilters(categoriesFilters))
    dispatch(getProducts(categoriesFilters))
  };

  const handleClearFilters = () => {
    setSelectedProductTypes([]);
    setSelectedShippingUnits([]);
    setSelectedProductStatuses([]);
    setMinPrice('');
    setMaxPrice('');

    dispatch(setFilters({
      productTypes: [],
      shippingUnits: [],
      productStatuses: [],
      maxPrice: '',
      minPrice: ''
    }))
  };

  return (
    <div>
      <h2>Filters</h2>

      <div>
        <h3>Product Types</h3>
        {PRODUCT_TYPES.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              value={type}
              checked={selectedProductTypes.includes(type)}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedProductTypes((prev) =>
                  prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
                );
              }}
            />
            {type}
          </label>
        ))}
      </div>

      <div>
        <h3>Shipping Units</h3>
        {SHIPPING_UNITS.map((unit) => (
          <label key={unit}>
            <input
              type="checkbox"
              value={unit}
              checked={selectedShippingUnits.includes(unit)}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedShippingUnits((prev) =>
                  prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
                );
              }}
            />
            {unit}
          </label>
        ))}
      </div>

      <div>
        <h3>Product Statuses</h3>
        {PRODUCT_STATUSES.map((status) => (
          <label key={status}>
            <input
              type="checkbox"
              value={status}
              checked={selectedProductStatuses.includes(status)}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedProductStatuses((prev) =>
                  prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
                );
              }}
            />
            {status}
          </label>
        ))}
      </div>

      <div>
        <h3>Price Range</h3>
        <label>
          Min Price:
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button onClick={handleApplyFilters}>Apply</button>
        <button onClick={handleClearFilters}>Clear</button>
      </div>
    </div>
  );
};

export default FilterComponent;
