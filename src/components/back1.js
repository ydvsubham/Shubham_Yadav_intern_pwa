import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Back1 extends Component {
  render() {
    return (
      <Link to="/">
        <p>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </p>
      </Link>
    );
  }
}
