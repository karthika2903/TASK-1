
import React, { useState } from "react";
import Img1 from "../assets/pic2.jpg";
import Img2 from "../assets/pic3.jpg";
import Img3 from "../assets/pic4.jpg";
import Img4 from "../assets/pic5.png";
import Img5 from "../assets/pic6.jpg";
import Img6 from "../assets/pic1.jpg";
import Img7 from "../assets/pic7.jpg";
import Img8 from "../assets/pic10.jpg";
import Img9 from "../assets/pic9.jpg";

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
    <div style={{ padding: "10px", boxSizing: "border-box",  backgroundColor:"#ddd"}}>
      {shops.map((shop) => (
        <div
          key={shop.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "15px",
            padding: "10px",
            backgroundColor:"#fff",
            borderRadius:"8px",
            fontFamily:"Poppins"
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={shop.image}
              alt={shop.name}
              style={{
                maxWidth: "70px",
                maxHeight: "70px",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              flex: 1,
              paddingLeft: "15px",
            }}
          >
            <h4
              style={{
                margin: 0,
                // fontSize: "medium",
                fontWeight: "bold",
              }}
            >
              {shop.name}
            </h4>
            <p
              style={{
                margin: "5px 0",
                fontSize: "small",
              }}
            >
              Size: {shop.count}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: "bold",
                fontSize: "small",
              }}
            >
              RM {shop.price}
            </p>
            <div
              onClick={() => handleCheckboxClick(shop.id)}
              style={{
                marginTop: "10px",
                width: "25px",
                height: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                borderRadius:"4px",
                backgroundColor: shop.checked ? "#0800ff" : "#E0E0E0",
              }}
            >
              {shop.checked && (
                <span style={{ color: "#fff", fontSize: "16px" }}>✔</span>
              )}
            </div>
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