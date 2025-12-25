import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const addEmployee = () => navigate("/add-employee");
  const editEmployee = (id) => navigate(`/update-employee/${id}`);
  const viewEmployee = (id) => navigate(`/view-employee/${id}`);
  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(() => {
      setEmployees(employees.filter((employee) => employee.empno !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee No</th>
              <th>Employee Name</th>
              <th>Employee Age</th>
              <th>Employee Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.empno}>
                <td>{employee.empno}</td>
                <td>{employee.empname}</td>
                <td>{employee.age}</td>
                <td>{employee.salary}</td>
                <td>
                  <button
                    onClick={() => editEmployee(employee.empno)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteEmployee(employee.empno)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => viewEmployee(employee.empno)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;