import { useEffect } from "react";
import ComputersCanvas from "./pants";
import ShirtCanvas from "./Shirt";
import SockCanvas from "./Sock";

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
    <SockCanvas />
      <ComputersCanvas />
      <ShirtCanvas />
    </>
  );
}

export default App;
