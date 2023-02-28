import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { auth, database } from '../config/firebase';

const useCreateComment = (postId) => {
  const [user] = useAuthState(auth);

  const scheme = yup.object().shape({
    comment: yup.string().min(1).max(1000).required()
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(scheme)
  });

  const createCommentRef = collection(database, "comments");

  const processInput = async (data) => {
    await addDoc(createCommentRef, {
      userUid: user?.uid,
      username: user?.displayName,
      comment: data.comment,
      postId: postId
    });
    reset();
  };

  return { register, handleSubmit, processInput };
}
 
export default useCreateComment;