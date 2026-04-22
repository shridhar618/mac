import React, { Component } from "react";

class BookClass extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.author}</p>
        <p>₹{this.props.price}</p>
      </div>
    );
  }
}

export default BookClass;