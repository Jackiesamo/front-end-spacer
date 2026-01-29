const BookingSummary = ({ booking }) => {
  return (
    <div>
      <p>Space: {booking.spaceName}</p>
      <p>Date: {booking.date}</p>
      <p>Duration: {booking.duration} hours</p>
      <p>Total: ${booking.total}</p>
    </div>
  );
};

export default BookingSummary;
