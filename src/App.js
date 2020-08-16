import React, { useState } from 'react';
// import { useFetchPixa } from './hooks/useFetchPixa';
import Buscador from './components/Buscador';
import GridPixa from './components/GridPixa';

export const App = () => {
  const [searchText, setSearchText] = useState('');

  const scroll = () => {
    const elemento = document.querySelector('.app');
    elemento.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'start' });
  };

  return (
    <div className="app container">
      <Buscador searchText={setSearchText} />
      <GridPixa nameSeek={searchText} scroll={scroll} />
    </div>
  );
};
