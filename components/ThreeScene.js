"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />

        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial color="#1e40af" wireframe />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
