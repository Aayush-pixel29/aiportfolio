"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function MeshVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Trigger the connection animation after a short delay
    const timer = setTimeout(() => {
      setConnected(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out to 5% opacity as we scroll past the hero (roughly 500px)
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0.04, 1 - (scrollY / 500));
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const nodes: Node[] = [];
    const numNodes = 60; // Keep it sparse enough for performance but dense enough for a mesh

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let progress = 0; // 0 to 1 for the transition from Amber to Cyan

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Animate progress to 1 if connected
      if (connected && progress < 1) {
        progress += 0.02;
      }

      // Colors
      // Amber: 255, 107, 61
      // Cyan: 79, 209, 255
      const r = Math.round(255 + (79 - 255) * progress);
      const g = Math.round(107 + (209 - 107) * progress);
      const b = Math.round(61 + (255 - 61) * progress);
      const color = `${r}, ${g}, ${b}`;

      // Max connection distance increases as connection is established
      const connectionDistance = 100 + (150 * progress);

      // Draw connections
      ctx.lineWidth = 1;
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < connectionDistance) {
            // Opacity of line based on distance
            const lineOpacity = (1 - (dist / connectionDistance)) * 0.3;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${color}, ${lineOpacity})`;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.8)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [connected]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none transition-opacity duration-100 z-0"
      style={{ opacity }}
    />
  );
}
