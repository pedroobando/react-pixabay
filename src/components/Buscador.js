import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Buscador = ({ searchText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length >= 2) {
      searchText(inputValue);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu Imagen. (Ejemplo: Futbol)"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar..."
            />
          </div>
        </div>
      </form>
    </>
  );
};

Buscador.propTypes = {
  searchText: PropTypes.func.isRequired,
};

export default Buscador;
