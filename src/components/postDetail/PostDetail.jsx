/* eslint-disable react-hooks/exhaustive-deps */
import './postDetail.css';

const PostDetail = (props) => {
  const {post} = props;

  return (
    <article className="postDetail-container">
      <div className="postDetail-textual">
        <h3>{post.username}</h3>
        <p>{post.post}</p>
      </div>
    </article>
  );
}
 
export default PostDetail;