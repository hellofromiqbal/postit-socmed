import './createComment.css';
import useCreateComment from '../../customHooks/useCreateComment';

const CreateComment = (props) => {
  const {post} = props;

  const { register, handleSubmit, processInput } = useCreateComment(post.postId);

  return (
    <section className="createComment-container">
      <form onSubmit={handleSubmit(processInput)}>
        <textarea placeholder={`Comment this post`} {...register("comment")}></textarea>
        <input className='button' type="submit" value="Comment"/>
      </form>
    </section>
  );
}
 
export default CreateComment;