"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function NeuralConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Seed more prominent interactive nodes
    const nodeCount = Math.min(42, Math.floor(width / 28));
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        size: Math.random() * 3 + 4, // Bigger nodes: 4px - 7px
      });
    }

    // Mouse coordinates for dynamic interaction
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let rotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. High-Visibility 3D Crystal Mesh
      const crystalX = width > 1024 ? width * 0.78 : width * 0.5;
      const crystalY = height > 600 ? height * 0.45 : height * 0.5;
      const radius = width > 768 ? 130 : 85; // Significantly larger crystal

      rotation += 0.012; // Faster, noticeable rotation

      const pts = [
        {
          x: crystalX + radius * Math.cos(rotation),
          y: crystalY + radius * 0.4 * Math.sin(rotation) - radius * 0.8,
        },
        {
          x: crystalX + radius * Math.cos(rotation + Math.PI / 2),
          y: crystalY + radius * 0.4 * Math.sin(rotation + Math.PI / 2),
        },
        {
          x: crystalX + radius * Math.cos(rotation + Math.PI),
          y: crystalY + radius * 0.4 * Math.sin(rotation + Math.PI) + radius * 0.8,
        },
        {
          x: crystalX + radius * Math.cos(rotation + (3 * Math.PI) / 2),
          y: crystalY + radius * 0.4 * Math.sin(rotation + (3 * Math.PI) / 2),
        },
      ];

      // Outer Crystal Facets with prominent Ice Blue borders & glow
      ctx.strokeStyle = "rgba(2, 132, 199, 0.85)"; // High contrast vivid sky-600
      ctx.lineWidth = 2.5; // Thicker wireframe lines
      ctx.fillStyle = "rgba(186, 230, 253, 0.45)"; // Noticeable translucent fill

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i].x, pts[i].y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Bold Internal Axis Lines connecting center vertex
      ctx.strokeStyle = "rgba(14, 165, 233, 0.8)";
      ctx.lineWidth = 2;
      for (let i = 0; i < pts.length; i++) {
        ctx.beginPath();
        ctx.moveTo(crystalX, crystalY);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();

        // Corner crystal node points
        ctx.fillStyle = "#0284c7";
        ctx.fillRect(pts[i].x - 4, pts[i].y - 4, 8, 8);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(pts[i].x - 4, pts[i].y - 4, 8, 8);
      }

      // Center Core Pulsing Node
      const pulse = 6 + 2 * Math.sin(rotation * 3);
      ctx.fillStyle = "#0284c7";
      ctx.fillRect(crystalX - pulse / 2, crystalY - pulse / 2, pulse, pulse);

      // 2. High-Visibility Neural Nodes & Lines
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Interaction with mouse: Bold Electric Laser Line
        const dxMouse = mouseX - n.x;
        const dyMouse = mouseY - n.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < 180) {
          ctx.strokeStyle = `rgba(2, 132, 199, ${0.85 * (1 - distMouse / 180)})`;
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Draw connections between nodes: Vivid Cyan Laser Lines
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 180) {
            const alpha = 0.65 * (1 - dist / 180); // High visibility contrast
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Draw prominent square nodes with white border
        ctx.fillStyle = "#0284c7";
        ctx.fillRect(n.x - n.size / 2, n.y - n.size / 2, n.size, n.size);

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(n.x - n.size / 2, n.y - n.size / 2, n.size, n.size);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-100"
    />
  );
}
