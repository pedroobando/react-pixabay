import React, { useState, useCallback } from 'react';
import { ImgGridItem } from './ImgGridItem';
import { Paginacion } from './Paginacion';
import { useFetchPixa } from '../hooks/useFetchPixa';

const GridPixa = ({ nameSeek = '' }) => {
  const [pagina, setPagina] = useState(1);
  const { data, loading } = useFetchPixa(nameSeek, pagina, 20);

  const gotoTop = () => {
    const elemento = document.querySelector('.app');
    elemento.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'start' });
  };

  const handleClickNext = useCallback(() => {
    setPagina((pag) => pag + 1);
    gotoTop();
  }, []);

  const handleClickBack = useCallback(() => {
    setPagina((pag) => (pag === 1 ? 1 : pag - 1));
    gotoTop();
  }, []);

  const mostrarPaginacion = () => {
    return <Paginacion pagenext={handleClickNext} pageback={handleClickBack} />;
  };

  const showGrid = (imagenes) => {
    return (
      <div className="row mx-auto my-3 ">
        {imagenes.map((img) => (
          <ImgGridItem key={img.id} {...img} />
        ))}
      </div>
    );
  };

  return (
    <>
      {!loading && showGrid(data)}
      {!loading && mostrarPaginacion()}
    </>
  );
};

export default GridPixa;
