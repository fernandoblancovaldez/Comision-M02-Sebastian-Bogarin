import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
};

export default Main;
