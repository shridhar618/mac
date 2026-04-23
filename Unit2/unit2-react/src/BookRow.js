import React from "react";

class BookRow extends React.Component {
  render() {
    const book = this.props.book;

    return (
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.price}</td>
        <td>
          {book.published ? book.published.toDateString() : ""}
        </td>
      </tr>
    );
  }
}

export default BookRow;