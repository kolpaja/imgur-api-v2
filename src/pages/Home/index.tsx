import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';
import Filters from './Filters';
import GalleryList from './GalleryList';
import { useAppDispatch } from '../../app/hooks';
import { useGallery } from '../../hooks/useGallery';

function Home() {
  const { list } = useAppSelector((state) => state.galleries);
  const { section, sort, window, page, showViral } = useAppSelector(
    (state) => state.filters
  );
  const { loading, error } = useGallery(
    `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}`
  );

  if (error) return <h1>ups...something went wrong</h1>;

  return (
    <div className='home'>
      <Filters />

      {loading ? (
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
