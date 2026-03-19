import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let symbols = [];
    
    // Config - Focus entirely on the Full Stack Text
    const symbolCount = Math.floor((width * height) / 8000); // Dense, even distribution
    
    // Expanded Tech symbols related to Full Stack
    const techContent = [
      'React', 'NodeJS', 'SQL', 'API', 'Docker', 'JS', 'TS', 'MongoDB', 
      'AWS', 'Git', 'Next.js', 'Express', 'Tailwind', 'GraphQL', 'Redis', 
      'PostgreSQL', 'Linux', 'Vue', 'Redux', 'Nginx', 'Vercel', 'Firebase', 
      'REST', 'Kubernetes', 'CI/CD', 'Figma', 'Jest', 'Python', 'C++',
      '</>', '{}', '()', '[]', '=>', '||', '&&', '==='
    ];

    let mouse = {
      x: undefined,
      y: undefined,
      radius: 200
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    class FloatingSymbol {
      constructor(isRespawning = false) {
        // Distribute them uniformly across the screen
        this.x = Math.random() * width;
        // If respawning, start from the bottom, else random height
        this.y = isRespawning ? height + 50 : Math.random() * height;
        
        this.text = techContent[Math.floor(Math.random() * techContent.length)];
        this.size = Math.random() * 24 + 14; // Large, readable sizes
        
        // Uniform drifting upwards and very slightly right to look "aligned" and clean
        this.vy = -(Math.random() * 0.4 + 0.3); // Moves up
        this.vx = Math.random() * 0.2 - 0.1; // Very slight horizontal drift
        
        this.opacity = Math.random() * 0.5 + 0.1; // 0.1 to 0.6 visibility
        
        // Randomize the color slightly: vibrant red, soft red, or white-ish
        const colorSeed = Math.random();
        if (colorSeed > 0.7) {
            this.colorType = 'bright-red';
        } else if (colorSeed > 0.3) {
            this.colorType = 'soft-red';
        } else {
            this.colorType = 'white-red';
        }
      }
      
      draw() {
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)'; // Dark shadow for depth
        
        ctx.font = `600 ${this.size}px "Inter", monospace`;
        
        if (this.colorType === 'bright-red') {
             ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`; // red-500
        } else if (this.colorType === 'soft-red') {
             ctx.fillStyle = `rgba(248, 113, 113, ${this.opacity})`; // red-400
        } else {
             ctx.fillStyle = `rgba(254, 226, 226, ${this.opacity - 0.1})`; // red-100 (almost white)
        }

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, this.x, this.y);
      }
      
      update() {
        // Mouse interaction: push text away from cursor smoothly
        if (mouse.x !== undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let force = (mouse.radius - distance) / mouse.radius;
                
                // Repel the text
                this.x -= forceDirectionX * force * 1.5;
                this.y -= forceDirectionY * force * 1.5;
            }
        }

        this.x += this.vx;
        this.y += this.vy;
        
        // Wrap around horizontally if pushed off screen
        if (this.x > width + 100) this.x = -100;
        if (this.x < -100) this.x = width + 100;
        
        // If it floats off the top, respawn at the bottom
        if (this.y < -100) {
            this.y = height + 100;
            this.x = Math.random() * width;
        }
        
        this.draw();
      }
    }

    function init() {
      symbols = [];
      for (let i = 0; i < symbolCount; i++) {
        symbols.push(new FloatingSymbol());
      }
    }
    
    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height); 
      
      for (let i = 0; i < symbols.length; i++) {
        symbols[i].update();
      }
      
      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

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
    <div className="fixed inset-0 z-[-1] bg-primary overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0"></canvas>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.8)_80%,_rgba(0,0,0,1)_100%)] pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;
