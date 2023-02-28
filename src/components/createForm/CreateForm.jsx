import './createForm.css';
import useCreatePost from '../../customHooks/useCreatePost';

const CreateForm = () => {
  const { register, handleSubmit, processInput } = useCreatePost();

  return (
    <section className="createForm-container">
      <h3>Create Post</h3>
      <form onSubmit={handleSubmit(processInput)}>
        <textarea placeholder={`What's on your mind?`} {...register("post")}></textarea>
        <input className='button' type="submit" value="Post"/>
      </form>
    </section>
  );
}
 
export default CreateForm;