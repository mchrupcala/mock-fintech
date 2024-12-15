import "./App.css";
import EmployerSearch from "./components/EmployerSearch";
import BankSelection from "./components/BankSelection";
import SummaryCard from "./components/SummaryCard";

function App() {
  return (
    <div className="App">
      <EmployerSearch />
      <BankSelection />
      <SummaryCard />
    </div>
  );
}

export default App;
