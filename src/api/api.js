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
