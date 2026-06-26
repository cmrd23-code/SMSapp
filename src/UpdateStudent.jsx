import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;
const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/students/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${apiUrl}/api/students/${id}`,
        student,
      );

      alert("Student updated successfully");
      navigate("/SMSapp");
    } catch (error) {
      console.log(error);
      alert("Update failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-control mb-3"
        />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control mb-3"
        />

        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Course"
          className="form-control mb-3"
        />

        <button className="btn btn-primary" type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
};

export default UpdateStudent;
