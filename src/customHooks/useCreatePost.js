import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { auth, database } from "../config/firebase";

const useCreatePost = () => {
  const [user] = useAuthState(auth);

  const scheme = yup.object().shape({
    post: yup.string().min(1).max(1000).required()
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(scheme)
  });

  const createPostRef = collection(database, "posts");

  const processInput = async (data) => {
    await addDoc(createPostRef, {
      userUid: user?.uid,
      username: user?.displayName,
      post: data.post
    });
    reset();
  };

  return { register, handleSubmit, processInput };
}
 
export default useCreatePost;