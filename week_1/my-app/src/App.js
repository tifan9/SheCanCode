import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Header from "./components/Header";
import Country from "./components/Country";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Countries />
          </>
        } />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
