import { book } from "./assets/books";
import Book from "./Book";
{
  /*import Book from "./Book";*/
}
import "./Book.css";
function BookComponent() {
  return (
    <div className="container mt-5">
      <h2 className="h2"> books</h2>
      <ul className="booklist">
        {book.map((b, i) => (
          <Book key={i} b={b} />
        ))}
      </ul>
    </div>
  );
}
export default BookComponent;
