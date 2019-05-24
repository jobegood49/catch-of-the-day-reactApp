import React, { Component } from "react";

class StorePicker extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          <h2>Hello</h2>
          <input type="text" required placeholder="Store Name"></input>
          <button type="submit">Visit Store ➞ </button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
