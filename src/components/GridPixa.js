import React, { useState, useCallback } from 'react';
import { ImgGridItem } from './ImgGridItem';
import { Paginacion } from './Paginacion';
import { useFetchPixa } from '../hooks/useFetchPixa';

const GridPixa = ({ nameSeek = '', scroll }) => {
  const [pagina, setPagina] = useState(1);
  const { data } = useFetchPixa(nameSeek, pagina, 20);

  // useEffect(() => {
  //   setPagina(1);
  // }, [nameSeek]);

  const mostrarPaginacion = (elementos) => {
    if (elementos.length >= 1)
      return <Paginacion pagenext={handleClickNext} pageback={handleClickBack} />;
  };

  // useCallback
  const handleClickNext = useCallback(() => {
    setPagina((pag) => pag + 1);
    // scroll();
  }, [setPagina]);

  const handleClickBack = useCallback(() => {
    setPagina((pag) => (pag === 1 ? 1 : pag - 1));
    // scroll();
  }, [setPagina]);

  return (
    <>
      <div className="row mx-auto my-3">
        {data.map((imagen) => (
          <ImgGridItem key={imagen.id} {...imagen} />
        ))}
      </div>
      {mostrarPaginacion(data)}
      {/* <Paginacion pagenext={handleClickNext} pageback={handleClickBack} /> */}
    </>
  );
};

export default GridPixa;
