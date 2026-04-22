import "./App.css";
import React from "react";
import Book from "./components/BookClass";
// import BookClass from "./components/BookClass";

function App() {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px", color: "orange" }}>
            <h1>Book Store</h1>

            {/* <BookClass /> */}
            <Book 
                title="React Basics"
                author="John Doe"
                price={2999}
            />

            {/* <BookClass /> */}
            <Book 
                title="Javascript Essencials"
                author="Shridhar Bhat"
                price={9999}
            />
        </div>
    );
}

export default App;