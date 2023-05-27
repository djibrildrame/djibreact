import React from "react";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import "./Component/appli.css";
import Technoadd from "./Component/Technoadd";
import { Route, Routes } from "react-router-dom";
import TechnoList from "./Component/TechnoList";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Technoadd />} />
        <Route path="/All" element={<TechnoList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
