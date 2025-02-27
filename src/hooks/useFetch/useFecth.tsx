import { useState, useEffect } from 'react';

type Employee = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

type FetchState = {
  data: Employee[] | null;
  error?: string | null;
  loading: boolean;
};

const useFetch = (url: string) => {
  const [state, setState] = useState<FetchState>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result: Employee[] = await response.json();
        if (isMounted) {
          setState({ data: result, error: null, loading: false });
        }
      } catch (error) {
        if (isMounted) {
          setState({ data: null, error: (error as Error).message, loading: false });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
};

export default useFetch;
