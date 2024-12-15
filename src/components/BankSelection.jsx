import { useContext } from "react";
import { banks, StateContext } from "../App";

const BankSelection = () => {
  const { setBankSelection } = useContext(StateContext);

  return (
    <div>
      <label htmlFor="bank-dropdown"></label>
      <select
        id="bank-dropdown"
        onChange={(e) => {
          //   console.log(e.target.value, e.target.value?.name);
          const b = banks.find((bank) => parseInt(e.target.value) === bank.id);
          setBankSelection(b);
        }}
      >
        {banks
          ? banks.map((bank) => {
              return (
                <option key={bank.id} value={bank.id}>
                  {bank.name}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default BankSelection;
