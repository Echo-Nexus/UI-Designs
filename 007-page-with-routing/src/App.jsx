import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";
import Footer from "./components/Footer";
import Product from "../pages/Product";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Course from "../pages/Course";
import CourseDetails from "../pages/CourseDetails";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="/course" element={<Course />} />
        <Route path="/course/:name" element={<CourseDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
