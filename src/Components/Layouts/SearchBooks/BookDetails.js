import { SearchBooks } from "./SearchBooks";

export const BookDetails = (props) => {
  return (
    <div>
      {props.items.map((BooksDetails) => (
        <SearchBooks
          key={BooksDetails.id}
          id={BooksDetails.id}
          img={BooksDetails.img}
          title={BooksDetails.title}
          author={BooksDetails.author}
          description={BooksDetails.description}
        />
      ))}
    </div>
  );
};
