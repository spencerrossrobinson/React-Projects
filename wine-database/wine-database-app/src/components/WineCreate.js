import { useState } from "react";
import useWinesContext from "../hooks/use-wines-context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const WineCreate = () => {
  const initialValues = {
    name: "",
    author: "",
    varietal: "",
    vintage: "",
    notes: "",
  };
  //setting up the local state for the page that watches the Values of A Wine
  //working on submitting multiple values to our local object
  const [values, setValues] = useState(initialValues);
  // imports create wine function from Context
  const { handleCreateWine } = useWinesContext();

  //function that watches the input for changes
  const onHandleChange = (e) => {
    // setValues(event.target.value);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // function that will render the new values and photo when the form is submitted
  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleCreateWine(values);
    setValues(initialValues);
  };

  return (
    //initial set up of the wine card that is built out with bootstrap
    <div className="">
      <h3>Add a Wine</h3>
      <Form onSubmit={onHandleSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter a New Wine"
          type="input"
          value={values.name}
          name="name"
          onChange={onHandleChange}
        />
        <Form.Label>Taster</Form.Label>
        <Form.Control
          placeholder="Name of Taster"
          type="input"
          value={values.author}
          name="author"
          onChange={onHandleChange}
        />
        <Form.Label>Varietal</Form.Label>
        <Form.Control
          placeholder="Enter Varietal"
          type="input"
          value={values.varietal}
          name="varietal"
          onChange={onHandleChange}
        />
        <Form.Label>Vintage</Form.Label>
        <Form.Control
          placeholder="Enter Vintage"
          type="input"
          value={values.vintage}
          name="vintage"
          onChange={onHandleChange}
        />
        <Form.Label>Tasting Notes</Form.Label>
        <Form.Control
          placeholder="Enter Notes"
          as="textarea"
          rows={4}
          value={values.notes}
          name="notes"
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
