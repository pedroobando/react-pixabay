import { useState, useEffect } from 'react';
import { getPixabay } from '../helpers/getPixabay';

export const useFetchPixa = (name, page, perpage) => {
  const [state, setState] = useState({ name: '', page, perpage, data: [] });

  useEffect(() => {
    getPixabay(name, page, perpage).then((imgs) =>
      setState({ name, page, perpage, data: imgs })
    );
  }, [name, page, perpage]);

  return state;
};
