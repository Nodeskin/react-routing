import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayoutComp from "./BookLayoutComp";
import Font from "./Font";
import DataFetching from "./DataFetching"


function App() {
  return (
    <>  
     {/* <nav>
        <ul className="uls">
          <Font to = '/'/>
          <li>
            <Link  to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Books</Link>
          </li>
        </ul>
      </nav> */}
      <DataFetching/>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/book" element={<BookLayoutComp/>}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />}/>
        <Route path="new" element={<NewBook />}/>
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
