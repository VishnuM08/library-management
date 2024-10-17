import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Layouts/Authentication/Login";
import { Signup } from "./Components/Layouts/Authentication/Signup";
import { BookCheckoutPage } from "./Components/Layouts/BookCheckoutPage/BookCheckoutPage";
import { CheckoutDetails } from "./Components/Layouts/BookCheckoutPage/CheckoutDetail";
import { Books } from "./Components/Layouts/HomePage/Components/Books/Book1";
import { Carousel } from "./Components/Layouts/HomePage/Components/Carousel";
import { DiscoverPopularBooks } from "./Components/Layouts/HomePage/Components/DiscoverPopularBooks";
import { Homepage } from "./Components/Layouts/HomePage/Homepage";
import { ManageLibrary } from "./Components/Layouts/ManageLibraryPage/ManageLibrary";
import { MessagesPage } from "./Components/Layouts/MessagesPage/MessagesPage";
import { Navbar } from "./Components/Layouts/NavbarAndFooter/Navbar.js";
import { BookDetails } from "./Components/Layouts/SearchBooks/BookDetails";
import { ShelfPage } from "./Components/Layouts/ShelfPage/ShelfPage";

function App() {
  const BooksDetails = [
    {
      img: require("./Components/Pictures/BooksImages/Room-on-the-roof.png"),
      id: "e1",
      author: "Ruskin Bond",
      title: "Room on the roof",
      description: `Room on the Roof is about an orphaned boy named Rusty who has no
        real family after his parents' death. He is very lonely and sad
        and even though he lives with his guardian (Mr. John Harrison), he
        doesn't feel at home. Rusty is going through several emotions: he
        is confused, obliged, helpless, lonely and sad.`,
    },
    {
      img: require("./Components/Pictures/BooksImages/400days.jpg"),
      id: "e2",
      author: "Chetan Bhagat",
      title: "400 Days",
      description: `12-year-old Siya has been missing nine months. 
      It's a cold case, but Keshav wants to help her mother, Alia, who
       refuses to give up. Welcome to 400 Days―a mystery and romance story like no other. 
       'My daughter Siya was kidnapped.`,
    },
    {
      img: require("./Components/Pictures/BooksImages/Girl-in-room-105.jpg"),
      id: "e3",
      author: "Chetan Bhagat",
      title: "The girl in room 105",
      description: `It tells about an IIT coaching class tutor who
       goes to wish his ex-girlfriend on her birthday and finds her murdered. 
       The rest of the story is his journey where he stands by his ex-girlfriend 
       after her death to find justice. The book also addresses the stereotypes and 
       political issues in India.`,
    },
    {
      img: require("./Components/Pictures/BooksImages/Sidney-sheldon-bloodline.jpg"),
      id: "e4",
      author: "Sidney Sheldon",
      title: "Bloodline",
      description: `Bloodline is another thriller novel from bestselling author,
       Sidney Sheldon. The story revolves around Elizabeth Roffe, 
       who, after the unexpected death of her father,
        becomes the sole heiress to his billion dollar empire. 
      She also realizes that she is all alone in a world that is hostile towards her.`,
    },
    {
      img: require("./Components/Pictures/BooksImages/It-start-with-us.jpg"),
      id: "e5",
      author: "Colleen Hoover",
      title: "It start with us",
      description: ` “It Starts With Us,” Atlas and Lily attempt to rekindle
       the love they felt for each other as teenagers, but must deal with the repercussions
        their love may have now as adults. Hoover illustrates a beautiful, 
        innocent love between Atlas and Lily. 
        Atlas and Lily love each other like kids.`,
    },
    {
      img: require("./Components/Pictures/BooksImages/It-end-with-us.jpg"),
      id: "e6",
      author: "Colleen Hoover",
      title: "It end with us",
      description: `It Ends with Us is a book that follows a girl named Lily who has just moved and is ready
       to start her life after college. Lily then meets a guy named Ryle and she falls for him.
        As she is developing feelings for Ryle, Atlas, her first love,
         reappears and challenges the relationship between Lily and Ryle.`,
    },
  ];

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Homepage />
        </Route>
        <Route path="/search" exact>
          <BookDetails items={BooksDetails} />
        </Route>
        <Route path="/checkout/:id">
          <CheckoutDetails items={BooksDetails} />
        </Route>
        <Route path="/sign-in" exact>
          <Login />
        </Route>
        <Route path="/sign-up" exact>
          <Signup />
        </Route>
        <Route path="/shelf" exact>
          <ShelfPage items={BooksDetails} />
        </Route>
        <Route path="/messages" exact>
          <MessagesPage />
        </Route>
        <Route path="/admin" exact>
          <ManageLibrary />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
