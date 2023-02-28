import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { database } from "../config/firebase";

const useGetLikes = () => {
  const [allLikes, setAllLikes] = useState([]);

  const getLikesRef = collection(database, "likes");

  const getAllLikes = async () => {
    const result = await getDocs(getLikesRef);
    setAllLikes(result.docs.map((doc) => ({...doc.data(), likeId: doc.id})));
  };

  return { allLikes, getAllLikes };
}
 
export default useGetLikes;