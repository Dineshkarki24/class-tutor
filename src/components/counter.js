import React, { useState, useEffect } from "react";
import Axios from "axios";
import useToggle from "./useToggle";

function Counter(props) {
  // using state or usestate hoooks
  const [count, setCounter] = useState(0);
  const [isLike, setIsLike] = useToggle(false);
  const [isNameShow, setIsNameShow] = useToggle(false);
  console.log(props);
  const handleIncrement = () => {
    console.log("click");
    setCounter(count + 1);
  };

  // componenetdidimount and componentdidupdate and componentwilllUnmount
  useEffect(() => {
    console.log("run every time");
    return () => {
      console.log("Clean Up");
    };
  });
  // componentdidmount
  useEffect(() => {
    console.log("Run once");
    Axios.get();
  }, []);
  return (
    <div>
      <h1>Your counter is {count} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1 onClick={setIsLike}>{isLike ? "Like" : "DisLike"}</h1>
      <h1 onClick={setIsNameShow}>{isNameShow ? "Ram" : "There is no name"}</h1>
    </div>
  );
}
export default Counter;
