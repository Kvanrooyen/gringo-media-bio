import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./components/home'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><LazyHome /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}