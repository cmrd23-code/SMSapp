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
import UpdateStudent from "./UpdateStudent";
import AboutUs from "./AboutUs";
function App() {
  const topic = "react";
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/SMSapp/" element={<Home />} />
        <Route path="/SMSapp/users" element={<FetchDataGrid />} />
        <Route path="SMSapp/products" element={<BookComponent />} />
        <Route path="SMSapp/about" element={<AboutUs/>} />
        <Route path="SMSapp/contact" element={<ContactUs />} />
        <Route path="SMSapp/addstudents" element={<AddStudent />} />
        <Route path="/SMSapp/update/:id" element={<UpdateStudent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
