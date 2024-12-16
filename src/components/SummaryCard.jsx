import { useContext } from "react";
import { StateContext } from "../App";

const SummaryCard = () => {
  const { bankSelection, employerSelection } = useContext(StateContext);
  return (
    <div>
      <p>Bank: {bankSelection.name}</p>
      <p>Employer: {employerSelection}</p>
    </div>
  );
};

export default SummaryCard;
