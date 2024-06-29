import React, { useState, useEffect } from "react";
import { getUsers } from "../services/apiService";
//import UserForm from "./UserForm";

export default function UserInfo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then(() => (result) => {
        setUsers(result);
        console.log("User Role :" + users);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [users]);

  //   const handleDelete = (id) => {
  //     deleteUser(id)
  //       .then(() => ((result) => {
  //         console.log(result);
  //         setUser(user.filter((u) => u.id !== id));
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   };

  return (
    <div>
      <h1>{users}</h1>
    </div>
    // <div>
    //   <UserForm user={users} setUser={setUsers}></UserForm>
    //   <h1>
    //     <ul>
    //       {users.map((user) => (
    //         <li key={user.id}>
    //           <h2>{user.name}</h2>
    //           <button>Delete</button>
    //         </li>
    //       ))}
    //     </ul>
    //   </h1>
    // </div>
  );
}
