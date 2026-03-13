import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // DIGITAL RAIN PARAMETERS
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);
    
    // CS Characters: Binary + Code Symbols
    const chars = "01<>{}[]()/\\+=-_*&^%$#@!".split("");

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Set font style
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Randomly pick a character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Randomly choose between a bright red and a darker red for depth
        const isBright = Math.random() > 0.9;
        ctx.fillStyle = isBright ? '#ff1d1d' : '#8a0000';
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after it crosses screen
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y position
        drops[i]++;
      }
    };

    let animationId;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.floor(width / fontSize);
      // Adjust drops array size on resize while preserving state
      if (newColumns > drops.length) {
        for(let i = drops.length; i < newColumns; i++) drops[i] = 1;
      } else {
        drops.length = newColumns;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-primary overflow-hidden">
        {/* Hyperspace / 3D Starfield Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0"></canvas>
        
        {/* Radial vignette mask so the edges fade to black and the center content is legible */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.85)_80%,_rgba(0,0,0,1)_100%)] pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;
