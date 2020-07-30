import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Back2 extends Component {
  render() {
    return (
      <Link to="/addrecipe">
        <p>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </p>
      </Link>
    );
  }
}
