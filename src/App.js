import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SingleMovie } from './components/singleMovie';
import { HomePage } from './flows/homePage';
import { ErrorPage } from './flows/errorPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
