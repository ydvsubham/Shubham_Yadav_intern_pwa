import React, { Component } from "react";
import { Part1 } from "./addRecipePart1";
import { Part2 } from "./addRecipePart2";
import { Post } from "./post";
import { Next } from "./next";
import { Back1 } from "./back1";
import { Back2 } from "./back2";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
export class Test extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.state = {
      title: "",
      description: "",
      categorie: "class2",
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit1(e) {
    console.log("yes");
    this.setState = { categorie: "class1" };
    e.PreventDefault();
    const obj = {
      title: this.state.title,
      description: this.state.description,
    };
    console.log(obj);
    axios.post("http://localhost/chefaura/sign_up_inc.php", obj);

    this.setState = {
      title: "",
      description: "",
      categorie: "class2",
    };
  }

  render() {
    return (
      <Router>
        <div className="recipe_conatiner">
          <header className="recipe_header">
            <div className="header_child1">
              <div className="recipe_pre">
                <Switch>
                  <Route exact path="/addrecipe" component={Back1} />
                  <Route exact path="/addrecipe/post" component={Back2} />
                </Switch>
                <p id="left">Add Recipe</p>
              </div>
              <div className="recipe_next">
                <Switch>
                  <Route exact path="/addrecipe" component={Next} />
                  <Route exact path="/addrecipe/post" component={Post} />
                </Switch>
              </div>
            </div>
            <div className="header_child2">
              <div className="progres_bar1">
                <div className="progres_item1">1</div>
                <div className="progres_item2"></div>
                <div className="progres_item3">2</div>
              </div>
              <div className="progres_bar2">
                <a href="#" className="progres_bar21">
                  Caption
                </a>

                <a href="#" className="progres_bar21">
                  Media
                </a>
              </div>
            </div>
          </header>
          <Switch>
            <Route exact path="/addrecipe" component={Part1} />
            <Route exact path="/addrecipe/post" component={Part2} />
          </Switch>
        </div>
      </Router>
    );
  }
}
