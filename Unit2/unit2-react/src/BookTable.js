import React from "react";
import BookRow from "./BookRow";

const books = [
  {
    isbn: "978-0131103627",
    title: "The C Programming Language",
    author: "Dennis Ritchie",
    price: 599,
    published: new Date("1978-02-22")
  },
  {
    isbn: "978-0132350884",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 899,
    published: new Date("2008-08-01")
  },
  {
    isbn: "978-0201616224",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 799,
    published: new Date("1999-10-30")
  },
  {
    isbn: "978-1491950296",
    title: "Learning React",
    author: "Alex Banks",
    price: 699,
    published: new Date("2017-05-01")
  }
];

function BookTable() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📚 Book Library</h2>

      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price (₹)</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <BookRow
              key={book.isbn}
              book={book}
              rowStyle={
                index % 2 === 0 ? styles.evenRow : styles.oddRow
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
    textAlign: "center"
  },
  heading: {
    marginBottom: "20px"
  },
  table: {
    width: "80%",
    margin: "auto",
    borderCollapse: "collapse",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  headerRow: {
    backgroundColor: "#4CAF50",
    color: "white"
  },
  evenRow: {
    backgroundColor: "#f2f2f2"
  },
  oddRow: {
    backgroundColor: "#ffffff"
  }
};

export default BookTable;