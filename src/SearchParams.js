import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./hooks/useDropdown";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropDown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: location,
      breed: breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet
      .breeds(animal)
      .then(({ breeds: breedsOfSelectedAnimal }) => {
        const breedNamesList = breedsOfSelectedAnimal.map(({ name }) => name);
        setBreeds(breedNamesList);
      })
      .catch((e) => console.log(e));
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
