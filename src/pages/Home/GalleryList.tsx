import { Row, Col, Card, Container } from 'react-bootstrap';
import Post from './Post';
type GalleryListProps = {
  galleryList: any;
};

const GalleryList = ({ galleryList }: GalleryListProps) => {
  console.log(galleryList);
  return (
    <div className='mt-2'>
      <Row xs='1' sm='2' md='3' lg='5' xl='6' xxl='7'>
        {galleryList.length > 0 &&
          galleryList.map((gallery: any) => (
            <Post key={gallery.id} gallery={gallery} />
          ))}
      </Row>
    </div>
  );
};

export default GalleryList;
