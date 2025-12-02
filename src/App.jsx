import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import { SkeletonTheme } from "react-loading-skeleton";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#f6f6f6" highlightColor="#ECECEC">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </>
  );
}

export default App;
