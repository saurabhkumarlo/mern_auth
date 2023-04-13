import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../features/User";
const Home = () => {
  const userList = useSelector((state) => state.users.value);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username...."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id - 1,
                name,
                username,
              })
            )
          }
        >
          Add User
        </button>
      </div>
      <div className="displayUseres">
        {userList.map((user, i) => {
          return (
            <div>
              <h1 key={i}>{user.name}</h1>
              <h1 key={i}>{user.username}</h1>
              <input
                type="text"
                placeholder="New Username...."
                onChange={(e) => setUsername(e.target.value)}
              />
              <button>Update Username</button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                Delete Username
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
