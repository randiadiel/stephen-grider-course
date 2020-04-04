import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  // React says we have to define render!!
  render() {
    const { state } = this;
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {state.errorMessage}</div>;
    } else if (!state.errorMessage && state.lat) {
      return <SeasonDisplay lat={state.lat} />;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
