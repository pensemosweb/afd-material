import { Component } from "react";

export default class AppErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info.componentStack);
  }

  render() {
    if(this.state.hasError) {
      return this.props.fallbackComponent;
    }

    return this.props.children
  }
}