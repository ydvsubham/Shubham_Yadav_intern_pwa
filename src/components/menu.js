import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="main_header">
          <a href="#" className="nav_home lap">
            <img src="home.png"></img>
          </a>
          <a href="#" className="logo">
            <img src="logo.png"></img>
          </a>

          <Link to="/addrecipe" className="fab  lap">
            +
          </Link>
        </header>
        <div className="main_conatiner"></div>
        <footer>
          <div className="footer">
            <Link to="/addrecipe" className="fab fab1">
              +
            </Link>
            <p>Copyright &copy; Chefaura</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
