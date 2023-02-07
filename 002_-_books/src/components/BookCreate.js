import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const onHandleChange = (event) => {
    setTitle(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={onHandleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={onHandleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
