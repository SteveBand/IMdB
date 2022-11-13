import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SingleMovie } from './components/singleMovie';
import { HomePage } from './flows/homePage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
