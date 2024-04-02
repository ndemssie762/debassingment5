import React, { useState, useEffect } from "react";
import axios from "axios";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("https://randomuser.me/api/?results=5");
      setUsers(response.data.results);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1> Table</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name.first}</td>
              <td>{user.location.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
