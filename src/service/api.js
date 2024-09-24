import axios from "axios";

const url = "https://project-mgmt-graphql-f6f0f6666ee3.herokuapp.com/";

export const getallUsers = async (id) => {
    id = id || '';
  return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(url,user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`,user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}