import React, { Suspense } from "react";
import "./styles.css";
import styled from "styled-components";
import Sphere from "./components/Animated";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import { Canvas } from "@react-three/fiber";

import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />

      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[-2, 5, 2]} intensity={0.4} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[-2, 5, 2]} intensity={0.4} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;
