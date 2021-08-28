const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-v2.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p>{`${animal} - ${breed} - ${location}`}</p>
      </div>
    </a>
  );
};

export default Pet;
