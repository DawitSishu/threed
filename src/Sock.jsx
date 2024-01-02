import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import "./App.css";
import styled from "styled-components";


gsap.registerPlugin(ScrollTrigger);

const StyledCanvas = styled(Canvas)`
  /* Add your custom styles here */

  /* Media query */
  @media (max-width: 507px) {
    width: 60vw !important;
    height: 60vh !important;
  }
`;

const Sock = ({ isMobile }) => {
    const computer = useGLTF("./some/Shoe.gltf");
  
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
          scale={isMobile ? 12.7 : 12.6}
          position={isMobile ? [0, -2.5, 0] : [0, -2.25, 0]}
          rotation={[0, 5, 0]}
        />
      </mesh>
    );
  };