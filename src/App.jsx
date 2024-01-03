import ShortCanvas from "./Short";
import SleeveCanvas from "./sleeve";
import { useEffect, useRef } from "react";
import ComputersCanvas from "./pants";
import ShirtCanvas from "./Shirt";
import SockCanvas from "./Sock";
import { gsap } from "gsap";
import "./App.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const details = {
    brand: "sock1",
    category: "BAG",
    name: "Vss",
    price: "BR6,882.00",
    deliveryTime: "DELIVERY WITHIN 4 WEEKS",
  };
  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

  }, []);
  return (
    <div >
      <div className="details" ref={detailsRef}>
        <div>
          <a href="#">{details.brand}</a>
          <a href="#">{details.category}</a>
        </div>
        <div>
          <a href="#">{details.name}</a>
          <a href="#">{details.price}</a>
        </div>

        <p className="paragraph">{details.deliveryTime}</p>
      </div>
      <div className="panel ">
        <SockCanvas />
      </div>
      <div className="panel ">
        <ComputersCanvas />
      </div>
      <div className="panel ">
        <ShirtCanvas />
      </div>
      <div className="panel ">
        <ShortCanvas />
      </div>
      <div className="panel ">
        <SleeveCanvas />
      </div>
    </div>
  );
}

export default App;

