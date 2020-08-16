import React from 'react';

export const Paginacion = React.memo(({ pagenext, pageback }) => {
  console.log('Incremente :(');
  return (
    <div className="row py-3 justify-content-center">
      <button
        type="button"
        className="btn btn-info mx-1 d-inline"
        onClick={() => pageback()}>
        &larr; Anterior
      </button>
      <button
        type="button"
        className="btn btn-info mx-1 d-inline"
        onClick={() => pagenext()}>
        Siguiente &rarr;
      </button>
    </div>
  );
});
