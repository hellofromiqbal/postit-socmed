import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../config/firebase";

const useLikePost = () => {
  const [user] = useAuthState(auth);

  const likePostRef = collection(database, "likes");

  const likePost = async (postId) => {
    await addDoc(likePostRef, {
      userUid: user?.uid,
      postId: postId
    });
  };

  return { likePost };
}
 
export default useLikePost;