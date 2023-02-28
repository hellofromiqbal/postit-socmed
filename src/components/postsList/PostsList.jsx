/* eslint-disable react-hooks/exhaustive-deps */
import './postsList.css';
import { FiRefreshCcw } from 'react-icons/fi';
import { useEffect } from 'react';
import useGetPosts from '../../customHooks/useGetPosts';
import PostItem from '../postItem/PostItem';
import useGetLikes from '../../customHooks/useGetLikes';
import useGetComments from '../../customHooks/useGetComments';

const PostsList = () => {
  const { allPosts, getAllPosts } = useGetPosts();

  const { allLikes, getAllLikes } = useGetLikes();

  const { allComments, getAllComments } = useGetComments();

  useEffect(() => {
    getAllPosts();
    getAllLikes();
    getAllComments();
  }, []);

  const refresh = () => {
    getAllPosts();
    getAllLikes();
    getAllComments();
  };

  return (
    <section className="postsList-container">
      <div className="postsList-header">
        <h3>Recent Posts</h3>
        <FiRefreshCcw className='icon' onClick={refresh}/>
      </div>
      <div className="postsList-content">
        {allPosts.map((post) => (
          <PostItem
            post={post}
            likes={allLikes.filter((like) => like.postId === post.postId)}
            comments={allComments.filter((comment) => comment.postId === post.postId)}
            key={post.postId}
          />
        ))}
      </div>
    </section>
  );
}
 
export default PostsList;