import React, { useState } from 'react';
// import { useFetchPixa } from './hooks/useFetchPixa';
import Buscador from './components/Buscador';
import GridPixa from './components/GridPixa';

export const App = () => {
  const [searchText, setSearchText] = useState('');

  const scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'start' });
  };

  return (
    <div className="app container">
      <div className="jumbotron">
        <h2 className="text-center text-capitalize">Buscador de Imagenes {searchText}</h2>
        <Buscador searchText={setSearchText} />
      </div>
      <GridPixa nameSeek={searchText} scroll={scroll} />
    </div>
  );
};
