import axios from "axios";

export const signUp = (body) => {
  return axios.post("/api/users", body);
};

export const activate = (token) => {
  return axios.post("/api/users/token/" + token);
};

export const loadUsers = (page) => {
  return axios.get("/api/users", {
    params: {
      page,
      size: 3,
    },
  });
};

export const getUserById = (id) => {
  return axios.get("/api/users/" + id);
};

export const login = (creds) => {
  return axios.post("/api/auth", creds);
};
