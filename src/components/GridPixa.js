import React, { useState, useEffect } from 'react';
import { ImgGridItem } from './ImgGridItem';
import { Paginacion } from './Paginacion';
import { useFetchPixa } from '../hooks/useFetchPixa';

const GridPixa = ({ nameSeek = '', scroll }) => {
  const [pagina, setPagina] = useState(1);
  const { data } = useFetchPixa(nameSeek, pagina, 20);

  useEffect(() => {
    setPagina(1);
  }, [nameSeek]);

  const mostrarPaginacion = (elementos) => {
    if (elementos.length >= 1)
      return <Paginacion pagenext={handleClickNext} pageback={handleClickBack} />;
  };

  const handleClickNext = () => {
    setPagina((pag) => pag + 1);
    scroll();
  };

  const handleClickBack = () => {
    if (pagina > 1) {
      setPagina((pag) => pag - 1);
      scroll();
    }
  };

  return (
    <>
      <div className="row mx-auto my-3">
        {data.map(({ largeImageURL, likes, previewURL, tags, views, id }) => (
          <ImgGridItem
            key={id}
            largeImageURL={largeImageURL}
            likes={likes}
            previewURL={previewURL}
            tags={tags}
            views={views}
          />
        ))}
      </div>
      {mostrarPaginacion(data)}
    </>
  );
};

export default GridPixa;
