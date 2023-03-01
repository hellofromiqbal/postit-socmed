import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../config/firebase";

const useUnlikePost = () => {
  const [user] = useAuthState(auth);

  const unlikePostRef = collection(database, "likes");

  const unlikePost = async (postId) => {
    const queryLikeDoc = await query(unlikePostRef, where("postId", "==", postId), where("userUid", "==", user?.uid));
    const querySnapshot = await getDocs(queryLikeDoc);
    const likeId = querySnapshot.docs[0].id;
    const likeToBeDeleted = doc(unlikePostRef, likeId);
    await deleteDoc(likeToBeDeleted);
  };

  return { unlikePost };
}
 
export default useUnlikePost;