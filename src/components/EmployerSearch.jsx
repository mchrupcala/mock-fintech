import { useState } from "react";
import { fetchEmployers } from "../api/employers";
// TODO: debounce. press enter to fetchEmployers

const EmployerSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <label htmlFor="searchBar">Employer Search:</label>
      <input
        id="searchBar"
        className="searchBar"
        placeholder="Employer search..."
      />
    </div>
  );
};

export default EmployerSearch;
