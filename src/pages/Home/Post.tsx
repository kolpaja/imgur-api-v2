import { Link } from 'react-router-dom';
import { ChatSquareFill, EyeFill } from 'react-bootstrap-icons';
import { ReactComponent as ArrowUp } from '../../assets/svg/arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg';
import { nrFormatter } from '../../utils/formats';

type PostProps = {
  gallery: any;
};

const Post = ({ gallery }: PostProps) => {
  // console.log({ gallery });
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
            <div className='post-item-info'>
              {/* votes */}
              <div className='media'>
                <div className='post-item-stat post-item-vote vote vote-up'>
                  <ArrowUp />
                </div>
                <div className='mediaBody post-item-vote-points'>
                  {gallery.points}
                </div>
                <div className='post-item-vote post-item-stat  vote-down vote'>
                  <ArrowDown />
                </div>
              </div>

              {/* comments */}
              <div className='media post-item-stat'>
                <ChatSquareFill />
                <div className='mediaBody'>{gallery.comment_count}</div>
              </div>

              {/* views */}
              <div className='media post-item-stat'>
                <EyeFill />
                <div className='mediaBody'>{nrFormatter(gallery.views)}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
