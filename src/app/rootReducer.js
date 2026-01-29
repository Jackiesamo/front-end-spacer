import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import spacesReducer from '../features/spaces/spacesApi';
import bookingsReducer from '../features/bookings/bookingsApi';

const rootReducer = combineReducers({
  auth: authReducer,
  spaces: spacesReducer,
  bookings: bookingsReducer,
});

export default rootReducer;
