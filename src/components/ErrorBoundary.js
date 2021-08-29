import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);

    this.setState({
      errorMessage: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      const { errorMessage } = this.state;
      const defaultErrorMessage = "Something went wrong.";

      return (
        <h2>
          {errorMessage || defaultErrorMessage}
          <Link to="/">Click here</Link> to go back to the home page.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
