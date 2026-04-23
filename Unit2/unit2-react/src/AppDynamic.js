import React from "react";
import Book from "./components/Book2";

const books = [
  {
    isbn: '978-0-262-13472-9',
    title: "React Basics",
    author: "Dan Abramov",
    price: 499,
    published: new Date('2017-11-30')
  },
  {
    isbn: '978-1-59327-950-9',
    title: "JavaScript Essentials",
    author: "Brendan Eich",
    price: 399,
    published: new Date('2019-07-15')
  }
];

function App() {
  return (
    <div>
      <h1>📚 Book Store</h1>

      {books.map((book) => (
        <Book
          key={book.isbn}
          title={book.title}
          author={book.author}
          price={book.price}
          published={book.published}
        />
      ))}
    </div>
  );
}

export default App;