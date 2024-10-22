import React from "react";
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
import { FcRating } from "react-icons/fc"; // Import the rating icon
import { useCart } from "./CartContext"; // Import the custom hook for Cart Context

function Item() {
  const { addToCart } = useCart(); // Get the addToCart function from the context

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
      price:179
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
      price:199
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
      price:149
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
      price:149
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
      price:179
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
      price:499
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
      price:109
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
      price:349
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
      price:249
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
      price:449
    },
   
  ];

  const itemsPerPage = 4;

 
  const handleItemClick = (item) => {
    addToCart(item); // Add the clicked item to the cart
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-5" style={{ fontWeight: "700" }}>
        Restaurants with online food delivery in Bhubaneswar
      </h4>
      <div className="d-flex flex-wrap justify-content-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="d-flex flex-column align-items-center"
            style={{
              width: `${100 / itemsPerPage}%`,
              textAlign: "center",
              padding: "10px",
              cursor: "pointer", 
            }}
            onClick={() => handleItemClick(item)} 
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
              <div className="d-flex align-items-center">
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
  );
}

export default Item;
