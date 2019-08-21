import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error. <Link to="/">Click here</Link> to go back to home,
          or wait for 5 seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
