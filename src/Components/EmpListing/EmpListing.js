import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpListing = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Employee Listing</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.active ? "Yes" : "No"}</td>
              <td>
                <Link
                  to={`/employee/detail/${employee.id}`}
                  className="btn btn-info me-2"
                >
                  Detail
                </Link>
                <Link
                  to={`/employee/edit/${employee.id}`}
                  className="btn btn-primary me-2"
                >
                  Edit
                </Link>
                <Link
                  to={`/employee/delete/${employee.id}`}
                  className="btn btn-danger"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/employee/create" className="btn btn-success">
        Create New Employee
      </Link>
    </div>
  );
};

export default EmpListing;
