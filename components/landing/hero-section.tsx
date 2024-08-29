"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-24 lg:py-32"
    >
    
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      
        <div className="space-y-3">
       
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ">
            Unleash the Power of Framer Motion 📳
          </h1>
        
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Add Framer Motion-based animations to any text or image. change backgrounds, styles and seamlessly export them as SVGs. 
          </p>
        </div>
       
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/animation"
              className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get Started
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/animation"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Try SVG Generator
            </Link>
          </motion.div>
    
        </div>
      </div>
      {/* </AnimatedBackground> */}
      {/* @ts-ignore */}
      <Image src="/app.png" width="1200" height="100" className="flex mx-auto mt-20 border rounded-lg hidden lg:block"/> 
    </motion.section>
  )
}

export default HeroSection