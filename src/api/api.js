import axios from 'axios';
import config from '../config';

const {usersEndpoint} = config;

const axiosInstance = axios.create();

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

export const updateUser = async user => {
  const updateUserEndpoint = `${usersEndpoint}/${user.id}`;

  const response = await axiosInstance.put(updateUserEndpoint);
  return response.data;
};
