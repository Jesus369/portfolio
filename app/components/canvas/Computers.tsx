"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

type Props = {
  isMobile: boolean;
};

const Computers = ({ isMobile }: Props) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // mesh component will hold the actual 3D model
    <mesh>
      {/* light that is emitted from the sky. It is used to simulate the sun. */}
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* loading the Computer Screen model using useGLTF hook */}
      <primitive
        object={computer.scene}
        // Scale - control over the size of the computer
        scale={isMobile ? 0.3 : 0.6}
        // Position to appear at
        position={isMobile ? [0, -2, -0.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e: any) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      // demand - canvas will render when the user interacts
      frameloop="demand"
      // set to true - canvas will have shadows
      shadows
      // position for the camera, and the field of view of the camera
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense will render the model only when loaded */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // Restrict the user from zooming in
          enableZoom={false}
          // Rotation will only occur within a specific axis
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
