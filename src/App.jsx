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
import WhiteSleeve from "./WhiteSleeve";
import WhitePant from "./whitePant";
import WhiteShort from "./WhiteShort";
const detail = [
  {
    brand: "sock1",
    category: "BAG",
    name: "Vss",
    price: "BR6,882.00",
    deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    iswhite: false,
  },
  {
    brand: "sock2",
    category: "BAG",
    name: "Vss",
    price: "BR6,882.00",
    deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    iswhite: false,
  },
  {
    brand: "sock3",
    category: "BAG",
    name: "Vss",
    price: "BR6,882.00",
    deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    iswhite: false,
  },
  {
    brand: "sock4",
    category: "BAG",
    name: "Vss",
    price: "BR6,882.00",
    deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    iswhite: false,
  },
  {
    brand: "sock5",
    category: "BAG",
    name: "Vss",
    price: "BR6,882.00",
    deliveryTime: "DELIVERY WITHIN 4 WEEKS",
  },
];

function App() {
  const [currentDetailsIndex, setCurrentDetailsIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [details, setDetails] = useState(detail);
  const [canvasIndex, setCanvasIndex] = useState(-1);

  const handleToggleMode = () => {
    console.log(currentDetailsIndex);
    setDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[currentDetailsIndex] = {
        ...updatedDetails[currentDetailsIndex],
        iswhite: !updatedDetails[currentDetailsIndex].iswhite, // Toggle iswhite property
      };
      return updatedDetails;
    });
  };

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

    const timer = setTimeout(() => {
      setLoading(false); // Set isLoading to false after 5 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (isLoading) {
      // While loading, prevent scrolling on the body
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      // Once loading is done, allow scrolling on the body
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll";
    }
  }, [isLoading]);

  return (
    <div>
      {/* {isLoading ? (
        <div style={{ width: "100vw", height: "100vh" }}>
          <img src={gif} alt="Loading..." />
          <a href="#">SPLY</a>
        </div>
      ) : null} */}
      <div className="details detailed" ref={detailsRef}>
        <div>
          <a href="#">{details[currentDetailsIndex].brand}</a>
          <a href="#">{details[currentDetailsIndex].category}</a>
        </div>
        <div>
          <a href="#">{details[currentDetailsIndex].name}</a>
          <a href="#">{details[currentDetailsIndex].price}</a>
        </div>
        <p className="paragraph">{details[currentDetailsIndex].deliveryTime}</p>
      </div>

      <div className="panel">
        <SockCanvas />
      </div>
      <div className="panel" onClick={handleToggleMode}>
        {details[1].iswhite ? <ComputersCanvas /> : <WhitePant />}
      </div>

      {/* current index xolor checked */}
      <div className="panel" onClick={handleToggleMode}>
        {details[2].iswhite ? <WhiteSleeve /> : <SleeveCanvas />}
      </div>

      <div className="panel" onClick={handleToggleMode}>
        {details[3].iswhite ? <WhiteShort /> : <ShortCanvas />}
      </div>

      <div className="panel">
        <ShirtCanvas />
      </div>
    </div>
  );
}

export default App;
