import Pet from "./Pet";

const PetResults = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found !</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default PetResults;
