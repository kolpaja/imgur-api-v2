import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.imgur.com/3';

const useAxios = (url: string) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const config = {
    method: 'get',
    url,
    headers: {
      Authorization: 'Client-ID d7c5207abe0dfc3',
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios(config);
      setResponse(res.data.data);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useAxios;
