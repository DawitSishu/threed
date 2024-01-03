import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import "./App.css";
import styled from "styled-components";

const StyledCanvas = styled(Canvas)`
  /* Add your custom styles here */

  /* Media query */
  @media (max-width: 507px) {
    width: 60vw !important;
    height: 60vh !important;
  }
`;

const WhiteSleeve = ({ isMobile }) => {
  const computer = useGLTF("../some/sleevewhite.glb");

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={4} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 4.3 : 4.7}
        position={isMobile ? [0, -3.5, 0] : [0, -4.25, 0]}
        rotation={[0, 5, 0]}
      />
    </mesh>
  );
};

const WhiteSleeveCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [details, setDetails] = useState({
    brand: "SPLY",
    category: "BAG(1)",
    name: "YZY PODS",
    price: "BR11, 470.00",
    deliveryTime: "DELIVERY WITHIN 4 WEEKS",
  });

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <div className="container">
        {/* <div className="details">
          <div className="det"> 
            <a href="#">{details.brand}</a>
            <a href="#">{details.category}</a>
          </div>
          <div className="det">
            <a href="#">{details.name}</a>
            <a href="#">{details.price}</a>
          </div>

          <p className="paragraph">{details.deliveryTime}</p>
        </div> */}

        <StyledCanvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <OrbitControls
            // autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <WhiteSleeve isMobile={isMobile} />

          <Preload all />
        </StyledCanvas>
      </div>
    </>
  );
};

export default WhiteSleeveCanvas;
