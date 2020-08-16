import React, { useState, useCallback } from 'react';
import { ImgGridItem } from './ImgGridItem';
import { Paginacion } from './Paginacion';
import { useFetchPixa } from '../hooks/useFetchPixa';

const GridPixa = ({ nameSeek = '', xscroll }) => {
  const [pagina, setPagina] = useState(1);
  const { data, loading } = useFetchPixa(nameSeek, pagina, 20);

  const mostrarPaginacion = () => {
    return <Paginacion pagenext={handleClickNext} pageback={handleClickBack} />;
  };

  const showGrid = (data) => {
    return (
      <div className="row mx-auto my-3">
        {data.map((imagen) => (
          <ImgGridItem key={imagen.id} {...imagen} />
        ))}
      </div>
    );
  };

  // useCallback
  const handleClickNext = useCallback(() => {
    // xscroll();
    setPagina((pag) => pag + 1);
  }, []);

  const handleClickBack = useCallback(() => {
    // xscroll();
    setPagina((pag) => (pag === 1 ? 1 : pag - 1));
  }, []);

  return (
    <>
      {!loading && showGrid(data)}
      {!loading && mostrarPaginacion()}
    </>
  );
};

export default GridPixa;
