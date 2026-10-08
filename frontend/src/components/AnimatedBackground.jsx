import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle constellation system in vibrant Red
    const particleCount = Math.min(Math.floor((width * height) / 13000), 100);
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 1;
        this.baseAlpha = Math.random() * 0.5 + 0.2;
        this.isAccent = Math.random() > 0.85; // Red accent nodes
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isAccent
          ? `rgba(239, 68, 68, ${this.baseAlpha + 0.3})`
          : `rgba(255, 255, 255, ${this.baseAlpha})`;
        ctx.fill();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    createParticles();

    let animId;
    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle =
              particles[i].isAccent || particles[j].isAccent
                ? `rgba(239, 68, 68, ${opacity * 1.8})`
                : `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Background container */}
      <div className="fixed inset-0 z-[-1] bg-[#09090b] pointer-events-none overflow-hidden">
        {/* Constellation Canvas in Red */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60 pointer-events-auto"
        />

        {/* Ambient Glow Orbs in Deep Red / Crimson */}
        <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-red-600/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-rose-600/12 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-rose-700/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle grainy texture layer */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial vignette mask for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.6)_70%,rgba(9,9,11,0.95)_100%)] pointer-events-none" />
      </div>
    </>
  );
};

export default AnimatedBackground;