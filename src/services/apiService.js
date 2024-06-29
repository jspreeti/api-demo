import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:8080",
});

const getUsers = () => url.get("/admin");

// const deleteUser = (id) => url.delete(`user/${id}`);

// const createUser = (user) => url.post("/user", user);

export { getUsers }; //, deleteUser, createUser };
