import { collection, deleteDoc, doc, getDocs, query, where, writeBatch } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { database } from "../config/firebase";

const useDeletePost = () => {
  const navigate = useNavigate();

  
  const deletePost = async (postId) => {
    const deletePostRef = collection(database, "posts");
    const postToBeDeleted = doc(deletePostRef, postId);
    await deleteDoc(postToBeDeleted);
    navigate("/home");
  };

  
  
  const deleteAllComments = async (postId) => {
    const commentsBatch = writeBatch(database);
    const deleteCommentsRef = collection(database, "comments");
    const queryComments = await query(deleteCommentsRef, where("postId", "==", postId));
    const querySnapshot = await getDocs(queryComments);
    querySnapshot.forEach((doc) => commentsBatch.delete(doc.ref));
    commentsBatch.commit();
  };

  const deleteAllLikes = async (postId) => {
    const likesBatch = writeBatch(database);
    const deleteCommentsRef = collection(database, "likes");
    const queryComments = await query(deleteCommentsRef, where("postId", "==", postId));
    const querySnapshot = await getDocs(queryComments);
    querySnapshot.forEach((doc) => likesBatch.delete(doc.ref));
    likesBatch.commit();
  };

  const deletionProcess = async (postId) => {
    await deleteAllComments(postId);
    await deleteAllLikes(postId);
    await deletePost(postId);
  };

  return { deletionProcess };
}
 
export default useDeletePost;