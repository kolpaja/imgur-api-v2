import { Link } from 'react-router-dom';

type PostProps = {
  gallery: any;
};

const Post = ({ gallery }: PostProps) => {
  console.log({ gallery });
  return (
    <div className='post-wrapper'>
      <Link
        className='post-item'
        to={`/gallery/${gallery.id}`}
        target='_self'
        draggable='false'
      >
        <div className='post-item-container'>
          {/* post-media */}
          <div className='post-item-media'>
            {gallery.images_count > 0 ? (
              gallery.images[0].animated ? (
                <div className='postVideo'>
                  <div className='postVideo-wrapper'>
                    <video preload='auto' autoPlay muted loop>
                      <source
                        src={gallery.images[0].link}
                        type={gallery.images[0].type}
                      />
                    </video>
                  </div>
                </div>
              ) : (
                <div className='img-container'>
                  <img
                    src={`https://i.imgur.com/${gallery.cover}_d.webp?maxwidth=520&amp;shape=thumb&amp;fidelity=high`}
                    loading='lazy'
                    width='240'
                  />
                </div>
              )
            ) : (
              <div className='img-container'>
                <img
                  src={`https://i.imgur.com/${gallery.id}.jpg`}
                  loading='lazy'
                  width='240'
                />
              </div>
            )}
          </div>
          {/* post-meta -ex. badges.. */}
          <div className='post-meta'></div>
          {/* post info - likes score */}
          <div className='post-item-title-wrap'>
            <div className='post-item-title'>
              <span>{gallery.title}</span>
            </div>
            <div className='post-item-info'></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
