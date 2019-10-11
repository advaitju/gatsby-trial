import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    some: true,
  };

  handleClick() {
    this.setState(prevState => ({
      some: !prevState.some,
    }));
  }

  render() {
    console.log(this.props.location.pathname);
    console.log("some");
    return (
      <Layout>
        <SEO title="Home" />
        <h1 onClick={this.handleClick}>App</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          {/* <Image /> */}
        </div>
      </Layout>
    );
  }
}

export default App;
