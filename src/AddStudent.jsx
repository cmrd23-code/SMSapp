import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const api_url = "http://localhost:8080/addStudents";

function AddStudent() {
  const navigater = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    marks: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const saveStudent = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        alert("Student saved successfully!");
        setStudent({
          name: "",
          marks: "",
        });
        navigater("/users");
      } else {
        alert("Failed to save student");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving student");
    }
  };

  return (
    <div>
      <h3>Enter the details of students</h3>

      <form onSubmit={saveStudent}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Marks</label>
          <input
            className="form-control"
            type="number"
            name="marks"
            placeholder="Enter Marks"
            value={student.marks}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
