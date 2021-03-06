import React from 'react';
import HotelName from '../containers/HotelName';
import Stars from '../containers/Stars';

const FilterTitle = () => (
  <div className="card" style={{marginBottom: '1%'}}>
    <div className="card-body">
      <h4>Filtros</h4>
    </div>
  </div>
);

const Filter = () => (
  <div className="col-sm-6 col-md-4">
    <FilterTitle />
    <HotelName />
    <Stars />
  </div>
);

export default Filter;