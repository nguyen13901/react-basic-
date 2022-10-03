import React from "react";
import Color from "../HOC/Color.js";

class Home extends React.Component {
  render() {
    return <h1>This is a Home page</h1>;
  }
}

export default Color(Home);
