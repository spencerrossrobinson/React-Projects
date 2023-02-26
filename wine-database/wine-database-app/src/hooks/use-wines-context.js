import { useContext } from "react";
import WinesContext from "../context/wines";

//created a custom code to save two imports
const useWinesContext = () => {
  return useContext(WinesContext);
};

export default useWinesContext;
