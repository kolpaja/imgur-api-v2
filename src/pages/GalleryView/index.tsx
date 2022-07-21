import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';
import {
  ThreeDots,
  Gift,
  Download,
  Flag,
  PersonX,
} from 'react-bootstrap-icons';
import moment from 'moment';
import { useAppSelector } from '../../app/hooks';
import { ReactComponent as Embed } from '../../assets/svg/embed.svg';
import EngagementBar from './EngagementBar';
import useAxios from '../../hooks/useAxios';

function GalleryView() {
  let { galleryId } = useParams();
  const [user, setUser] = useState<any>(null);

  const { list } = useAppSelector((state) => state.galleries);

  const post: any = list?.find((item: any) => item.id === galleryId);
  console.log(post);

  const postedTime = moment(post.datetime * 1000).fromNow();

  // find the details of the posting user or to create this ones profile
  const { response, error, loading }: any = useAxios(
    `https://api.imgur.com/3/account/${post.account_url}`
  );
  useEffect(() => {
    if (!loading) setUser(response);
    // console.log(user);
  }, [loading, response]);

  if (loading) return <div>loading</div>;
  if (!post) return <div>ups... post not found</div>;

  return (
    <div className='gallery'>
      <div className='gallery-main-container'>
        {/* left actions like vote share sidebar */}
        <div className='gallery-engagement-bar'>
          <EngagementBar post={post} />
        </div>

        {/* main content */}
        <div className='gallery-content-wrapper'>
          <div className='insideContentWrapper'>
            <div className='gallery-content'>
              <div className='content-header'>
                <div className='gallery-title'>
                  <div className='title-row'>
                    <span>{post.title}</span>
                    <div className='navigate-other-post'>
                      <Button size='sm'>Next</Button>
                    </div>
                  </div>
                </div>
                <div className='gallery-posted-info'>
                  <a
                    className='author-link'
                    href={`https://imgur.com/user/${post.account_url}`}
                  >
                    <img src={user?.avatar} alt={user?.bio || user?.url} />
                  </a>
                  <div className='info-wrapper'>
                    <div className='info'>
                      <a
                        href={`https://imgur.com/user/${post.account_url}`}
                        className='author-name'
                        title={`View profile of ${user?.url}`}
                      >
                        {post.account_url}
                      </a>
                      <div className='give-emerald'>
                        <a
                          title='Give Emerald'
                          href='https://imgur.com/register?redirect=%2Fgallery%2FQEej4kn'
                        >
                          <Gift width='10' height='10' />
                          <span>Give Emerald</span>
                        </a>
                      </div>
                    </div>
                    <div className='meta'>
                      <span>{post.views.toLocaleString()} Views</span>
                      <span className='mx-1'>•</span>
                      <span className='posted-time'>{postedTime}</span>
                    </div>
                  </div>
                  <div className='gallery-options'>
                    <Dropdown>
                      <Dropdown.Toggle as='div' id='dropdown-basic'>
                        <ThreeDots />
                      </Dropdown.Toggle>

                      <Dropdown.Menu align='end'>
                        <Dropdown.Item className='item' href='#/action-1'>
                          <Embed />
                          <span>Embed</span>
                        </Dropdown.Item>

                        <Dropdown.Item className='item' href='#/action-2'>
                          <Download />
                          <span>Download</span>
                        </Dropdown.Item>

                        <Dropdown.Item className='item' href='#/action-3'>
                          <Flag />
                          <span>Report</span>
                        </Dropdown.Item>

                        <Dropdown.Item className='item' href='#/action-3'>
                          <PersonX />
                          <span>Mute user</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className='content-wrapper'>
                {post.images.length > 0 &&
                  post.images.map((media: any) =>
                    media.animated ? (
                      <div>
                        <div className='media-container'>
                          <div className='media'>
                            <div className='media-video'>
                              <div className='post-video'>
                                <div className='wrapper'>
                                  <div className='video-wrapper'>
                                    <video
                                      controls
                                      draggable='false'
                                      autoPlay
                                      loop
                                      preload='metadata'
                                    >
                                      <source
                                        type={media.type}
                                        src={media.link}
                                      />
                                    </video>
                                  </div>
                                  {/* videos controls optional */}
                                </div>
                              </div>
                              <div className='video-desc'>
                                {media.description}
                              </div>
                              <div className='media-tags'>
                                <div className='tags'>
                                  {media.tags.length > 0 &&
                                    media.tags.map((tag: any) => {
                                      <div className='tag'>{tag.name}</div>;
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className='media-container'>
                          <div className='media'>
                            <div className='media-imgs'>
                              <div className='imgContainer zoomable'>
                                <div className='dropdown dropdown-media'>
                                  {/* three dots for options */}
                                  {/* dots */}
                                  <div className='dropdown-title'>
                                    <ThreeDots />
                                  </div>
                                </div>
                                <div className=''>
                                  <img src={media.link} alt='' />
                                </div>
                              </div>
                              <div className='video-desc'>
                                {media.description}
                              </div>
                              <div className='media-tags'>
                                <div className='tags'>
                                  {media.tags.length > 0 &&
                                    media.tags.map((tag: any) => {
                                      <a className='tag'>#{tag.name}</a>;
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
              <div className='content-tags'>
                {/* mapping tags */}
                <a href='' className='tags'></a>
              </div>
            </div>

            {/* comments  */}
            {/*//TODO comments component */}
            <div className='comment-list'>
              {/* create comment-login/signup to create */}
              <div className='comment-create'></div>

              {/* comments headline nr-expand- type best-new-top */}
              <div className='comments-headline'>
                <div className='headline-counter'>
                  {post.comment_count} comments
                </div>
                <div className='comments-expand-option'>expand icon</div>
                <div className='dropdown comments-sort'></div>
              </div>

              {/* comments */}
              <div className=''>
                <div className='comments-list'>
                  <div className='list-content'></div>
                  <div className='load-more-comments'>load more comments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right sidebar only hidden in small devices */}
      <div className='gallery-sidebar d-none d-lg-block'></div>
    </div>
  );
}

export default GalleryView;
