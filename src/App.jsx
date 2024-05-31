import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import BookList from "./pages/books/BookList";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book-list" element={<BookList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
