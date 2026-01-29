import { useState } from 'react';

const BookingForm = ({ onSubmit, spaceId }) => {
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ spaceId, date, duration });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} min="1" />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
