import { useState, useEffect } from 'react';
import { getPixabay } from '../helpers/getPixabay';

export const useFetchPixa = (name, page) => {
  const [state, setState] = useState({ data: [] });

  // console.log(state.data);

  useEffect(() => {
    // setState({ name: '', page, perpage, data: [] });

    if (name.trim().length >= 2 && page >= 1) {
      getPixabay(name, page, 20).then((imgs) => setState({ data: imgs }));
    }
  }, [name, page]);

  return state;
};
