import { Component } from "react";
import { withRouter } from "react-router-dom";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "../contexts/ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  constructor() {
    super();

    this.state = { loading: true, showModal: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  async componentDidMount() {
    const petId = this.props.match.params.id;
    const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${petId}`);
    const json = await res.json();

    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  adopt() {
    window.location = "https://bit.ly/pet-adopt";
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    if (!name && !animal) {
      throw new Error("Animal not found.");
    }

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>

          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>

          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
