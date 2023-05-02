import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Fiche from "../pages/Fiche-logement/Fiche-logement";
import About from "../pages/About/About";
import Error404 from "../pages/404/404";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Fiche />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RoutesPath;
