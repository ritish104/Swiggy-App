import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsMinecart } from "react-icons/bs";
import "./NavBar.css";
import { MdMyLocation } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useCart } from "./CartContext";

function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const { cartItems } = useCart(); // Access the cartItems from context

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    console.log("Cart Open:", !isCartOpen);  // This will log the state change
  }; 

  const toggleOther = () => {
    setIsOtherOpen(!isOtherOpen);
  };

  const closeOther = () => {
    setIsOtherOpen(false);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          color: "#282c3f",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container-fluid">
          {/* Logo and 'Other' Dropdown */}
          <div
            className="d-flex justify-content-center align-items-center p-2 navbar-item"
            onClick={toggleOther}
          >
            <img src={logo} alt="Logo" height={50} />
            <h4>Other</h4>
            <FaAngleDown className="ms-2" style={{ color: "#ffa700" }} />
          </div>

          {/* 'Other' Dropdown Modal */}
          {isOtherOpen && (
            <>
              <div
                className="overlay"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 999,
                }}
                onClick={closeOther}
              />
              <div
                className="position-absolute"
                style={{
                  top: "100%",
                  left: "200px",
                  transform: "translateX(-50%)",
                  marginTop: "8px",
                  width: "400px",
                  height: "500px",
                  padding: "10px",
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  zIndex: 1000,
                }}
              >
                <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
                  <div className="mt-4 mb-2" style={{ marginRight: "300PX" }}>
                    <IoMdClose style={{ fontSize: "38px" }} onClick={closeOther} />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Search for area & Name..."
                      style={{
                        fontSize: "18px",
                        padding: "24px 18px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        height: "40px",
                      }}
                    />
                  </div>
                </div>

                <div
                  className="d-flex align-items-center mt-4"
                  style={{
                    fontSize: "18px",
                    width: "350px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    padding: "10px 15px",
                    marginLeft: "12PX",
                  }}
                >
                  <MdMyLocation style={{ fontSize: "24px", marginRight: "10px" }} />
                  <div>
                    <span>Get Current Location</span>
                    <p style={{ margin: 0, fontSize: "14px" }}>using GPS</p>
                  </div>
                </div>
              </div>
            </>
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-flex align-items-center justify-content-center gap-5"
            id="navbarSupportedContent"
            style={{ marginLeft: "200px" }}
          >
            {/* Other Nav Items */}
            <div className="d-flex align-items-center justify-content-center gap-2 navbar-item" style={{ fontSize: "17px", fontWeight: "600" }}>
              <FaBoxArchive /> Swiggy Corporate
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 navbar-item" style={{ fontSize: "17px", fontWeight: "600" }}>
              <IoSearch /> Search
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 navbar-item" style={{ fontSize: "17px", fontWeight: "600" }}>
              <BiSolidOffer style={{ fontSize: "19px" }} /> Offers <sup style={{ color: "#ffa700" }}>New</sup>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 navbar-item" style={{ fontSize: "17px", fontWeight: "600" }}>
              <MdOutlineHelpOutline style={{ fontSize: "19px" }} /> Help
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 navbar-item" style={{ fontSize: "17px", fontWeight: "600" }}>
              <FaRegUser /> Sign In
            </div>

            {/* Cart Section */}
            <div
  className="d-flex align-items-center justify-content-center gap-2 navbar-item position-relative cart-container"
  style={{ fontSize: "17px", fontWeight: "600", cursor: "pointer" }}
  onClick={toggleCart} // Toggle the cart on click
>
  <BsMinecart style={{ fontSize: "20px" }} />
  Cart
  {cartItems.length > 0 && (
    <span
      className="cart-count"
      style={{
        fontSize: "12px",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#ffa700",
        borderRadius: "50%",
        padding: "5px 10px",
        position: "absolute",
        top: "-10px",
        right: "-10px",
      }}
    >
      {cartItems.length}
    </span>
  )}

  {/* Cart Box */}
  {isCartOpen && (
    <div className="cart-box">
      <IoMdClose
        style={{ fontSize: "24px", float: "right", cursor: "pointer" }}
        onClick={toggleCart} // Close the cart box on clicking close
      />
      {cartItems.length === 0 ? (
        <div>
          <p
            className="d-flex align-items-center justify-content-center"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Your cart is empty
          </p>
          <span style={{ fontSize: "15px", color: "black" }}>
            Good food is always cooking! Go ahead, order some yummy items from the menu.
          </span>
        </div>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              marginTop: "10px",
              paddingTop: "10px",
              borderTop: "1px solid #ccc",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>Total:</span>
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>₹{totalPrice}</span>
          </div>
        </div>
      )}
    </div>
  )}
</div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
