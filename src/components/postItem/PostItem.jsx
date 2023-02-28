/* eslint-disable react-hooks/exhaustive-deps */
import './postItem.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { RiChat1Line } from 'react-icons/ri';
import useLikePost from '../../customHooks/useLikePost';
import { auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import useUnlikePost from '../../customHooks/useUnlikePost';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const {post, comments, likes} = props;

  const { likePost } = useLikePost();

  const { unlikePost } = useUnlikePost();

  const hasUserLikedThisPost = likes.find((like) => like.userUid === user?.uid);

  const isUserOwnThePost = user?.uid === post.userUid;

  return (
    <article className="postItem-container">
      <div className="postItem-textual">
        <h3>{post.username}</h3>
        <p>{post.post}</p>
      </div>
      <div className="postItem-action">
        <div className="postItem-action__item">
          {hasUserLikedThisPost?
            <AiFillHeart className='icon' onClick={() => unlikePost(post.postId)}/>
            :
            <AiOutlineHeart className='icon' onClick={() => likePost(post.postId)}/>
          }
          <p>{likes.length}</p>
        </div>
        <div className="postItem-action__item">
          <RiChat1Line className='icon' onClick={() => navigate(`/comments/${post.postId}`)}/>
          <p>{comments.length}</p>
        </div>
        {isUserOwnThePost &&
          <div className="postItem-action__item">
            <FiEdit2 className='icon' onClick={() => navigate(`/edit/${post.postId}`)}/>
          </div>
        }
      </div>
    </article>
  );
}
 
export default PostItem;