import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/Config";
import { toast } from "react-toastify";

const useFetchProductList = (listName) => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    const getList = () => {
      setIsLoading(true);
      try {
        const productsRef = collection(db, listName);
        const q = query(productsRef);
        onSnapshot(q, (querySnapshot) => {
          const allData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDisplayList(allData);
          setIsLoading(false);
        });
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
      }
    };
    getList();
  }, [listName]);

  return { displayList, isLoading };
};

export default useFetchProductList;
