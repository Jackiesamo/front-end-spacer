const PaymentSimulation = ({ amount, onSuccess }) => {
  const handlePayment = () => {
    alert(`Payment of $${amount} successful!`);
    onSuccess();
  };

  return <button onClick={handlePayment}>Pay ${amount}</button>;
};

export default PaymentSimulation;
