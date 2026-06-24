import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="data-table">
      <h2>User List</h2>

      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <h3>{user.name}</h3>
          </li>
        ))}
      </ul>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.marks}</td>
                <td>
                  <button
                    className="update-btn"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
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
    </div>
  );
};
export default FetchData;
