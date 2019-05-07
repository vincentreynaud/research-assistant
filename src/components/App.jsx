import React, { Component } from "react";
import "./../css/App.css";
import CurrentPageTitle from "./CurrentPageTitle";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "I'm currently visiting this page"
    };
  }

  setPageTitle = title => {
    this.setState({ pageTitle: title });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <CurrentPageTitle
            title={this.state.pageTitle}
            setPageTitle={this.setPageTitle}
          />
        </header>
      </div>
    );
  }
}

export default App;
