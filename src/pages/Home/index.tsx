import React, { useEffect, useMemo, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';
import Filters from './Filters';
import GalleryList from './GalleryList';

const API_URL = 'https://api.imgur.com/3/gallery';

export type GalleryFilters = {
  section: 'hot' | 'top' | 'user';
  sort: 'viral' | 'top' | 'time' | 'rising';
  window: 'day' | 'week' | 'month' | 'year' | 'all';
  page: number;
  showViral?: boolean;
};

function Home() {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState();

  const filters = useAppSelector((state) => state.filters);

  useEffect(() => {
    const fetchGallery = async (filters: GalleryFilters) => {
      const { section, sort, window, page, showViral } = filters;
      const response = await fetch(
        `${API_URL}/${section}/${sort}/${window}/${page}?showViral=${
          showViral || true
        }`,
        {
          headers: {
            Authorization: 'Client-ID d7c5207abe0dfc3',
          },
        }
      );
      const resData = await response.json();
      // console.log(resData);
      if (resData.success) {
        setGallery(resData.data);
        setIsloading(false);
      } else {
        console.log(resData.data.error);
      }
    };
    fetchGallery(filters);
  }, [filters]);

  return (
    <div className='home'>
      <Filters />

      {isLoading ? (
        <Spinner
          animation='border'
          variant='info'
          className='position-absolute top-50 start-50 '
        />
      ) : (
        <GalleryList galleryList={gallery} />
      )}
    </div>
  );
}

export default Home;
