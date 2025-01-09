
import React, { useState } from 'react';
import Img1 from '../assets/pic2.jpg';
import Img2 from '../assets/pic3.jpg';
import Img3 from '../assets/pic4.jpg';
import Img4 from '../assets/pic5.png';
import Img5 from '../assets/pic6.jpg';
import Img6 from '../assets/pic1.jpg';
import Img7 from '../assets/pic7.jpg';
import Img8 from '../assets/pic10.jpg';
import Img9 from '../assets/pic9.jpg';



const ShopList = () => {
  const [shops, setShops] = useState([
    { id: 1, name: "100 PLUS CAN", count: "24*320ML", price: 100, checked: false, image: Img1 },
    { id: 2, name: "100 PLUS", count: "24*500ML", price: 100, checked: false, image: Img2 },
    { id: 3, name: "100 PLUS", count: "12*1.5L", price: 100, checked: false, image: Img3 },
    { id: 4, name: "COCO COLA", count: "12*1.5L", price: 100, checked: false, image: Img4 },
    { id: 5, name: "COCO COLA CAN", count: "24*320ML", price: 100, checked: false, image: Img5 },
    { id: 6, name: "DASANI DRINKING WATER", count: "24*600ML", price: 100, checked: false, image: Img6 },
    { id: 7, name: "DASANI DRINKING WATER", count: "12*1.5L", price: 100, checked: false, image: Img7 },
    { id: 8, name: "DUTCH LADY CHOCOLATE", count: "24*200ML", price: 100, checked: false, image: Img8 },
    { id: 9, name: "DUTCH LADY CHOCOLATE", count: "12*1L", price: 100, checked: false, image: Img9 },


  ]);

  const handleCheckboxClick = (id) => {
    setShops((prevShops) =>
      prevShops.map((shop) =>
        shop.id === id ? { ...shop, checked: !shop.checked } : shop
      )
    );
  };

  return (
    <div style={{ padding: "10px", boxSizing: "border-box" }}>
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
            <h3 style={{ margin: 0, fontSize: "1rem", }}>{shop.name}</h3>
            <p style={{ margin: "5px 0", fontSize: "0.9rem", fontFamily: "Poppins",fontWeight:"bold" }}>
              Size {shop.count}
            </p>
            {/* <p style={{ margin: 0, fontWeight: "bold", fontSize: "1rem", fontFamily:"Poppins"}}>
              RM {shop.price}
            </p> */}
          </div>
          <p style={{ margin: "5px", fontWeight: "bold", fontSize: "1rem", fontFamily: "Poppins"  }}>
            RM {shop.price}
          </p>
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
              backgroundColor: shop.checked ? "#007BFF" : "#E0E0E0",
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