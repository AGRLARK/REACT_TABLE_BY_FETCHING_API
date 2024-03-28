import { useState } from "react";
import { useEffect } from "react"
const API = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers(API);
  })

  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Table Using Fetch Method </h1 >
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Body</th>
            <th>Title</th>
          </tr>
        </tbody>
        {users.map((user) =>
          <>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userId}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          </>
        )

        }
      </table>
    </>
  )
}

export default App