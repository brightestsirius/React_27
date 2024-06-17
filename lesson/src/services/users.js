import axios from "axios";

const API = `https://jsonplaceholder.typicode.com/users/`;

const users = {
  get: (id) => axios(id ? API + id : ``).then(({ data }) => data),
  post: (value) => axios.post(API, value).then(({ data }) => data),
  patch: (id, value) => axios.patch(API + id, value).then(({ data }) => data),
  put: (id, value) => axios.put(API + id, value).then(({ data }) => data),
  delete: (id) => axios.delete(API + id).then(({ data }) => data),
};

export default users;