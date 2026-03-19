import React, { useEffect, useRef, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- Ported components from Demo ---

// A dynamic background object that distorts and changes properties based on scroll
function CoreAnim({ scrollYProgress }) {
  const meshRef = useRef();
  
  // Create non-reactive version of scroll for the frame loop
  const scrollValue = useRef(0);
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      scrollValue.current = v;
    });
  }, [scrollYProgress]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (!meshRef.current) return;

    // Base rotation
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.2;
    
    // Scale and position based on scroll
    // Consistently use the scroll value from framer-motion
    const offset = scrollValue.current;
    const s = 1 + offset * 4;
    meshRef.current.scale.set(s, s, s);
    meshRef.current.position.y = -offset * 12;
    meshRef.current.position.z = -5 - (offset * 8);
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, -5]}>
        <icosahedronGeometry args={[2, 16]} />
        <MeshDistortMaterial 
          color="#ef4444" // Adapted to match the Red theme
          emissive="#991b1b" 
          emissiveIntensity={0.6} 
          distort={0.4} 
          speed={2} 
          roughness={0.1} 
          metalness={0.9}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

// Interactive floating particles that follow the mouse
function ParticleSwarm() {
  const group = useRef();
  const { mouse } = useThree();
  
  useFrame(() => {
    if (!group.current) return;
    // Lazy mouse follow
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.3, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.3, 0.05);
  });

  return (
    <group ref={group}>
      <Sparkles count={150} scale={20} size={2} speed={0.4} opacity={0.4} color="#ef4444" />
      <Sparkles count={80} scale={25} size={4} speed={0.2} opacity={0.2} color="#ffffff" />
      
      {/* Floating 3D Data Cubes */}
      {Array.from({ length: 30 }).map((_, i) => (
        <Float key={i} speed={Math.random() * 1.5 + 0.5} rotationIntensity={3} floatIntensity={4}>
          <mesh 
            position={[
              (Math.random() - 0.5) * 30, 
              (Math.random() - 0.5) * 30, 
              (Math.random() - 0.5) * 20 - 5
            ]}
          >
            <boxGeometry args={[Math.random() * 0.5 + 0.1, Math.random() * 0.5 + 0.1, Math.random() * 0.5 + 0.1]} />
            <meshPhysicalMaterial 
              color="#222222" 
              transmission={0.8} 
              opacity={1} 
              metalness={0.3} 
              roughness={0.2} 
              ior={1.4} 
              thickness={0.4} 
              emissive="#ef4444"
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// --- End of Ported components ---

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  
  // Use framer motion to track scroll progress
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let symbols = [];
    const symbolCount = Math.floor((width * height) / 10000); 

    const techContent = [
      'React', 'NodeJS', 'SQL', 'API', 'Docker', 'JS', 'TS', 'MongoDB',
      'AWS', 'Git', 'Next.js', 'Express', 'Tailwind', 'GraphQL', 'Redis',
      'PostgreSQL', 'Linux', 'Vue', 'Redux', 'Nginx', 'Vercel', 'Firebase',
      'REST', 'Kubernetes', 'CI/CD', 'Figma', 'Jest', 'Python', 'C++',
      '</>', '{}', '()', '[]', '=>', '||', '&&', '==='
    ];

    let mouse = { x: undefined, y: undefined, radius: 150 };

    const handleMouseMove = (event) => { mouse.x = event.x; mouse.y = event.y; };
    const handleMouseOut = () => { mouse.x = undefined; mouse.y = undefined; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    class FloatingSymbol {
      constructor(isRespawning = false) {
        this.x = Math.random() * width;
        this.y = isRespawning ? height + 50 : Math.random() * height;
        this.text = techContent[Math.floor(Math.random() * techContent.length)];
        this.size = Math.random() * 20 + 12;
        this.vy = -(Math.random() * 0.3 + 0.2);
        this.vx = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.4 + 0.1;
        const colorSeed = Math.random();
        if (colorSeed > 0.8) { this.colorType = 'bright-red'; } 
        else if (colorSeed > 0.4) { this.colorType = 'soft-red'; } 
        else { this.colorType = 'white-red'; }
      }

      draw() {
        ctx.font = `600 ${this.size}px "Inter", monospace`;
        if (this.colorType === 'bright-red') ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
        else if (this.colorType === 'soft-red') ctx.fillStyle = `rgba(248, 113, 113, ${this.opacity})`;
        else ctx.fillStyle = `rgba(254, 226, 226, ${this.opacity - 0.1})`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(this.text, this.x, this.y);
      }

      update() {
        if (mouse.x !== undefined) {
          let dx = mouse.x - this.x; let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance; let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 1.2; this.y -= forceDirectionY * force * 1.2;
          }
        }
        this.x += this.vx; this.y += this.vy;
        if (this.x > width + 100) this.x = -100; if (this.x < -100) this.x = width + 100;
        if (this.y < -100) { this.y = height + 100; this.x = Math.random() * width; }
        this.draw();
      }
    }

    function init() {
      symbols = [];
      for (let i = 0; i < symbolCount; i++) { symbols.push(new FloatingSymbol()); }
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < symbols.length; i++) { symbols[i].update(); }
      animationId = requestAnimationFrame(animate);
    }

    init(); animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Layer 1: 2D Tech Text Canvas */}
      <motion.canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-40"
        style={{ scale, transformOrigin: 'center center' }}
      />

      {/* Layer 2: 3D Demo Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ef4444" />
            <pointLight position={[-10, -10, -5]} intensity={1.5} color="#991b1b" />
            <Stars radius={150} depth={50} count={3000} factor={4} saturation={0.5} fade speed={1.5} />
            
            <CoreAnim scrollYProgress={scrollYProgress} />
            <ParticleSwarm />
          </Suspense>
        </Canvas>
      </div>

      {/* Layer 3: Gradient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.85)_75%,_rgba(0,0,0,1)_100%)] pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;
