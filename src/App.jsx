import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import { SkeletonTheme } from "react-loading-skeleton";
import Home from "./pages/Home";
import Metaverse from "./pages/Metaverse";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#f6f6f6" highlightColor="#ECECEC">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metaverse" element={<Metaverse />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </>
  );
}

export default App;
