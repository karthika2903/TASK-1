import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';
import Logo from '../assets/logo.png';

const FormPage = () => {
  const navigate = useNavigate();

  const handleViewPriceClick = () => {
    navigate('/shop-list');
  };

  return (
    <div className="form-container">
     
      <form className="form-content">
        <div className='twoPart'>
          <div className='logo-center'>
          <img src={Logo}/>
          </div>
      
        {/* <input type="text" placeholder="Price List" className="form-input" /> */}
        {/* <input type="text" placeholder="25/4/2025 to 30/4/2025" className="form-input" /> */}
        <h2 style={{marginTop:"-10px"}}>Price list</h2>
        <h3 style={{marginTop:"-8px"}}>25:04:2025 to 29:04:2025</h3>

      {/* <div className="form-logo">
        <h1>
          FAC<span style={{ color: "#007BFF" }}>IO</span>
        </h1>
      </div> */}
        <input type="text" placeholder="Shop Name" className="form-input" />
        <input type="text" placeholder="Mobile Number" className="form-input phone" />
        <button
          type="button"
          className="form-button"
          onClick={handleViewPriceClick}
        >
          View Price
        </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;