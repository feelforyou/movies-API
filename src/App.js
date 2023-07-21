import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MovieDetail from "./Pages/MovieDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:titleID" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
