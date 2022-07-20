import { Row } from 'react-bootstrap';
import Post from './Post';

type GalleryListProps = {
  galleryList: any;
};

const GalleryList = ({ galleryList }: GalleryListProps) => {
  return (
    <div className='gallery-wrapper'>
      <div className='gallery-list container'>
        {galleryList.length > 0 &&
          galleryList.map((gallery: any) => (
            <Post key={gallery.id} gallery={gallery} />
          ))}
      </div>
    </div>
  );
};

export default GalleryList;
