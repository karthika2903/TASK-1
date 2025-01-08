import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './Components/FormPage';
import ShopListPage from './Components/ShopList';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/shop-list" element={<ShopListPage />} />
      </Routes>
    </Router>
  );
};

export default App;