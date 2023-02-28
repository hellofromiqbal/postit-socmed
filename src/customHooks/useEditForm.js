import { collection, doc, updateDoc } from "firebase/firestore";
import { database } from "../config/firebase";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";

const useEditForm = (postId) => {
  const navigate = useNavigate();

  const scheme = yup.object().shape({
    post: yup.string().min(1).max(1000).required()
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(scheme)
  });

  const editPostRef = collection(database, "posts");

  const processInput = async (data) => {
    const postToBeEdited = doc(editPostRef, postId);
    await updateDoc(postToBeEdited, {
      post: data.post
    });
    reset();
    navigate("/home");
  };

  return { register, handleSubmit, processInput};
}
 
export default useEditForm;