import { createContext, useState } from "react";
import "./App.css";
import EmployerSearch from "./components/EmployerSearch";
import BankSelection from "./components/BankSelection";
import SummaryCard from "./components/SummaryCard";

export const StateContext = createContext();
export const banks = [
  { name: "Bank of America", id: 1 },
  { name: "Citi", id: 2 },
  { name: "Chase", id: 3 },
  { name: "JP Morgan", id: 4 },
  { name: "Santander", id: 5 },
];

function App() {
  const [bankSelection, setBankSelection] = useState(banks[0]);
  const [employerSelection, setEmployerSelection] = useState(null);

  return (
    <StateContext.Provider
      value={{
        bankSelection,
        employerSelection,
        setBankSelection,
        setEmployerSelection,
      }}
    >
      <div className="App">
        <EmployerSearch />
        <BankSelection />
        <SummaryCard />
        <button type="submit">Save</button>
      </div>
    </StateContext.Provider>
  );
}

export default App;
