import { useEffect } from "react";
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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <>
      <div className="sock container">
        <div className="details">
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
        <SockCanvas />
      </div>
      <div className="pc container">
      <div className="details">
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
        <ComputersCanvas />
      </div>
      <div className="shirt container">
      <div className="details">
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
        <ShirtCanvas />
      </div>
    </>
  );
}

export default App;
