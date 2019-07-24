import React, { Component } from "react";
import axios from "axios";

import Stock from "./component/Stock";

class App extends Component {
  state = {
    stocks: [],
    loading: false
  };

  // Get Stocks
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.myjson.com/bins/109m7i");

    this.setState({ stocks: res.data, loading: false });
  }

  render() {
    const { loading, stocks } = this.state;

    return (
      <div className="container">
        <Stock loading={loading} stocks={stocks} />
      </div>
    );
  }
}

export default App;
