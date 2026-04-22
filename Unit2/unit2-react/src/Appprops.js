import "./App.css";
import React from "react";
import Book from "./components/Book";
// import BookClass from "./components/BookClass";

function App() {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h1>Book Store</h1>

      {/* <BookClass /> */}
      <Book />
    </div>
  );
}

export default App;