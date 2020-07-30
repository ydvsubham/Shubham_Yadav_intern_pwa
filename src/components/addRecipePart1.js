import React, { Component } from "react";
export class Part1 extends Component {
  render() {
    return (
      <form onSubmit={this.onSubmit1}>
        <div className="recipe_input">
          <input
            type="text"
            value={this.setState.title}
            onChange={this.onChangeTitle}
            placeholder="Recipe Title *"
          ></input>
          <input
            type="text"
            value={this.setState.description}
            onChange={this.onChangeDescription}
            placeholder="Desicription"
          ></input>
          <input type="submit"></input>
        </div>
      </form>
    );
  }
}
