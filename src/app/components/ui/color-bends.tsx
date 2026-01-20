import { useEffect, useRef } from 'react';

interface ColorBendsProps {
    rotation?: number;
    speed?: number;
    colors?: string[];
    transparent?: boolean;
    autoRotate?: number;
    scale?: number;
    frequency?: number;
    warpStrength?: number;
    mouseInfluence?: number;
    parallax?: number;
    noise?: number;
    opacity?: number;
}

export function ColorBends({
    rotation = 45,
    speed = 0.2,
    colors = ['#05070c', '#00e5ff', '#7c5cff'],
    transparent = false,
    autoRotate = 0,
    scale = 1.5,
    frequency = 1,
    warpStrength = 1,
    mouseInfluence = 0.5,
    parallax = 0.5,
    noise = 0.15,
    opacity = 0.30,
}: ColorBendsProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const updateSize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = parent.offsetWidth * dpr;
                canvas.height = parent.offsetHeight * dpr;
                canvas.style.width = `${parent.offsetWidth}px`;
                canvas.style.height = `${parent.offsetHeight}px`;
                ctx.scale(dpr, dpr);
            }
        };
        updateSize();

        let resizeTimeout: number;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateSize, 100);
        };
        window.addEventListener('resize', handleResize);

        // Mouse tracking with throttling
        let mouseMoveTimeout: number;
        const handleMouseMove = (e: MouseEvent) => {
            clearTimeout(mouseMoveTimeout);
            mouseMoveTimeout = setTimeout(() => {
                const rect = canvas.getBoundingClientRect();
                mouseRef.current = {
                    x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
                    y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
                };
            }, 16); // ~60fps throttle
        };
        window.addEventListener('mousemove', handleMouseMove);

        let time = 0;
        let currentRotation = rotation;
        let lastFrameTime = performance.now();

        const animate = (currentTime: number) => {
            if (!ctx || !canvas) return;

            const deltaTime = (currentTime - lastFrameTime) / 1000;
            lastFrameTime = currentTime;

            time += speed * deltaTime;
            if (autoRotate !== 0) {
                currentRotation += autoRotate * deltaTime;
            }

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);

            // Clear canvas
            ctx.clearRect(0, 0, width, height);

            // Create gradient
            const centerX = width / 2;
            const centerY = height / 2;
            const maxRadius = Math.max(width, height) * scale;

            // Apply rotation and parallax
            ctx.save();
            ctx.translate(
                centerX + (mouseRef.current.x - 0.5) * width * parallax * 0.3,
                centerY + (mouseRef.current.y - 0.5) * height * parallax * 0.3
            );
            ctx.rotate((currentRotation * Math.PI) / 180);

            // Create animated radial gradient
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius);

            // Add color stops with animation
            colors.forEach((color, index) => {
                const baseOffset = index / Math.max(1, colors.length - 1);
                const animatedOffset =
                    baseOffset +
                    Math.sin(time * frequency + baseOffset * Math.PI * 2) * warpStrength * 0.15;
                const clampedOffset = Math.max(0, Math.min(1, animatedOffset));
                gradient.addColorStop(clampedOffset, color);
            });

            // Apply gradient
            ctx.fillStyle = gradient;
            ctx.fillRect(-maxRadius, -maxRadius, maxRadius * 2, maxRadius * 2);

            ctx.restore();

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(resizeTimeout);
            clearTimeout(mouseMoveTimeout);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [rotation, speed, colors, autoRotate, scale, frequency, warpStrength, parallax]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{
                opacity: opacity,
                pointerEvents: 'none',
                filter: 'blur(60px)',
                background: transparent ? 'transparent' : undefined,
            }}
        />
    );
}
