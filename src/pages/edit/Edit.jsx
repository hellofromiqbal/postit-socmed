/* eslint-disable react-hooks/exhaustive-deps */
import './edit.css';
import EditForm from '../../components/editForm/EditForm';
import { useParams } from 'react-router-dom';
import useGetPost from '../../customHooks/useGetPost';
import { useEffect } from 'react';

const Edit = () => {
  const postId = useParams().id;

  const { post, getPost } = useGetPost();

  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <section className="edit-container">
      <EditForm post={post}/>
    </section>
  );
}
 
export default Edit;