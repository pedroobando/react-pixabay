import { useState, useEffect, useRef } from 'react';
import { getPixabay } from '../helpers/getPixabay';

export const useFetchPixa = (name, page) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    // setState({ data: [], loading: true });

    if (isMounted && name.trim().length >= 2 && page >= 1) {
      getPixabay(name, page, 20).then((imgs) => setState({ data: imgs, loading: false }));
    }
  }, [name, page]);

  return state;
};
