import { useContext } from "react";
import { StateContext } from "../App";

const SummaryCard = () => {
  const { bankSelection } = useContext(StateContext);
  return (
    <div>
      <p>Selected: {bankSelection.name}</p>
    </div>
  );
};

export default SummaryCard;
