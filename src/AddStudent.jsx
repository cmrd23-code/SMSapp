import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//const api_url = "http://localhost:8080/addStudents";
const api_url = "https://smsbackend-amv6.onrender.com/api/students";
function AddStudent() {
  const navigater = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
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
          email: "",
          course: "",
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
          <label
            style={{ display: "block", textAlign: "left" }}
            className="form-label"
          >
            Student Name
          </label>
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
          <label
            style={{ display: "block", textAlign: "left" }}
            className="form-label"
          >
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            style={{ display: "block", textAlign: "left" }}
            className="form-label"
          >
            Course
          </label>
          <input
            className="form-control"
            type="text"
            name="course"
            placeholder="Enter Course"
            value={student.course}
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
