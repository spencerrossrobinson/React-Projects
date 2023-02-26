import "./App.css";
import { useEffect } from "react";
import WineList from "./components/WineList";
import useWinesContext from "./hooks/use-wines-context";
import WineCreate from "./components/WineCreate";

const App = () => {
  //destructures the fetchWine function from the Context folder
  const { fetchWines } = useWinesContext();

  // loads fetch wine function from context on render
  useEffect(() => {
    fetchWines();
  }, []);

  return (
    <div className="">
      <h1>Spencer's Wine List</h1>
      <WineList />
      <WineCreate />
    </div>
  );
};

export default App;
