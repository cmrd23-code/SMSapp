import React, { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "./AddStudent";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;
const FetchDataGrid = () => {
  const [users, setUsers] = useState([]);
  const navigator = useNavigate();
  // Fetch data from API
  const fetchData = async () => {
    try {
      //const response = await axios.get("http://localhost:8080/studentsDb");
      const response = await axios.get(
        `${apiUrl}/api/students`,
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete record
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(
          `${apiUrl}/api/students/${id}`,
        );
        fetchData(); // Refresh grid
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  // Update record
  const handleUpdate = (id) => {
    navigator(`/update/${id}`);
  };
  function addNewStudent() {
    navigator("/addstudents");
  }
  return (
    <div className="container mt-5">
      <h2 className="h2">---Students List----</h2>
      <button className="btn btn-secondary" onClick={addNewStudent}>
        Click Here to Add New Students
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.course}</td>
                <td>
                  <button
                    style={{ marginRight: "15px" }}
                    className="update-btn"
                    onClick={() => handleUpdate(user._id)}
                  >
                    Update
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data found.</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="btn btn-secondary" onClick={handleDelete}>
        Click Here to Delete all Students
      </button>
    </div>
  );
};
export default FetchDataGrid;
