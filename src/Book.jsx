

function Book({b}) {
  const {name,image,year,author,price,pages}=b;
  return (
    <li className="book" key={b.book_titletitle}>
      <img src={b.image_url}></img>
      <p>Title: {b.book_title}</p>
      <p>Author:{b.book_author}</p>
      <p>Publisher:{b.publisher}</p>
      <p>Year of Publication:{b.year_of_publication}</p>
      <p>Price:{b.price}</p>
      <p>Pages:{b.pages}</p>
    </li>
  );
}
export default Book;
