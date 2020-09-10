import { useState } from "react";

export default function useToggle(intialVal) {
  const [toggle, settoggle] = useState(intialVal);

  const handleUpdateToggle = () => {
    settoggle(!toggle);
  };
  return [toggle, handleUpdateToggle];
}
