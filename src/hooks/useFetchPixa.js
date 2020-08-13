import { useState, useEffect } from 'react';
import { getPixabay } from '../helpers/getPixabay';

export const useFetchPixa = (name) => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    getPixabay(name, 1, 20).then((imgs) => setState({ data: imgs }));
  }, [name]);

  return state;
};
