import React, { useState, useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import gif from "./assets/load.gif";

import ShortCanvas from "./Short";
import SleeveCanvas from "./sleeve";
import ComputersCanvas from "./pants";
import ShirtCanvas from "./Shirt";
import SockCanvas from "./Sock";


function App() {
  const [currentDetailsIndex, setCurrentDetailsIndex] = useState(0);

  const details = [
    {
      brand: "sock1",
      category: "BAG",
      name: "Vss",
      price: "BR6,882.00",
      deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    },
    {
      brand: "sock2",
      category: "BAG",
      name: "Vss",
      price: "BR6,882.00",
      deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    },
    {
      brand: "sock3",
      category: "BAG",
      name: "Vss",
      price: "BR6,882.00",
      deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    },
    {
      brand: "sock4",
      category: "BAG",
      name: "Vss",
      price: "BR6,882.00",
      deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    },
    {
      brand: "sock5",
      category: "BAG",
      name: "Vss",
      price: "BR6,882.00",
      deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    },
  ];

  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        onEnter: () => setCurrentDetailsIndex(index),
      });

      ScrollTrigger.create({
        trigger: panel,
        start: "bottom center",
        onEnterBack: () => setCurrentDetailsIndex(index),
      });
    });
    panels.forEach((panel, index) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", // Align the start of the panel with the top of the viewport
        end: () => `+=${panel.offsetHeight}`, // Set the end based on panel height
        snap: {
          snapTo: 1, // Snap to one panel at a time
          duration: { min: 0.1, max: 0.2 }, // Set minimum and maximum duration for snapping
          delay: 0.1, // Delay before snapping
          ease: "power1.inOut", // Easing function for snapping animation
        },
      });
    });
  }, []);

  return (
    <Suspense
      fallback={
        <div >
          <img src={gif}/>
          <a href="#">SPLY</a>
        </div>
      }
    >
      <div>
        <div className="details detailed" ref={detailsRef}>
          <div>
            <a href="#">{details[currentDetailsIndex].brand}</a>
            <a href="#">{details[currentDetailsIndex].category}</a>
          </div>
          <div>
            <a href="#">{details[currentDetailsIndex].name}</a>
            <a href="#">{details[currentDetailsIndex].price}</a>
          </div>
          <p className="paragraph">
            {details[currentDetailsIndex].deliveryTime}
          </p>
        </div>

        <div className="panel">
          <SockCanvas />
        </div>
        <div className="panel">
          <ComputersCanvas />
        </div>
        <div className="panel">
          <ShirtCanvas />
        </div>
        <div className="panel">
          <ShortCanvas />
        </div>
        <div className="panel">
          <SleeveCanvas />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
