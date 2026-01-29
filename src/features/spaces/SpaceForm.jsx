import { useState } from 'react';

const SpaceForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [price, setPrice] = useState(initialData.price || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price per hour" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SpaceForm;
