import './editForm.css';
import useEditForm from '../../customHooks/useEditForm';
import { useNavigate } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import useDeletePost from '../../customHooks/useDeletePost';

const EditForm = (props) => {
  const {post} = props;

  const navigate = useNavigate();

  const { register, handleSubmit, processInput } = useEditForm(post.postId);

  const { deletePost } = useDeletePost();

  const cancelEdit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <section className="editForm-container">
      <h3>Edit Post</h3>
      <form onSubmit={handleSubmit(processInput)}>
        <textarea
          placeholder={`What's on your mind?`}
          {...register("post")}
          defaultValue={post.post}
        >
        </textarea>
        <div className="editForm-action">
          <div className="action__non-danger">
            <input className='button' type="submit" value="Save"/>
            <button className="button" onClick={(e) => cancelEdit(e)}>Cancel</button>
          </div>
          <div className="action__danger">
            <BsTrash className='icon' onClick={() => deletePost(post.postId)}/>
          </div>
        </div>
      </form>
    </section>
  );
}
 
export default EditForm;