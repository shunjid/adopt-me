import { Component } from "react";
import { withRouter } from "react-router-dom";

import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  constructor() {
    super();

    this.state = { loading: true };
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

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
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
          <button>Adopt {name}</button>
          <p>{description}</p>
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
