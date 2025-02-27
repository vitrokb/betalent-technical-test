import { useEffect } from 'react';
import { EmployeeType } from '../../types/types';
import useEmployees from '../useEmployees/useEmployees';

const useFetch = (url: string) => {
  const { dispatch } = useEmployees();

  useEffect(() => {
    let isMounted = true;
    dispatch({ type: 'SET_LOADING', payload: true });

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          dispatch({ type: 'SET_ERROR', payload: 'Algo deu errado com a requisição!' });
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result: EmployeeType[] = await response.json();
        if (isMounted) {
          dispatch({ type: 'SET_ALL_EMPLOYEES', payload: result });
          dispatch({ type: 'SET_EMPLOYEES', payload: result });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: 'SET_ERROR', payload: 'Algo deu errado com a requisição!' });
        }
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);
};

export default useFetch;
