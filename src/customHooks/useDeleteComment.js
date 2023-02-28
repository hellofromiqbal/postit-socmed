import { collection, deleteDoc, doc } from "firebase/firestore";
import { database } from "../config/firebase";

const useDeleteComment = () => {
  const deleteCommentRef = collection(database, "comments");

  const deleteComment = async (commentId) => {
    const postToBeDeleted = doc(deleteCommentRef, commentId);
    await deleteDoc(postToBeDeleted);
  };

  return { deleteComment };
}

export default useDeleteComment;