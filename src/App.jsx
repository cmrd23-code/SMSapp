import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FetchDataGrid from "./FetchDataGrid";
import Navbar from "./Navbar";
import BookComponent from "./BookComponent";
import FetchData from "./FetchData";
import Book from "./Book";
import ContactUs from "./ContactUs";
import { Home } from "./Home";
import AddStudent from "./AddStudent";
import FooterComponent from "./FooterComponent";
function App() {
  const topic = "react";
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<FetchDataGrid />} />
        <Route path="/products" element={<BookComponent />} />
        <Route path="/about" element={<FetchData />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/addstudents" element={<AddStudent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
