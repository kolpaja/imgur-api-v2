import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { galleryList } from '../../features/galleryListSlice';

function GalleryView() {
  let { galleryId } = useParams();

  const { list } = useAppSelector((state) => state.galleries);

  const post: any = list?.find((item: any) => item.id === galleryId);
  console.log(post);

  if (!post) return <div>ups... post not found</div>;

  return (
    <div className='gallery'>
      <div className='gallery-main-container'>
        {/* left actions like vote share sidebar */}
        <div className='gallery-engagement-bar'>
          <div className='engagementbar-container'>
            <div className='gallery-vote'>
              <div className='vote-accolades'></div>
              <div className='vote-controls'>
                <div className='item up'></div>
                <div className='item score'></div>
                <div className='item down'></div>
                <div className='item favorite'></div>
              </div>
            </div>
            <div className='gallery-share'>
              <div className='dropdown'>share</div>
            </div>
            <div className='gallery-comment-count'>
              <div className='item'>svg</div>
              <div className='item'>{post.comment_count}</div>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className='gallery-content-wrapper'>
          <div className='insideContentWrapper'>
            <div className='gallery-content'>
              <div className='content-header'>
                <div className='gallery-title'>
                  <div className='row'>
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
                    {post.account_url.slice(0, 1)}
                  </a>
                  <div className='info-wrapper'>
                    <div className='info'>
                      <a
                        href={`https://imgur.com/user/${post.account_url}`}
                        className='author-name'
                      >
                        {post.account_url}
                      </a>
                      <div className='give-emerald'></div>
                    </div>
                    <div className='meta'>
                      <span>{post.views} Views</span>
                      <span className='dot'>•</span>
                      <span className='posted-time'>{post.datetime}</span>
                    </div>
                  </div>
                  <div className='gallery-options'>
                    <div className='dropdown'>
                      <div className='dropdown-titlte'>
                        <ThreeDots />
                      </div>
                      <div className='dropdown-menu d-none'>
                        <select />
                        <option>embed</option>
                        <option>download</option>
                        <option>report</option>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content-wrapper'>
                <div>
                  {/* mapping images of the post */}
                  <div className='media-container'>
                    <div className='media'>
                      <div className='imgContainer zoomable'>
                        <img />
                      </div>
                    </div>
                    <div className='media-descr'>
                      <p>img descr</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content-tags'></div>
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
      <div className='gallery-sidebar'></div>
    </div>
  );
}

export default GalleryView;
