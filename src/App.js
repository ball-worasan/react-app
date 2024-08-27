// App.js
import React, { useState } from "react";
import Button from "./Button";
import "./App.css"; // นำเข้าไฟล์ CSS

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      message: "",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 25,
      message: "",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 28,
      message: "",
    },
  ]);

  const handleOkClick = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, message: "OK clicked!" } : employee
      )
    );
    console.log(`OK clicked for employee ID: ${id}`);
  };

  const handleCancelClick = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, message: "" } : employee
      )
    );
    console.log(`Cancel clicked for employee ID: ${id}`);
  };

  return (
    <div className="App">
      <h1>Hello Worasan</h1>
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <div className="employee-info">
            <h2>{employee.name}</h2>
            <p>Email: {employee.email}</p>
            <p>Age: {employee.age}</p>
          </div>
          <div className="button-group">
            <Button text="OK" onClick={() => handleOkClick(employee.id)} />
            <Button
              text="Cancel"
              onClick={() => handleCancelClick(employee.id)}
            />
          </div>
          {employee.message && <p className="message">{employee.message}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;
