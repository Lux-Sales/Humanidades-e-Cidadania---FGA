import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/Home/"; //adicionar pagina sobre
import Classes from "../pages/Home/"; //adicionar pagina turmas
import Contact from "../pages/Home/contact"; //adicionar pagina contatos

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesComponent;
