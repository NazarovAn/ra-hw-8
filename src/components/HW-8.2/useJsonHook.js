import {useState, useEffect} from 'react';

export default function useJsonHook(url, option) {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url + option);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          setData(data);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [option, url])

  return [data, isLoading, hasError];
}
