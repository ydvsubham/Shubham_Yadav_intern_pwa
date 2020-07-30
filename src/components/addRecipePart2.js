import React, { Component } from "react";

export class Part2 extends Component {
  render() {
    return (
      <form>
        <div className="recipe_input1">
          <div class="button-wrapper">
            <span class="label">
              <i class="fa fa-picture-o" aria-hidden="true"></i>
              <i>Photos*</i>
              <i>(max5)</i>
            </span>

            <input
              type="file"
              name="upload"
              id="upload"
              class="upload-box"
              placeholder="Upload File"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}
