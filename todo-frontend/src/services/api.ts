import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';
export const getTasks = () => axios.get(API_URL);
export const createTask = (data: { title: string; description: string }) => axios.post(API_URL, data);
export const deleteTask = (id: number) => axios.delete(`${API_URL}/${id}`);
