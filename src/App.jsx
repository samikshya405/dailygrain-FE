import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/static/About";
import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
