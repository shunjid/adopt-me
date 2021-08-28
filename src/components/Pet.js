const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{animal}</p>
      <p>{breed}</p>
    </div>
  );
};

export default Pet;
