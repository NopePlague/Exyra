import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import Sessions from './pages/Sessions';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/sessions" element={<Sessions />} />
      </Routes>
    </div>
  )
}

export default App
