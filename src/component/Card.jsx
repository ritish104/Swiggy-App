import React, { useState } from "react";
import { FcRating } from "react-icons/fc";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import pizz from "../assets/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg";
import pizza from "../assets/75d0b3ebeb56fe2484c944e94cac7a8d.jpeg";
import sweet from "../assets/cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg";
import frozen from "../assets/eillc7d7hbrzcuussus5.jpeg";
import Bowl from "../assets/6e04be27387483a7c00444f8e8241108.jpeg";
import ice from "../assets/w7ndo1dkkk6kf4qfz2p1.jpeg";
import Dosa from "../assets/f1bc9ddf53de574cdc35ab2f717df234.jpeg";
import Lunch from "../assets/919cb3be0e7406f86f6741ebe7c30128.jpeg";
import McDonald from "../assets/535fc9f9c135f7982317bbb6a64a1ffc.jpeg";
import cake from "../assets/2a41aa363a8ae1e98a4cce95c2d0c589.jpeg";

function Card() {
  const items = [
    {
      image: pizz,
      offer: "Items at ₹179",
      title: "Pizza Hut",
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      name: "Pizzas",
      place: "New Jodhpur",
    },
    {
      image: pizza,
      offer: "₹50 OFF ABOVE ₹199",
      title: "Janta Sweet Home",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Sweets, South Indian",
      place: "Shastri Nagar",
    },
    {
      image: sweet,
      offer: "₹85 OFF ABOVE ₹149",
      title: "Parihaar Bhojnalay",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      name: "North India, Thalis",
      place: "Sardarpura",
    },
    {
      image: frozen,
      offer: "₹70 OFF ABOVE ₹149",
      title: "Kwality Walls Frozen",
      rating: 4.5,
      minTime: 25,
      maxTime: 25,
      name: "Desserts, Ice Cream",
      place: "Chopsani Housing Board",
    },
    {
      image: Bowl,
      offer: "₹15 OFF ABOVE ₹179",
      title: "The Good Bowl",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: "Biryani, North India",
      place: "Shastri Nagar",
    },
    {
      image: ice,
      offer: "₹100 OFF ABOVE ₹499",
      title: "NIC Ice Creams",
      rating: 4.7,
      minTime: 25,
      maxTime: 30,
      name: "Desserts, Ice Cream",
      place: "Sardarpura",
    },
    {
      image: Dosa,
      offer: "Items at ₹109",
      title: "Dosh Center",
      rating: 4.0,
      minTime: 35,
      maxTime: 40,
      name: "South Indian",
      place: "Chopsani Housing Board",
    },
    {
      image: Lunch,
      offer: "₹125 OFF ABOVE ₹349",
      title: "Lunch Box - Meals and Thalis",
      rating: 4.3,
      minTime: 30,
      maxTime: 35,
      name: "Biryani, North India",
      place: "Shastri Nagar",
    },
    {
      image: McDonald,
      offer: "₹70 OFF ABOVE ₹249",
      title: "McDonald's",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: "American",
      place: "Rawaton Ka Bass",
    },
    {
      image: cake,
      offer: "₹100 OFF ABOVE ₹449",
      title: "Kajal's Cake",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Cake",
      place: "Chopsani Housing Board",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage)
    );
  };

  return (
    <div>
      <div className="container d-flex mt-4 fw-bold">
        <h4 style={{ fontWeight: "700" }}>
          Top restaurant chains in Bhubaneswar
        </h4>
        <div className="d-flex ms-auto gap-4">
          <FaArrowLeft
            onClick={handlePrev}
            style={{ cursor: "pointer" }}
            disabled={currentIndex === 0}
            aria-label="Previous"
          />
          <FaArrowRight
            onClick={handleNext}
            style={{ cursor: "pointer" }}
            disabled={currentIndex + itemsPerPage >= items.length}
            aria-label="Next"
          />
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
            transform: `translateX(-${(currentIndex / items.length) * 100}%)`,
            transition: "transform 0.5s ease-in-out",
            width: `${(items.length / itemsPerPage) * 100}%`,
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
            >
              <div className="position-relative" style={{ width: "100%" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    borderRadius: "16px",
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <h5
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    left: "10px",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: "8px",
                    borderRadius: "8px",
                    fontWeight: "800",
                  }}
                >
                  {item.offer}
                </h5>
              </div>
              <div className="mt-2">
                <h4>{item.title}</h4>
                <div className="d-flex align-items-center align-item-center">
                  <FcRating style={{ fontSize: "20px" }} />
                  <div>
                    <h6>
                      {item.rating} . {item.minTime}-{item.maxTime} mins
                    </h6>
                  </div>
                </div>
                <span>{item.name}</span>
                <p>{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
