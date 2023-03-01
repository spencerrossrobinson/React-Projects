import { useState } from "react";
import useWinesContext from "../hooks/use-wines-context";
import Button from "react-bootstrap/Button";

const WineEdit = ({ wine, onSubmit }) => {
  const [title, setTitle] = useState(wine.values);
  const { editWineById } = useWinesContext();
  console.log(title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editWineById(wine.id, title);
  };

  return (
    <form className="wine-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <Button variant="success">Save</Button>
    </form>
  );
};

export default WineEdit;
