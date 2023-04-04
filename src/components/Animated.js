import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Animated() {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort="0.4"
        speed="2.3"
        roughness={7}
      />
    </Sphere>
  );
}
