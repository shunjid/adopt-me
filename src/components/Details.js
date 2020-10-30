import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "../theme/ThemeContext";

class Details extends React.Component {
  /*
   ** construct with properties
   ** handle those properties upto React
   */

  /*
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  */
  state = {
    loading: true,
  };

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

    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button style={{ backgroundColor: theme }}>Adopt {name}</button>
          )}
        </ThemeContext.Consumer>
        ;<p>{description}</p>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
