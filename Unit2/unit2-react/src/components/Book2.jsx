function Book({ title, author, price, published }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h2>{title}</h2>
      <p><b>Author:</b> {author}</p>
      <p><b>Price:</b> ₹{price}</p>
      <p><b>Published:</b> {published.toDateString()}</p>
    </div>
  );
}

export default Book;