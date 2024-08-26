import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';

import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/todos" element={<TodoPage />} />
    </Routes>
  </Router>
  );
}

export default App;
