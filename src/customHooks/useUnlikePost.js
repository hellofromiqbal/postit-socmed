import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { database } from "../config/firebase";

const useUnlikePost = () => {
  const unlikePostRef = collection(database, "likes");

  const unlikePost = async (postId) => {
    const queryLikeDoc = await query(unlikePostRef, where("postId", "==", postId));
    const querySnapshot = await getDocs(queryLikeDoc);
    const likeId = querySnapshot.docs[0].id;
    const likeToBeDeleted = doc(unlikePostRef, likeId);
    await deleteDoc(likeToBeDeleted);
  };

  return { unlikePost };
}
 
export default useUnlikePost;