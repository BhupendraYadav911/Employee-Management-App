import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpDetail = () => {
  const { empid } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/employee/${empid}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) => console.error("Error fetching employee:", error));
  }, [empid]);

  return (
    <div className="container">
      <h2 className="mt-4">Employee Detail</h2>
      {employee && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Employee ID: {employee.id}</h5>
            <p className="card-text">Name: {employee.name}</p>
            <p className="card-text">Email: {employee.email}</p>
            <p className="card-text">Phone: {employee.phone}</p>
            <p className="card-text">
              Active: {employee.active ? "Yes" : "No"}
            </p>
            <Link to="/" className="btn btn-secondary">
              Back to Listing
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmpDetail;
