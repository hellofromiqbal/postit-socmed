/* eslint-disable react-hooks/exhaustive-deps */
import './commentsList.css';
import { useEffect } from 'react';
import useGetComments from '../../customHooks/useGetComments';
import CommentItem from '../commentItem/CommentItem';
import { FiRefreshCcw } from 'react-icons/fi';

const CommentsList = (props) => {
  const {post} = props;

  const { allComments, getAllComments } = useGetComments();

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <section className="commentsList-container">
      <div className="commentsList-header">
        <h3>Recent Comments</h3>
        <FiRefreshCcw className='icon' onClick={() => getAllComments()}/>
      </div>
      <div className="commentsList-content">
        {allComments.filter((comment) => comment.postId === post.postId).map((data) => (
          <CommentItem data={data} key={data.commentId}/>
        ))}
      </div>
    </section>
  );
}
 
export default CommentsList;