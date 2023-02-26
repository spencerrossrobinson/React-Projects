import { useState } from "react";
import useWinesContext from "../hooks/use-wines-context";
import Button from "react-bootstrap/Button";

const WineCreate = () => {
  const [title, setTitle] = useState("");
  const { handleCreateWine } = useWinesContext();

  const onHandleChange = (event) => {
    setTitle(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleCreateWine(title);
    setTitle("");
  };

  return (
    <div className="">
      <h3>Add a Wine</h3>
      <form onSubmit={onHandleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={onHandleChange} />
        <Button variant="success"> Create!</Button>
      </form>
    </div>
  );
};

export default WineCreate;
