import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

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

    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({
          redirect: true,
        });
      }, 2000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

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
