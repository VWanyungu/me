import React, { useEffect, useRef } from 'react';

export const InteractiveBeams = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000, radius: 140 }); // Repulsion radius

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 60;
        const shapes = ['circle', 'triangle', 'square'];

        const resizeCanvas = () => {
            // Get the actual display size of the canvas container
            const rect = canvas.getBoundingClientRect();

            // Use devicePixelRatio to prevent blurriness and warping on high-res screens
            const dpr = window.devicePixelRatio || 1;

            // 1. Set the internal drawing resolution multiplied by pixel ratio
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // 2. Scale the canvas context back down to match CSS layout pixels
            ctx.scale(dpr, dpr);

            // 3. Reset and regenerate particles for the new crisp space
            initParticles();
        };

        class Particle {
            constructor() {
                this.reset();
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                // Slightly smaller, crisp geometry sizes
                this.size = Math.random() * 3 + 1.5;
                this.baseSpeedY = -(Math.random() * 0.5 + 0.2);
                this.vx = Math.random() * 0.4 - 0.2;
                this.vy = this.baseSpeedY;
                this.shape = shapes[Math.floor(Math.random() * shapes.length)];

                // 1. INCREASE ALPHA: Make them much more opaque/solid
                this.alpha = Math.random() * 0.4 + 0.5; // Ranges from 0.5 to 0.9 opacity

                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = Math.random() * 0.01 - 0.005;
            }

            draw() {
                ctx.save();

                // 2. SHARPNESS TRICK: Use Math.floor to snap to exact pixels, preventing sub-pixel blur
                ctx.translate(Math.floor(this.x), Math.floor(this.y));
                ctx.rotate(this.rotation);

                // Using solid Tailwind green-700 color with higher opacity
                ctx.fillStyle = `rgba(21, 128, 61, ${this.alpha})`;
                ctx.shadowColor = 'rgba(21, 128, 61, 0.15)';
                ctx.shadowBlur = 4;

                // 3. REMOVE SHADOWS: Completely cut out ctx.shadowBlur and ctx.shadowColor 
                // This instantly gives the particles hard, vector-sharp edges.

                ctx.beginPath();
                if (this.shape === 'circle') {
                    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                } else if (this.shape === 'triangle') {
                    ctx.moveTo(0, -this.size);
                    ctx.lineTo(this.size, this.size);
                    ctx.lineTo(-this.size, this.size);
                } else if (this.shape === 'square') {
                    ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            update() {
                // Anti-gravity physics mouse repulsion
                const dx = this.x - mouseRef.current.x;
                const dy = this.y - mouseRef.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseRef.current.radius) {
                    const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle) * force * 0.7;
                    this.vy += Math.sin(angle) * force * 0.7;
                }

                // Apply smooth friction
                this.vx *= 0.94;
                this.vy = this.vy * 0.94 + this.baseSpeedY * 0.06;

                this.x += this.vx;
                this.y += this.vy;
                this.rotation += this.rotationSpeed;

                if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
                    this.reset();
                }
            }

        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawLoop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(drawLoop);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();
        drawLoop();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {/* Light shade of green background (Tailwind green-50/green-100 mix) */}
            <div className="absolute inset-0 bg-green-700/1" />

            {/* Ambient Base Fog (Soft emerald/mint glow at the center source) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-t from-emerald-200/40 via-green-100/20 to-transparent blur-[130px]" />

            {/* CSS Conic Spotlight Beams (Rendered using Tailwind green-700 transparency layers) */}
            <div
                className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[200vw] md:w-[150vw] aspect-square max-w-[1800px] opacity-25 mix-blend-multiply blur-[4px]"
                style={{
                    background: `
            conic-gradient(from 168deg at 50% 100%, transparent 0deg, rgba(21, 128, 61, 0.35) 9deg, transparent 19deg),
            conic-gradient(from 184deg at 50% 100%, transparent 0deg, rgba(21, 128, 61, 0.45) 11deg, transparent 22deg),
            conic-gradient(from 138deg at 50% 100%, transparent 0deg, rgba(21, 128, 61, 0.2) 14deg, transparent 28deg),
            conic-gradient(from 208deg at 50% 100%, transparent 0deg, rgba(21, 128, 61, 0.2) 14deg, transparent 28deg)
          `,
                    maskImage: 'radial-gradient(circle at 50% 100%, black 20%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 100%, black 20%, transparent 80%)'
                }}
            />

            {/* Dynamic Interactive Floating Particle Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

            {/* Clean Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#15803d04_1px,transparent_1px),linear-gradient(to_bottom,#15803d04_1px,transparent_1px)] bg-[size:45px_45px]" />
        </div>
    );
};