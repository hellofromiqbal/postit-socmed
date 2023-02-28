import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { database } from "../config/firebase";

const useGetPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getPostsRef = collection(database, "posts");

  const getAllPosts = async () => {
    const result = await getDocs(getPostsRef);
    // console.log(result.docs.map((doc) => ({...doc.data(), postId: doc.id})));
    setAllPosts(result.docs.map((doc) => ({...doc.data(), postId: doc.id})));
  };

  return { allPosts, getAllPosts };
}
 
export default useGetPosts;