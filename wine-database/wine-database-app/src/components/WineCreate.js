import { useState } from "react";
import useWinesContext from "../hooks/use-wines-context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const WineCreate = () => {
  //setting up the local state for the page that watches the Title of A Wine
  const [title, setTitle] = useState("");
  // imports create wine function from Context
  const { handleCreateWine } = useWinesContext();

  //function that watches the input for changes
  const onHandleChange = (event) => {
    setTitle(event.target.value);
  };
  // function that will render the new title and photo when the form is submitted
  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleCreateWine(title);
    setTitle("");
    console.log(setTitle);
  };

  return (
    //initial set up of the wine card that is built out with bootstrap
    <div className="">
      <h3>Add a Wine</h3>
      <Form onSubmit={onHandleSubmit}>
        <Form.Label>Title</Form.Label>
        <Form.Control
          placehold="Enter a New Wine"
          type="input"
          value={title}
          onChange={onHandleChange}
        />
        <Button variant="success" type="submit">
          Create!
        </Button>
      </Form>
    </div>
  );
};

export default WineCreate;
