import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<CreateEmployeeComponent />} />
          <Route path="/update-employee/:empno" element={<CreateEmployeeComponent />} />
          <Route path="/view-employee/:empno" element={<ViewEmployeeComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;