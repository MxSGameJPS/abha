import React, { useRef, useEffect } from "react";
import styles from "./fallingLeaves.module.css";

// Cores e formatos simples para folhas
const leafColors = ["#b5c18e", "#a3b763"];
const leafShapes = [
  // formato 1: oval
  (ctx) => {
    ctx.beginPath();
    ctx.ellipse(0, 0, 8, 16, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
  },
  // formato 2: gota
  (ctx) => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(8, 16, 0, 20);
    ctx.quadraticCurveTo(-8, 16, 0, 0);
    ctx.fill();
  },
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createLeaf(width, height) {
  return {
    x: randomBetween(0, width),
    y: randomBetween(-height, 0),
    speedY: randomBetween(0.7, 1.7),
    speedX: randomBetween(-0.4, 0.4),
    angle: randomBetween(0, Math.PI * 2),
    angleSpeed: randomBetween(-0.01, 0.01),
    color: leafColors[Math.floor(Math.random() * leafColors.length)],
    shape: leafShapes[Math.floor(Math.random() * leafShapes.length)],
    size: randomBetween(0.7, 1.2),
  };
}

export default function FallingLeaves({ leafCount = 18 }) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const leavesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.parentElement.offsetWidth;
    let height = canvas.parentElement.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Inicializa folhas
    leavesRef.current = Array.from({ length: leafCount }, () =>
      createLeaf(width, height)
    );

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let leaf of leavesRef.current) {
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.angle);
        ctx.scale(leaf.size, leaf.size);
        ctx.fillStyle = leaf.color;
        leaf.shape(ctx);
        ctx.restore();
        // Atualiza posição
        leaf.x += leaf.speedX;
        leaf.y += leaf.speedY;
        leaf.angle += leaf.angleSpeed;
        // Reposiciona se sair da tela
        if (leaf.y > height + 20) {
          leaf.x = randomBetween(0, width);
          leaf.y = randomBetween(-40, -10);
        }
        if (leaf.x < -20) leaf.x = width + 10;
        if (leaf.x > width + 20) leaf.x = -10;
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    // Responsivo
    function handleResize() {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      leavesRef.current = Array.from({ length: leafCount }, () =>
        createLeaf(width, height)
      );
    }
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [leafCount]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.fallingLeaves}
      aria-hidden="true"
    />
  );
}
