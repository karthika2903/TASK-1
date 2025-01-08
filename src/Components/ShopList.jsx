import React, { useState } from 'react';
import Img1 from '../assets/img1-removebg-preview.png';
import Img3 from '../assets/img3-removebg-preview.png';
import Img4 from '../assets/img4-removebg-preview.png';
import Img5 from '../assets/img5-removebg-preview.png';
import Img6 from '../assets/img6-removebg-preview.png';
import Img7 from '../assets/img7-removebg-preview.png';


const ShopList = () => {
  const [shops, setShops] = useState([
    { id: 1, name: "Cosmetics", count: 50, price: 100, checked: false, image: Img1 },
    { id: 3, name: "Footwear", count: 50, price: 100, checked: false, image: Img3},
    { id: 4, name: "Grocery", count: 50, price: 100, checked: false, image:Img4 },
    { id: 5, name: "Sport", count: 50, price: 100, checked: false, image: Img5},
    { id: 6, name: "Furniture", count: 50, price: 100, checked: false, image:Img6 },
    { id: 7, name: "Car Accessories", count: 50, price: 100, checked: false, image: Img7 },
  ]);

  const handleCheckboxClick = (id) => {
    setShops((prevShops) =>
      prevShops.map((shop) =>
        shop.id === id ? { ...shop, checked: !shop.checked } : shop
      )
    );
  };

  return (
    <div style={{ padding: "10px", boxSizing: "border-box",  backgroundColor:"#ddd"}}>
      {shops.map((shop) => (
        <div
          key={shop.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            src={shop.image}
            alt={shop.name}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "15px",
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0, fontSize: "1rem" }}>{shop.name}</h3>
            <p style={{ margin: "5px 0", color: "gray", fontSize: "0.9rem" }}>
              {shop.count} Shop available
            </p>
            <p style={{ margin: 0, fontWeight: "bold", fontSize: "1rem" }}>
              RM {shop.price}
            </p>
          </div>
          <div
            onClick={() => handleCheckboxClick(shop.id)}
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: shop.checked ? "#0800ff" : "#E0E0E0",
              transition: "background-color 0.3s",
            }}
          >
            {shop.checked && <span style={{ color: "#fff", fontSize: "16px" }}>✔</span>}
          </div>
        </div>
      ))}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ShopList;