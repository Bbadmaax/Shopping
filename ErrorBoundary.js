import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Error-ka hel, state update samee
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Error details log garee
  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
    console.log("Component stack:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
