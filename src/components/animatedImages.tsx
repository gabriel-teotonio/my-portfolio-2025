"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedImages() {
  return (
    <div className="relative h-auto">
      <Image
        src="/assets/images/gabriel.png"
        alt="Logo"
        width={540}
        height={378}
      />

      <motion.img
        src="/assets/icons-svg/code-element.svg"
        alt="element"
        className="absolute top-14 -left-8"
        width={100}
        height={378}
        animate={{
          x: [0, 20, -20, 0], // Movendo para frente e para trás
          y: [0, -10, 10, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/icons-svg/nodejs-element.svg"
        alt="element"
        className="absolute -top-8 left-6"
        width={80}
        height={378}
        animate={{
          x: [0, -10, 10, 0],
          y: [0, 5, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/icons-svg/figma-element.svg"
        alt="element"
        className="absolute bottom-28 right-20"
        width={150}
        height={378}
        animate={{
          x: [0, 10, -10, 0],
          y: [0, -5, 5, 0],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/icons-svg/n8n-element.svg"
        alt="element"
        className="absolute bottom-16 right-20"
        width={150}
        height={378}
        animate={{
          x: [0, -10, 10, 0],
          y: [0, 5, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </div>
  );
}
