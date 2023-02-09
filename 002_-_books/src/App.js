import BookCreate from "./components/BookCreate";
import { useState } from "react";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    console.log("Need to add book with this title", title);
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
};

export default App;
