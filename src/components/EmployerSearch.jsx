import { useState, useEffect } from "react";
import { fetchEmployers } from "../api/employers";
// TODO: debounce. press enter to fetchEmployers

const EmployerSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const getEmployers = async () => {
      const res = await fetchEmployers();
      console.log(res);
      setEmployers(res);
    };

    getEmployers();
  }, []);

  return (
    <div>
      <label htmlFor="searchBar">Employer Search:</label>
      <input
        id="searchBar"
        className="searchBar"
        placeholder="Employer search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select></select>
    </div>
  );
};

export default EmployerSearch;
