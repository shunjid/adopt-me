import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
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
    showModal: false,
  };

  /*
   ** arrow functions here will not create a new context unlike `function () {}`
   */
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal: clickedAnimal }) => {
      this.setState({
        url: clickedAnimal.url,
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

  toggleModal = () =>
    this.setState({
      showModal: !this.state.showModal,
    });

  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>LOADING ...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              onClick={this.toggleModal}
              style={{ backgroundColor: theme }}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name} ?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
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
