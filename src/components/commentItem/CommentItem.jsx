import './commentItem.css';
import { BsTrash } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
import useDeleteComment from '../../customHooks/useDeleteComment';

const CommentItem = (props) => {
  const {data} = props;
  
  const [user] = useAuthState(auth);

  const isUserOwnTheComment = user?.uid === data.userUid;

  const { deleteComment } = useDeleteComment();

  return (
    <article className="commentItem-container">
      <div className="commentItem-textual">
        <h3>{data.username}</h3>
        <p>{data.comment}</p>
      </div>
      {isUserOwnTheComment && 
        <div className="commentItem-action">
          <div className="postItem-action__item">
            <BsTrash className='icon' onClick={() => deleteComment(data.commentId)}/>
          </div>
        </div>
      }
    </article>
  );
}
 
export default CommentItem;