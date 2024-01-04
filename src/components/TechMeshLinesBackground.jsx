"use client";
import React, { useRef, useEffect } from "react";

const TechMeshLinesBackground = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    // Initial setup
    const numLines = 100;
    const lines = [];

    for (let i = 0; i < numLines; i++) {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const speed = 1 + Math.random() * 2;
      const direction = Math.random() * 2 * Math.PI;

      lines.push({
        startX,
        startY,
        speed,
        direction,
      });
    }

    const drawLines = () => {
      const { width, height } = canvas;
      context.clearRect(0, 0, width, height);

      lines.forEach((line) => {
        const { startX, startY, speed, direction } = line;
        const endX = startX + Math.cos(direction) * speed;
        const endY = startY + Math.sin(direction) * speed;

        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = "#6e8ec9";
        context.stroke();

        // Update line position for the next frame
        line.startX = endX;
        line.startY = endY;

        // Reset line when it goes out of the canvas
        if (endX < 0 || endX > width || endY < 0 || endY > height) {
          line.startX = Math.random() * width;
          line.startY = Math.random() * height;
        }
      });

      requestAnimationFrame(drawLines);
    };

    drawLines();

    // Cleanup function
    return () => {
      cancelAnimationFrame(drawLines);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return <canvas ref={canvasRef} style={{ position: "fixed", zIndex: "-3" }} />;
};

export default TechMeshLinesBackground;
