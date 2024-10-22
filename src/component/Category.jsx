import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useCart } from "./CartContext"; // Import the custom hook for the Cart Context
import North from "../../src/assets/North_Indian_4.jpeg";
import pizza from "../assets/Pizza.jpeg";
import noodles from "../assets/Noodles.jpeg";
import pasta from "../assets/Pasta.jpeg";
import paratha from "../assets/Paratha.jpeg";
import biryani from "../assets/Biryani_2.jpeg";
import burger from "../assets/Burger.jpeg";
import cakes from "../assets/Cakes.jpeg";
import chinese from "../assets/Chinese.jpeg";
import chole from "../assets/Chole_Bature.jpeg";
import Dosa from "../assets/Dosa.jpeg";
import gulab from "../assets/Gulab_Jamun.jpeg";
import Ice_Creams from "../assets/Ice_Creams.jpeg";
import idli from "../assets/Idli.jpeg";
import khichdi from "../assets/Khichdi.jpeg";
import Poori from "../assets/Poori.jpeg";
import Pure_Veg from "../assets/Pure_Veg.jpeg";
import rolls from "../assets/Rolls.jpeg";
import salad from "../assets/Salad.jpeg";
import South_Indian_4 from "../assets/South_Indian_4.jpeg";

function Category() {
  const { addToCart } = useCart(); // Get the function to add items to the cart
  const items = [
    { image: North, name: "North-indian",price:279 },
    { image: pizza, name: "Pizza",price:199 },
    { image: noodles, name: "Noodles",price:140 },
    { image: pasta, name: "Pasta",price:179 },
    { image: paratha, name: "Paratha",price:79 },
    { image: biryani, name: "Biryani",price:359 },
    { image: burger, name: "Burger",price:249 },
    { image: cakes, name: "Cakes",price:499 },
    { image: chinese, name: "Chinese",price:380 },
    { image: chole, name: "Chole-bature",price:139 },
    { image: Dosa, name: "Dosa",price:199 },
    { image: gulab, name: "Gulab-jamun",price:79 },
    { image: Ice_Creams, name: "ice-creams",price:99 },
    { image: idli, name: "idli",price:179 },
    { image: khichdi, name: "khichdi",price:203 },
    { image: Poori, name: "Poori",price:159 },
    { image: Pure_Veg, name: "Pure-veg",price:379 },
    { image: rolls, name: "Rolls",price:199 },
    { image: salad, name: "Salad",price:99 },
    { image: South_Indian_4, name: "South-indian",price:400 },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(items.length / itemsPerPage) - 1)
    );
  };

  const handleAddToCart = (item) => {
    addToCart(item); // Add the selected item to the cart
  };

  return (
    <div>
      <div className="container d-flex mt-4 fw-bold">
        <h4>What's On Your Mind?</h4>
        <div className="d-flex ms-auto gap-4">
          <FaArrowLeft onClick={handlePrev} style={{ cursor: "pointer" }} />
          <FaArrowRight onClick={handleNext} style={{ cursor: "pointer" }} />
        </div>
      </div>

      <div
        className="container mt-4"
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          className="d-flex"
          style={{
            width: `${items.length * (100 / itemsPerPage)}%`,
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="d-flex flex-column justify-content-center align-items-center"
              style={{
                width: `${100 / itemsPerPage}%`,
                textAlign: "center",
                padding: "10px",
              }}
              onClick={() => handleAddToCart(item)} // Add item to cart when clicked
            >
              <img
                src={item.image}
                alt={item.path}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
