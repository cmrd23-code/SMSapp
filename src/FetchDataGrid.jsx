import React, { useEffect, useState } from "react";
import axios from "axios"; import AddStudent from "./AddStudent";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL; 
const FetchDataGrid = () => { 
  const [users, setUsers] = useState([]); 
  const navigator = useNavigate(); 
  // Fetch data from API 
  const fetchData = async () => { 
    try { 
      //const response = await axios.get("http://localhost:8080/studentsDb"); 
      const response = await axios.get( ${apiUrl}/api/students, ); 
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error); } };
  useEffect(() => { fetchData(); }, []);
  // Delete record 
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) 
    {
      try {
        await axios.delete( ${apiUrl}/api/students/${id}, );
        fetchData(); 
        // Refresh grid 
      } catch (error) 
      { console.error("Delete failed:", error); } } };
  // Update record 
  const handleUpdate = (id) => {
    navigator(/update/${id}); };
  function addNewStudent() { 
    navigator("/addstudents"); 
  }
  return (
  <div className="container my-4">

    <div className="text-center mb-4">
      <h2 className="fw-bold">Students List</h2>

      <button
        className="btn btn-primary mt-2"
        onClick={addNewStudent}
      >
        + Add New Student
      </button>
    </div>

    <div className="table-responsive">

      <table className="table table-bordered table-hover table-striped align-middle">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
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

                  <div className="d-flex flex-wrap gap-2">

                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleUpdate(user._id)}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data found.
              </td>
            </tr>
          )}
        </tbody>

      </table>

    </div>

    <div className="text-center mt-4">
      <button className="btn btn-danger">
        Delete All Students
      </button>
    </div>

  </div>
);
}; 
export default FetchDataGrid;
