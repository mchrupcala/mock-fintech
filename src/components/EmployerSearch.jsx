import { useState, useEffect, useContext } from "react";
import { StateContext } from "../App";
import { fetchEmployers } from "../api/employers";

const EmployerSearch = () => {
  const { setEmployerSelection } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [employers, setEmployers] = useState([]);
  const [filteredEmployers, setFilteredEmployers] = useState([]);

  useEffect(() => {
    const getEmployers = async () => {
      const res = await fetchEmployers();
      setEmployers(res);
    };

    getEmployers();
  }, []);

  useEffect(() => {
    setFilteredEmployers(
      employers.filter((emp) => {
        return emp.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm, employers]);

  const handleEmployerSelection = (val) => {
    setEmployerSelection(val);
  };

  return (
    <div>
      <label htmlFor="searchBar">Employer Search:</label>
      <input
        id="searchBar"
        className="searchBar"
        placeholder="Employer search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredEmployers && (
        <ul className="dropdown">
          {filteredEmployers.map((employer) => (
            <li
              key={employer}
              onClick={() => handleEmployerSelection(employer)}
            >
              {employer}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployerSearch;
