import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateEmployeeComponent() {
  const { empno } = useParams();   // empno will be undefined for "add"
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empname: "",
    age: "",
    salary: ""
  });

  useEffect(() => {
    if (empno) {   // only fetch if updating
      EmployeeService.getEmployeeById(empno).then((res) => {
        setEmployee(res.data);
      });
    }
  }, [empno]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    if (empno) {
      // Update existing employee
      EmployeeService.updateEmployee(employee, empno).then(() => navigate("/employees"));
    } else {
      // Create new employee
      EmployeeService.createEmployee(employee).then(() => navigate("/employees"));
    }
  };

  const cancel = () => navigate("/employees");

  return (
    <div className="container">
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">{empno ? "Update Employee" : "Add Employee"}</h3>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Employee Name:</label>
              <input
                type="text"
                value={employee.empname}
                onChange={(e) => setEmployee({ ...employee, empname: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="text"
                value={employee.age}
                onChange={(e) => setEmployee({ ...employee, age: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Salary:</label>
              <input
                type="text"
                value={employee.salary}
                onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                className="form-control"
              />
            </div>
            <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
            <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;