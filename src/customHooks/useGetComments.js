import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { database } from "../config/firebase";

const useGetComments = () => {
  const [allComments, setAllComments] = useState([]);

  const getPostsRef = collection(database, "comments");

  const getAllComments = async () => {
    const result = await getDocs(getPostsRef);
    // console.log(result.docs.map((doc) => ({...doc.data(), postId: doc.id})));
    setAllComments(result.docs.map((doc) => ({...doc.data(), commentId: doc.id})));
  };

  return { allComments, getAllComments };
}
 
export default useGetComments;