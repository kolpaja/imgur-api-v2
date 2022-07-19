import axios from 'axios';
import { useEffect, useState } from 'react';

export function useGallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`${process.env.REACT_APP_API_URL}/gallery`);
        setGallery(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { gallery, loading, error };
}
