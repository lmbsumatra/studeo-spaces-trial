import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DesignSystem from "./pages/DesignSystem.js";
import Home from "./pages/Home.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;