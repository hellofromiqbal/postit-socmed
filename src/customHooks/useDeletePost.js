import { collection, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { database } from "../config/firebase";

const useDeletePost = () => {
  const navigate = useNavigate();

  const deletePostRef = collection(database, "posts");

  const deletePost = async (postId) => {
    const postToBeDeleted = doc(deletePostRef, postId);
    await deleteDoc(postToBeDeleted);
    navigate("/home");
  };

  return { deletePost };
}
 
export default useDeletePost;