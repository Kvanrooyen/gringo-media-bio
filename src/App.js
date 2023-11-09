import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Construction from './components/construction';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div>
      <Construction />
    </div>
  );
}