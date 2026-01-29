import axios from '../../utils/apiClient';

export const fetchBookings = async () => {
  const response = await axios.get('/bookings');
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await axios.post('/bookings', bookingData);
  return response.data;
};
