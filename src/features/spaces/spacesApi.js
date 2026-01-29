import axios from '../../utils/apiClient';

export const fetchSpaces = async (page = 1, limit = 10) => {
  const response = await axios.get(`/spaces?page=${page}&limit=${limit}`);
  return response.data;
};

export const addSpace = async (spaceData) => {
  const response = await axios.post('/spaces', spaceData);
  return response.data;
};

export const updateSpace = async (id, spaceData) => {
  const response = await axios.put(`/spaces/${id}`, spaceData);
  return response.data;
};
