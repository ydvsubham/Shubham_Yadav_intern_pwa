import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Next extends Component {
  render() {
    return (
      <Link to="/addrecipe/post" onClick={this.onSubmit1}>
        Next
      </Link>
    );
  }
}
