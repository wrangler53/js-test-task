import axios from 'axios';
import config from '../config';

const {baseUrl, usersEndpoint} = config;

const axiosInstance = axios.create({
  baseUrl,
});

export const fetchUsers = async () => {
  const response = await axiosInstance.get(usersEndpoint);
  return response.data;
};

export const addUser = async user => {
  const response = await axiosInstance.post(usersEndpoint, user);
  return response.data;
};

export const deleteUser = async userId => {
  const deleteUserEndpoint = `${usersEndpoint}/${userId}`;

  const response = await axiosInstance.delete(deleteUserEndpoint);
  return response.data;
};
