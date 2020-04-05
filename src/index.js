import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    const { state } = this;
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {state.errorMessage}</div>;
    } else if (!state.errorMessage && state.lat) {
      return <SeasonDisplay lat={state.lat} />;
    }
    return <Spinner message="Please accept location request..." />;
  }

  // React says we have to define render!!
  // Its rendered so many times
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
