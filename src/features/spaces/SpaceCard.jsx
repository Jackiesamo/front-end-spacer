const SpaceCard = ({ space }) => {
  return (
    <div className="space-card">
      <h3>{space.name}</h3>
      <p>{space.description}</p>
      <span>${space.price}/hour</span>
    </div>
  );
};

export default SpaceCard;
