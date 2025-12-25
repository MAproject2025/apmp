import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ViewEmployeeComponent() {
  const { empno } = useParams();   // get employee ID from URL
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    EmployeeService.getEmployeeById(empno).then((res) => {
      setEmployee(res.data);
    });
  }, [empno]);

  const backToList = () => navigate("/employees");

  if (!employee) {
    return <div className="container"><h3>Loading employee details...</h3></div>;
  }

  return (
    <div className="container">
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label><strong>Employee ID:</strong></label>
            <div>{employee.empno}</div>
          </div>
          <div className="row">
            <label><strong>Name:</strong></label>
            <div>{employee.empname}</div>
          </div>
          <div className="row">
            <label><strong>Age:</strong></label>
            <div>{employee.age}</div>
          </div>
          <div className="row">
            <label><strong>Salary:</strong></label>
            <div>{employee.salary}</div>
          </div>
          <button className="btn btn-primary" onClick={backToList} style={{ marginTop: "15px" }}>
            Back to Employee List
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployeeComponent;