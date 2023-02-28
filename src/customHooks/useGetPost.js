import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { database } from "../config/firebase";

const useGetPost = () => {
  const [post, setPost] = useState([]);

  const getPost = async (postId) => {
    const postDoc = await doc(database, "posts", postId);
    const result = await getDoc(postDoc);
    setPost({...result.data(), postId: result.id});
  };

  return { post, getPost };
}
 
export default useGetPost;