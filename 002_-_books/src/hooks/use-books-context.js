import { useContext } from "react";
import BooksContext from "../context/books";

//creating custom hooks to save redudent code
const useBooksContext = () => {
  return useContext(BooksContext);
};

export default useBooksContext;
