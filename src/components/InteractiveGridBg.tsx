import { useEffect, useRef } from 'react';

interface RainDrop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
}

export function InteractiveGridBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const dropsRef = useRef<RainDrop[]>([]);
  const glitchTimerRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize Matrix Rain drops
      const fontSize = 14;
      const columns = Math.ceil(canvas.width / fontSize) + 1;
      const arr: RainDrop[] = [];
      const glyphs = 'abcdefghijklmnopqrstuvwxyz0123456789+=*&?#@$%/\\';

      for (let i = 0; i < columns; i++) {
        // Build random char sequence
        const charLen = 8 + Math.floor(Math.random() * 12);
        const chars = [];
        for (let c = 0; c < charLen; c++) {
          chars.push(glyphs[Math.floor(Math.random() * glyphs.length)]);
        }

        arr.push({
          x: i * fontSize,
          y: Math.random() * -canvas.height, // start above viewport
          speed: 1.5 + Math.random() * 3,
          chars,
          opacity: 0.15 + Math.random() * 0.4
        });
      }
      dropsRef.current = arr;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) return;

      // Trigger full screen glitch scramble for 25 frames
      glitchTimerRef.current = 25;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('click', handleClick);

    const glyphs = 'abcdefghijklmnopqrstuvwxyz0123456789+=*&?#@$%/\\';
    const fontSize = 14;

    const draw = () => {
      // Dark trail background
      ctx.fillStyle = 'rgba(6, 5, 17, 0.22)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      if (mouse.x === -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      }

      if (glitchTimerRef.current > 0) {
        glitchTimerRef.current--;
      }

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      const drops = dropsRef.current;
      for (const d of drops) {
        // Fall down
        d.y += d.speed;
        if (d.y > canvas.height + 100) {
          d.y = Math.random() * -300 - 50;
          d.speed = 1.5 + Math.random() * 3;
        }

        // Render characters downwards
        for (let j = 0; j < d.chars.length; j++) {
          const cy = d.y - j * fontSize;
          if (cy < -20 || cy > canvas.height + 20) continue;

          // Randomize some chars in columns
          if (Math.random() < 0.05) {
            d.chars[j] = glyphs[Math.floor(Math.random() * glyphs.length)];
          }

          // Calculate distance to mouse cursor
          const dx = mouse.x - d.x;
          const dy = mouse.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let drawX = d.x;
          let drawY = cy;
          let color = `rgba(244, 63, 94, ${d.opacity * (1 - j / d.chars.length)})`; // default rose pink
          let scale = 1;

          // Glitch scramble timer triggered on click
          if (glitchTimerRef.current > 0) {
            color = `rgba(6, 182, 212, ${Math.random() * 0.8})`; // glitch cyan
            drawX += (Math.random() - 0.5) * 4;
            drawY += (Math.random() - 0.5) * 4;
            if (Math.random() < 0.2) {
              d.chars[j] = glyphs[Math.floor(Math.random() * glyphs.length)];
            }
          }

          // Warp/Glitch around cursor
          const warpRadius = 140;
          if (dist < warpRadius) {
            const force = (warpRadius - dist) / warpRadius;
            // Push characters outward to create an interactive "shadow bubble"!
            drawX -= (dx / (dist || 1)) * force * 18;
            drawY -= (dy / (dist || 1)) * force * 18;
            
            // Brighten up and change color to cyan when near cursor
            color = `rgba(6, 182, 212, ${0.15 + force * 0.85})`;
            scale = 1.0 + force * 0.2;
            
            if (Math.random() < force * 0.3) {
              d.chars[j] = glyphs[Math.floor(Math.random() * glyphs.length)];
            }
          }

          // Draw the char
          ctx.fillStyle = color;
          ctx.save();
          ctx.translate(drawX, drawY);
          ctx.scale(scale, scale);
          ctx.fillText(d.chars[j], 0, 0);
          ctx.restore();
        }
      }

      // Draw cursor scanning reticle overlay
      if (mouse.x > 0 && mouse.x < canvas.width) {
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
        ctx.stroke();

        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" style={{ pointerEvents: 'none' }} />;
}
