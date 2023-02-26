import { createContext, useState } from "react";
import axios from "axios";

const WinesContext = createContext();

const Provider = ({ children }) => {
  const [wines, setWines] = useState([]);

  // if making a request to network make sure to sure to use async and await
  //function to fetch all active wiens from our local server
  const fetchWines = async () => {
    const response = await axios.get("http://localhost:3001/wines");

    setWines(response.data);
  };
  // function to go in and edit wines
  const editWineById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/wines/${id}`, {
      title: newTitle,
    });
    console.log(response);
    // function to updateWines
    const updatedWines = wines.map((wine) => {
      if (wine.id === id) {
        return { ...wine, ...response.data };
      }
      return wine;
    });
    setWines(updatedWines);
  };
  // function to delete wines
  const deleteWineById = async (id) => {
    await axios.delete(`http://localhost:3001/wines/${id}`);
    const updatedWines = wines.filter((wine) => {
      return wine.id !== id;
    });
    setWines(updatedWines);
  };
  //function to create a wine card
  const handleCreateWine = async (title) => {
    const response = await axios.post("http://localhost:3001/wines", {
      title,
    });
    console.log(response);
    const updatedWines = [...wines, response.data];
    setWines(updatedWines);
  };

  //setting the value of value to share to each of the above functions outlined
  const valueToShare = {
    wines,
    deleteWineById,
    editWineById,
    handleCreateWine,
    fetchWines,
  };

  return (
    <WinesContext.Provider value={valueToShare}>
      {children}
    </WinesContext.Provider>
  );
};
export { Provider };
export default WinesContext;
