import WineShow from "./WineShow";
import useWinesContext from "../hooks/use-wines-context";

const WineList = () => {
  //use custom hook
  const { wines } = useWinesContext();
  const renderedWines = wines.map((wine) => {
    return <WineShow key={wine.id} wine={wine} />;
  });

  return <div>{renderedWines}</div>;
};

export default WineList;
