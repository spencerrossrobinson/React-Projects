import BookCreate from "./components/BookCreate";
import { useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    console.log("Need to add book with this title", title);
    const updatedBooks = [...books, { id: 123, title }];
    setBooks(updatedBooks);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;
