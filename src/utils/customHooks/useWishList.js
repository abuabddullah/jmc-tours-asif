import { useEffect, useState } from "react";

const useWishList = () => {
  const [wishedItems, setWishedItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("wishedItems")) || [];
    setWishedItems(storedItems);
  }, []);

  const toggleWishItem = (item) => {
    const updatedItems = wishedItems.some((wItem) => wItem._id === item._id)
      ? wishedItems.filter((wItem) => wItem._id !== item._id)
      : [...wishedItems, item];

    setWishedItems(updatedItems);
    localStorage.setItem("wishedItems", JSON.stringify(updatedItems));
  };

  const clearWishList = () => {
    setWishedItems([]);
    localStorage.removeItem("wishedItems");
  };

  return { wishedItems, toggleWishItem, clearWishList };
};

export default useWishList;
