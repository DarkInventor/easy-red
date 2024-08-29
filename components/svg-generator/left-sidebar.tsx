"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

type AnimationVariant = keyof typeof animationVariants;

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scaleIn: {
    initial: { scale: 0 },
    animate: { scale: 1 },
  },
  rotateIn: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
  },
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  slideInRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  bounceIn: {
    initial: { scale: 0 },
    animate: { scale: [0, 1.2, 1] },
  },
  shake: {
    animate: { x: [-10, 10, -10, 10, 0] },
  },
  pulse: {
    animate: { scale: [1, 1.1, 1] },
  },
  swing: {
    animate: { rotate: [0, 15, -15, 15, -15, 0] },
  },
  flip: {
    animate: { rotateY: [0, 180, 360] },
  },
  jello: {
    animate: {
      skew: [
        "0deg, 0deg",
        "-12.5deg, -12.5deg",
        "6.25deg, 6.25deg",
        "-3.125deg, -3.125deg",
        "1.5625deg, 1.5625deg",
        "0deg, 0deg",
      ],
    },
  },
  rubberBand: {
    animate: {
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 1],
    },
  },
  tada: {
    animate: {
      scale: [1, 0.9, 0.9, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
      rotate: [0, -3, -3, 3, -3, 3, -3, 3, -3, 0],
    },
  },
  heartbeat: {
    animate: { scale: [1, 1.3, 1, 1.3, 1] },
  },
  glitch: {
    animate: {
      x: [-2, 2, -2, 2, 0],
      y: [2, -2, 2, -2, 0],
      filter: [
        "hue-rotate(0deg)",
        "hue-rotate(90deg)",
        "hue-rotate(180deg)",
        "hue-rotate(270deg)",
        "hue-rotate(0deg)",
      ],
    },
  },
  wobble: {
    animate: {
      rotate: [0, -5, 3, -3, 2, -1, 0],
      x: [0, -25, 20, -15, 10, -5, 0],
    },
  },
  bounce: {
    animate: {
      y: [0, -30, 0, -15, 0, -5, 0],
    },
  },
};

function LeftSidebar() {
  const [animation, setAnimation] = useState<AnimationVariant>("fadeIn");
  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto border-r border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-center">Animation Type</h2>
      <div className="grid grid-cols-3 gap-2">
        {Object.keys(animationVariants).map((anim) => (
          <div
            key={anim}
            className={`aspect-square bg-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors ${
              animation === anim ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setAnimation(anim as AnimationVariant)}
          >
            <motion.div
              className="w-8 h-8 bg-blue-500 rounded-md"
              animate={animationVariants[anim as AnimationVariant].animate}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
