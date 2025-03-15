import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

export default function ThreeDEffect() {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshStandardMaterial attach="material" color="red" />
      </mesh>
      <Stars />
      <OrbitControls />
    </Canvas>
  );
}
