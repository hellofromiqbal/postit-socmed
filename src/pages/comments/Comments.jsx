/* eslint-disable react-hooks/exhaustive-deps */
import './comments.css';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetPost from '../../customHooks/useGetPost';
import { BiArrowBack } from 'react-icons/bi';
import CreateComment from '../../components/createComment/CreateComment';
import CommentsList from '../../components/commentsList/CommentsList';
import PostDetail from '../../components/postDetail/PostDetail';

const Comments = () => {
  const postId = useParams().id;

  const navigate = useNavigate();

  const { post, getPost } = useGetPost();

  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <section className="comments-container">
      <div className="post-detail">
        <div className="post-detail__header">
          <BiArrowBack className='icon' onClick={() => navigate("/home")}/>
          <h3>Comments</h3>
        </div>
        <PostDetail post={post}/>
        <CreateComment post={post}/>
      </div>
      <CommentsList post={post}/>
    </section>
  );
}
 
export default Comments;