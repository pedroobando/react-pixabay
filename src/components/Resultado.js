/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { ImgGridItem } from './ImgGridItem';
import { Paginacion } from './Paginacion';
import { getPixabay } from '../helpers/getPixabay';

const Resultado = ({ name = '', scroll }) => {
  const [dataImags, setDataImags] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    if (name.trim().length >= 2) {
      getPixabay(name, pagina, 30).then((imgs) => setDataImags(imgs));
    }
  }, [name, pagina]);

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
        {dataImags.map(({ largeImageURL, likes, previewURL, tags, views, id }) => (
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
      {mostrarPaginacion(dataImags)}
    </>
  );
};

export default Resultado;
