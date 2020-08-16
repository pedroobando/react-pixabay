import React, { useState } from 'react';
import Buscador from './components/Buscador';
import GridPixa from './components/GridPixa';

export const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="app container">
      <Buscador searchText={setSearchText} />
      <GridPixa nameSeek={searchText} />
    </div>
  );
};
