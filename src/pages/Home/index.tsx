import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';
import Filters from './Filters';
import GalleryList from './GalleryList';
import { getGalleries } from '../../features/galleryListSlice';
import { useAppDispatch } from '../../app/hooks';

const API_URL = 'https://api.imgur.com/3/gallery';

export type GalleryFilters = {
  section: 'hot' | 'top' | 'user';
  sort: 'viral' | 'top' | 'time' | 'rising';
  window: 'day' | 'week' | 'month' | 'year' | 'all';
  page: number;
  showViral?: boolean;
};

function Home() {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState();

  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const { list } = useAppSelector((state) => state.galleries);

  useEffect(() => {
    const asyncFetchGalleries = async (filters: GalleryFilters) => {
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
        setIsloading(false);
        dispatch(getGalleries(resData.data));
      } else {
        console.log(resData.data.error);
      }
    };
    asyncFetchGalleries(filters);
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
        <GalleryList galleryList={list} />
      )}
    </div>
  );
}

export default Home;
