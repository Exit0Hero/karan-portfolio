"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ProjectNode {
  id: string;
  title: string;
  category: string;
  position: [number, number, number];
  color: string;
  scale: number;
}

const PROJECTS: ProjectNode[] = [
  { id: "schedulai", title: "SchedulAI", category: "AI_OPTIMIZATION", position: [-4, 2, -2], color: "#00f2fe", scale: 1.2 },
  { id: "minibiz-erp", title: "MiniBiz ERP", category: "WEB_PLATFORMS", position: [3, -1, -3], color: "#7000ff", scale: 1.0 },
  { id: "adaptiq", title: "AdaptIQ", category: "DATA_ML", position: [-2, -3, -1], color: "#10b981", scale: 1.1 },
  { id: "netflix-system", title: "Netflix System", category: "SYSTEMS", position: [5, 3, -4], color: "#f59e0b", scale: 0.9 },
  { id: "portfolio", title: "This Portfolio", category: "WEB_PLATFORMS", position: [0, 0, 0], color: "#ec4899", scale: 1.3 },
  { id: "neural-search", title: "Neural Search", category: "AI_OPTIMIZATION", position: [-5, -1, -5], color: "#00f2fe", scale: 0.8 },
  { id: "dataflow", title: "DataFlow", category: "DATA_ML", position: [4, -3, -2], color: "#10b981", scale: 0.95 },
  { id: "distributed-cache", title: "Distributed Cache", category: "SYSTEMS", position: [-3, 4, -3], color: "#f59e0b", scale: 0.85 },
];

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  const connections = useMemo(() => {
    const result: { start: [number, number, number]; end: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < PROJECTS.length; i++) {
      for (let j = i + 1; j < PROJECTS.length; j++) {
        const dist = Math.sqrt(
          Math.pow(PROJECTS[i].position[0] - PROJECTS[j].position[0], 2) +
          Math.pow(PROJECTS[i].position[1] - PROJECTS[j].position[1], 2) +
          Math.pow(PROJECTS[i].position[2] - PROJECTS[j].position[2], 2)
        );
        if (dist < 6) {
          result.push({
            start: PROJECTS[i].position,
            end: PROJECTS[j].position,
            color: PROJECTS[i].color,
          });
        }
      }
    }
    return result;
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.children.forEach((child, i) => {
      if (child instanceof THREE.Line) {
        const mat = child.material as THREE.LineBasicMaterial;
        mat.opacity = 0.15 + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.1;
      }
    });
  });

  return (
    <group ref={linesRef}>
      {connections.map((conn, i) => {
        const points = [
          new THREE.Vector3(...conn.start),
          new THREE.Vector3(...conn.end),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <primitive key={i} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: conn.color, transparent: true, opacity: 0.2 }))} />
        );
      })}
    </group>
  );
}

function ProjectNode({ project, onClick, isActive }: { project: ProjectNode; onClick: () => void; isActive: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;

    if (glowRef.current) {
      const scale = isActive ? 1.8 : hovered ? 1.5 : 1.2;
      glowRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = isActive ? 0.15 : hovered ? 0.1 : 0.05;
    }
  });

  return (
    <group position={project.position}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[project.scale * 0.8, 16, 16]} />
          <meshBasicMaterial color={project.color} transparent opacity={0.05} />
        </mesh>

        {/* Core node */}
        <mesh
          ref={meshRef}
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          onPointerEnter={() => { setHovered(true); document.body.style.cursor = "pointer"; }}
          onPointerLeave={() => { setHovered(false); document.body.style.cursor = "default"; }}
          scale={project.scale}
        >
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={isActive ? 0.5 : hovered ? 0.3 : 0.1}
            wireframe
          />
        </mesh>

        {/* Inner core */}
        <mesh scale={project.scale * 0.4}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Label */}
        <Text
          position={[0, -0.6 * project.scale, 0]}
          fontSize={0.15}
          color={isActive ? project.color : "#94a3b8"}
          anchorX="center"
          anchorY="middle"
          font="/fonts/SpaceGrotesk-Variable.woff2"
        >
          {project.title}
        </Text>
      </Float>
    </group>
  );
}

function Scene({ onSelect, activeId }: { onSelect: (id: string) => void; activeId: string | null }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00f2fe" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000ff" />

      <ConnectionLines />

      {PROJECTS.map((project) => (
        <ProjectNode
          key={project.id}
          project={project}
          onClick={() => onSelect(project.id)}
          isActive={activeId === project.id}
        />
      ))}

      {/* Ambient particles */}
      <AmbientParticles />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={3}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}

function AmbientParticles() {
  const count = 200;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      speed: 0.001 + Math.random() * 0.003,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed + p.offset),
        p.position[1] + Math.cos(t * p.speed * 0.7 + p.offset),
        p.position[2] + Math.sin(t * p.speed * 0.5 + p.offset)
      );
      dummy.scale.setScalar(0.01 + Math.sin(t + p.offset) * 0.005);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#00f2fe" transparent opacity={0.4} />
    </instancedMesh>
  );
}

export function ProjectUniverse({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setActiveId(id === activeId ? null : id);
    onSelectProject(id);
  };

  return (
    <div className="h-[600px] w-full rounded-3xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
        <Scene onSelect={handleSelect} activeId={activeId} />
      </Canvas>
    </div>
  );
}
