import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./styles/main.scss";

import ViewExample from "./ViewExample";
import ViewCustom from "./ViewCustom";

const Root = () => (
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<ViewExample />} />
        <Route path="/p2" element={<ViewCustom />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
