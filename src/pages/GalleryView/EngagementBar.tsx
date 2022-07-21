import { Heart, Share, ChatSquare } from 'react-bootstrap-icons';
import { ReactComponent as Upvote } from '../../assets/svg/arrow-up.svg';
import { ReactComponent as Downvote } from '../../assets/svg/arrow-down.svg';
import { ReactComponent as Emerald } from '../../assets/svg/emerald.svg';

function EngagementBar({ post }: any) {
  return (
    <div className='engagement-bar-container'>
      <div className='gallery-vote'>
        <div className='vote-accolades'>
          <div className='animateEmerald'></div>
          <div className='item btn-emerald'>
            <Emerald title='Acolades' width={32} height={32} />
          </div>
        </div>
        <div className='vote-controls'>
          <div className='item up'>
            <div className='vote-up'>
              <Upvote title='Upvote' width={32} height={32} />
            </div>
          </div>
          <div className='item score'>
            <span title='Total score'>{post.score}</span>
          </div>
          <div className='item down'>
            <div className='vote-down'>
              <Downvote title='Downvote' width={32} height={32} />
            </div>
          </div>
          <div className='item favorite'>
            <Heart title='Add to favorites' />
          </div>
        </div>
      </div>
      <div className='gallery-share'>
        <div className='dropdown item'>
          <Share title='share' width={24} height={32} />
        </div>
      </div>
      <div className='gallery-comment-count'>
        <div className='item'>
          <ChatSquare title='Jump to comments' width={24} height={32} />
        </div>
        <div className='item label'>{post.comment_count}</div>
      </div>
    </div>
  );
}

export default EngagementBar;
