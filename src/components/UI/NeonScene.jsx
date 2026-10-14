import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import * as THREE from 'three';

const NeonRibbon = ({ color, position, rotation }) => {
  const meshRef = useRef();

  // Create a curved path for the ribbon
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      p.push(new THREE.Vector3(
        Math.sin(t * Math.PI * 2) * 5,
        Math.cos(t * Math.PI * 2) * 2 + Math.sin(t * Math.PI * 4) * 2,
        Math.cos(t * Math.PI * 2) * 5
      ));
    }
    return p;
  }, []);

  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, 100, 0.05, 8, false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.z = t * 0.2;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <tubeGeometry args={[curve, 100, 0.02, 8, false]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={10}
        toneMapped={false}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00F5D4"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const NeonScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 75 }}
      gl={{ antialias: true }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    >
      <color attach="background" args={['#0A0A0C']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00F5D4" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#FF2D75" />

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <NeonRibbon color="#00F5D4" position={[0, 0, 0]} rotation={[0, 0, 0]} />
        <NeonRibbon color="#FF2D75" position={[2, -2, -2]} rotation={[Math.PI/4, 0, Math.PI/2]} />
        <NeonRibbon color="#00F5D4" position={[-2, 2, -2]} rotation={[Math.PI/2, Math.PI/4, 0]} />
      </Float>

      <ParticleField />
    </Canvas>
  );
};

export default NeonScene;
