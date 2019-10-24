import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    output: undefined,
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com${this.props.location.pathname.slice(
        this.props.location.pathname.indexOf("/app")
      )}`
    )
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>App</h1>
        <button onClick={this.handleClick}>JSON</button>
        <p>{`https://jsonplaceholder.typicode.com${this.props.location.pathname.slice(
          4
        )}`}</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          {this.state.output}
        </div>
      </Layout>
    );
  }
}

export default App;
