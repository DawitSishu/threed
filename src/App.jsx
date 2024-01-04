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
    name: "YZY PODS BR11,479.00",
    deliveryTime: "DELIVERY WITHIN 4 WEEKS",
    size: "SIZE 1 2 3 \nSIZE GUIDE",
  },
  {
    name: "VULTURES PANTS BR6,888.00",
    iswhite: false,
    size: "SIZE 1 2 3 \nSIZE GUIDE",
  },
  {
    name: "LONG T BR5,740.00",
    iswhite: false,
    size: "SIZE 1 2 3 \nSIZE GUIDE",
  },
  {
    name: "VULTURES SHORTS BR5,740.00",
    iswhite: false,
    size: "SIZE 1 2 3 \nSIZE GUIDE",
  },
  {
    name: "BOX T BR4,592.00",
    size: "SIZE 1 2 3 \nSIZE GUIDE",
    iswhite: true,
  },
];

function App() {
  const [currentDetailsIndex, setCurrentDetailsIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [details, setDetails] = useState(detail);
  const [canvasIndex, setCanvasIndex] = useState(-1);
  // 2func
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
    // panels.forEach((panel, index) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //       snapTo: 1,
    //       duration: { min: 0.1, max: 0.1 },
    //       ease: "power1.inOut",
    //     },
    //   });
    // });
    
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
    <div className="con">
      {isLoading ? (
        <div className="imgc" style={{ width: "100vw", height: "100vh" }}>
          <img className="img" src={gif} alt="Loading..." />
          <a href="#">SPLY</a>
        </div>
      ) : null}
      <div className="details detailed" ref={detailsRef}>
        <div>
          <a href="#">SPLY BAG (1)</a>
        </div>
        <div>
          <a href="#">{details[currentDetailsIndex].name}</a>
        </div>

        {details[currentDetailsIndex].iswhite != null ? (
          <div className="color">
            <a
              style={{
                color: `${
                  !details[currentDetailsIndex].iswhite ? "black" : "grey"
                }`,
                cursor: "pointer",
              }}
              onClick={
                details[currentDetailsIndex].iswhite ? handleToggleMode : null
              }
            >
              BLACK
            </a>
            <a className="whiter"
              style={{
                color: `${
                  details[currentDetailsIndex].iswhite ? "black" : "grey"
                }`,
                cursor: "pointer",
              }}
              onClick={
                !details[currentDetailsIndex].iswhite ? handleToggleMode : null
              }
            >
              WHITE
            </a>
          </div>
        ) : null}
        {details[currentDetailsIndex].deliveryTime != null ? (
          <div>
            <a href="#">{details[currentDetailsIndex].deliveryTime}</a>
          </div>
        ) : null}
        <div className="size">
          <a href="#">{details[currentDetailsIndex].size}</a>
        </div>
        <a href="#">ORDER</a>
      </div>

      <div className="panel first">
        <SockCanvas />
      </div>
      <div className="panel">
        {details[1].iswhite ? <ComputersCanvas /> : <WhitePant />}
      </div>

      <div className="panel sleeve">
        {details[2].iswhite ? <WhiteSleeve /> : <SleeveCanvas />}
      </div>

      <div className="panel">
        {details[3].iswhite ? <WhiteShort /> : <ShortCanvas />}
      </div>

      <div className="panel">
        <ShirtCanvas />
      </div>
    </div>
  );
}

export default App;
