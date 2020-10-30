import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  /*
   ** construct with properties
   ** handle those properties upto React
   */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  /*
   ** arrow functions here will not create a new context unlike `function () {}`
   */
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal: clickedAnimal }) => {
      this.setState({
        name: clickedAnimal.name,
        animal: clickedAnimal.type,
        location: `${clickedAnimal.contact.address.city}, ${clickedAnimal.contact.address.state}`,
        description: clickedAnimal.description,
        media: clickedAnimal.photos,
        breed: clickedAnimal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>LOADING ...</h1>;
    }

    const { animal, breed, location, description, name } = this.state;
    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    );
  }
}

export default Details;
