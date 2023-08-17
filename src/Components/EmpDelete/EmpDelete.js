import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpDelete = () => {
  const { empid } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = () => {
    axios
      .get(`http://localhost:8000/employee/${empid}`)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("Error fetching employee:", error));
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/employee/${empid}`)
      .then(() => {
        console.log("Employee deleted successfully");
        navigate("/");
      })
      .catch((error) => console.error("Error deleting employee:", error));
  };

  return (
    <div className="container">
      <h2 className="mt-4">Delete Employee</h2>
      {employee && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Employee ID: {employee.id}</h5>
            <p className="card-text">Name: {employee.name}</p>
            <p className="card-text">
              Are you sure you want to delete this employee?
            </p>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmpDelete;
