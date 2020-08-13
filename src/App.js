import React, { useState } from 'react';
import './App.css';
// import { useFetchPixa } from './hooks/useFetchPixa';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

export const App = () => {
  const [searchText, setSearchText] = useState('');

  const scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'start' });
  };

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes {searchText}</p>
        <Buscador searchText={setSearchText} />
      </div>
      <Resultado name={searchText} scroll={scroll} />
    </div>
  );
};
