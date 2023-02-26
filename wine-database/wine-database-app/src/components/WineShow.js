import { useState } from "react";
import WineEdit from "./WineEdit";
import useWinesContext from "../hooks/use-wines-context";
import Button from "react-bootstrap/Button";

const WineShow = ({ wine }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteWineById } = useWinesContext();

  const handleDeleteClick = () => {
    deleteWineById(wine.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{wine.title}</h3>;
  if (showEdit) {
    content = <WineEdit wine={wine} onSubmit={handleSubmit} />;
  }

  return (
    <div className="">
      <img alt="wines" src={`https://picsum.photos/seed/${wine.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <Button variant="success" onClick={handleEditClick}>
          Edit
        </Button>
        <Button variant="danger" onClick={handleDeleteClick}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default WineShow;
