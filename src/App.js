import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Timeline from "./timeline";
import Account from "./account";
import Signin from "./signin";

function App() {
  return (
    <div className='background'>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/timeline" element={<Timeline/>} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
