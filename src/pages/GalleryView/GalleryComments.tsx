import React from 'react';

function GalleryComments({ post }: any) {
  return (
    <div id={`comments-${post.id}`} className='comment-list'>
      {/* create comment-login/signup to create */}
      <div className='comment-create'></div>

      {/* comments headline nr-expand- type best-new-top */}
      <div className='comments-headline'>
        <div className='headline-counter'>{post.comment_count} comments</div>
        <div className='comments-expand-option'></div>
        <div className='dropdown comments-sort'></div>
      </div>

      {/* comments */}
      <div className=''>
        <div className='comments-list'>
          <div className='list-content'></div>
          <div className='load-more-comments'></div>
        </div>
      </div>
    </div>
  );
}

export default GalleryComments;
