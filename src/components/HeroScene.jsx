import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// Deep imports skip drei's barrel file, which pulls in optional deps (e.g. @mediapipe) and triggers build warnings.
import { Float } from '@react-three/drei/core/Float';
import { MeshDistortMaterial } from '@react-three/drei/core/MeshDistortMaterial';
import { Environment } from '@react-three/drei/core/Environment';
import { Lightformer } from '@react-three/drei/core/Lightformer';
import { Sparkles } from '@react-three/drei/core/Sparkles';
import { MathUtils } from 'three';

const ACCENT = '#7c9cff';
const VIOLET = '#a78bfa';
const CYAN = '#5eead4';

// Smoothly tilts its children toward the pointer for a parallax feel.
function PointerRig({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, x * 0.45, 3, delta);
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, -y * 0.3, 3, delta);
  });
  return <group ref={group}>{children}</group>;
}

function Core() {
  const mesh = useRef();
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} scale={1.45}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color={ACCENT}
          roughness={0.32}
          metalness={0.55}
          distort={0.38}
          speed={1.6}
          envMapIntensity={0.9}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, tilt, speed, color }) {
  const ring = useRef();
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * speed;
  });
  return (
    <group rotation={tilt}>
      <mesh ref={ring}>
        <torusGeometry args={[radius, 0.012, 16, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function Satellite({ position, geometry, color, scale = 0.28, speed = 2 }) {
  return (
    <Float speed={speed} rotationIntensity={1.6} floatIntensity={1.4}>
      <mesh position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.8} envMapIntensity={1.4} />
      </mesh>
    </Float>
  );
}

export default function HeroScene({ paused = false }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 8.6], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={paused ? 'never' : 'always'}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} />
      <pointLight position={[-4, -2, 2]} intensity={18} color={VIOLET} />
      <pointLight position={[3, -3, -2]} intensity={14} color={CYAN} />

      <PointerRig>
        <Core />
        <OrbitRing radius={2.45} tilt={[1.2, 0.2, 0]} speed={0.25} color={ACCENT} />
        <OrbitRing radius={2.85} tilt={[1.75, -0.4, 0.3]} speed={-0.18} color={VIOLET} />

        <Satellite position={[2.3, 1.3, 0.4]} geometry={<octahedronGeometry args={[1, 0]} />} color={VIOLET} />
        <Satellite position={[-2.4, -1.1, 0.6]} geometry={<torusGeometry args={[1, 0.38, 24, 64]} />} color={CYAN} scale={0.24} speed={1.6} />
        <Satellite position={[-1.9, 1.7, -0.6]} geometry={<boxGeometry args={[1, 1, 1]} />} color={ACCENT} scale={0.22} speed={2.4} />
        <Satellite position={[1.9, -1.7, -0.2]} geometry={<dodecahedronGeometry args={[1, 0]} />} color="#e8eaee" scale={0.2} />

        <Sparkles count={60} scale={[7, 5, 4]} size={2.2} speed={0.35} color={ACCENT} opacity={0.7} />
      </PointerRig>

      {/* Local studio lighting — no network-loaded HDR files. */}
      <Environment resolution={256}>
        <Lightformer form="ring" intensity={2} color={ACCENT} position={[0, 4, -6]} scale={8} />
        <Lightformer form="circle" intensity={2.2} color={VIOLET} position={[-7, 1, 2]} rotation-y={Math.PI / 2} scale={9} />
        <Lightformer form="circle" intensity={1.8} color={CYAN} position={[7, -2, 1]} rotation-y={-Math.PI / 2} scale={8} />
        <Lightformer form="circle" intensity={1.2} color="#ffffff" position={[0, 0, 9]} scale={5} />
      </Environment>
    </Canvas>
  );
}
