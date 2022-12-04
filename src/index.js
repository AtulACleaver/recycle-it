import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Info from "./Info.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
