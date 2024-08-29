"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog";
import Image from "next/image";


export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <MountainIcon className="h-6 w-6" />
            </motion.div>
            <span className="text-lg font-semibold">Easy UI</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex">
              <Button variant="outline">Sign In</Button>
              <Link  href="/animation">
                <Button className="bg-red-600 text-white hover:bg-red-500 ml-2">
                Get Started </Button>
              </Link>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>        
          
        </div>
       
      </header>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden fixed inset-0 z-50 bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <NavLinks />
              <Button variant="outline" className="mt-4">
                Sign In
              </Button>
              <Link  href="/animation">
              <Button className="bg-red-600 text-white hover:bg-red-500 mt-2">
                Get Started
              </Button>
              </Link>
              <Button variant="ghost" className="mt-4" onClick={toggleMenu}>
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="flex-1">
        <HeroSection />
       
        <FeaturesSection />
        <IntegrationSection />
        <UnlockCreativitySection />
        <TestimonialSection />
        <PricingSection />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Easy UI Suite. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Components
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          SVG Editor
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Pricing
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Documentation
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Community
        </Link>
      </motion.div>
    </>
  );
}

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
  );
}

function FeaturesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Framer Motion Features
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how to enhance your projects with Framer Motion. Learn to animate text, images, and even backgrounds. Get insights on exporting your creations as SVGs for seamless integration.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<BrushIcon className="h-12 w-12 text-primary" />}
            title="Text & Image Animations"
            description="Animate text and images with ease, adding a dynamic layer to your content."
          />
          <FeatureCard
            icon={<LineChartIcon className="h-12 w-12 text-primary" />}
            title="Background Animations"
            description="Transform static backgrounds into engaging scenes with subtle motion."
          />
          <FeatureCard
            icon={<CuboidIcon className="h-12 w-12 text-primary" />}
            title="Style Adjustments"
            description="Easily adjust styles to match your brand or project theme."
          />
          <FeatureCard
            icon={<PencilIcon className="h-12 w-12 text-primary" />}
            title="SVG Export"
            description="Export your animations as SVGs for use across web and mobile platforms."
          />
        </div>
      </div>
    </motion.section>
  );
}

 {/* @ts-ignore */}
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
}

function IntegrationSection() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="w-full py-12 md:py-24 lg:py-32"
  >
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Framer Motion Integration
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Framer Motion integrates smoothly with your favorite design tools and frameworks, making it simple to add animations to your projects.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <IntegrationLogo name="Figma" logo="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" />
        <IntegrationLogo name="Adobe XD" logo="https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" />
        <IntegrationLogo name="Sketch" logo="https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg" />
        <IntegrationLogo name="React" logo="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />
        <IntegrationLogo name="Angular" logo="https://angular.io/assets/images/logos/angular/angular.svg" />
        <IntegrationLogo name="Vue.js" logo="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" />
      </div>
    </div>
  </motion.section>
  );
}

 {/* @ts-ignore */}
function IntegrationLogo({ name, logo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center"
    >
      <img
        src={logo || "/placeholder.svg"}
        width="100"
        height="50"
        alt={name}
        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
      />
    </motion.div>
  );
}
function UnlockCreativitySection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full py-12 md:py-24 lg:py-32 border-t"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Enhance Your Projects with Framer Motion
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Utilize Framer Motion to bring a new level of interactivity and engagement to your projects. Explore our resources to get started.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/animation"
              className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Explore Documentation
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/animation"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join Community
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function TestimonialSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            User Experiences with Framer Motion
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Read how Framer Motion has enabled designers and developers to create more dynamic and engaging user interfaces.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Framer Motion has been a game-changer for our UI designs, making animations smoother and more intuitive."
            author="Sarah Johnson"
            role="Lead Designer, TechCorp"
          />
          <TestimonialCard
            quote="Integrating Framer Motion into our workflow has simplified the animation process, making it accessible to our entire team."
            author="Michael Chen"
            role="Senior Developer, InnovateTech"
          />
          <TestimonialCard
            quote="The ability to export animations as SVGs has streamlined our design-to-development process significantly."
            author="Emily Rodriguez"
            role="Creative Director, DesignMasters"
          />
        </div>
      </div>
    </motion.section>
  );
}

 {/* @ts-ignore */}
function TestimonialCard({ quote, author, role }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
        <QuoteIcon className="h-12 w-12 text-muted-foreground" />
        <p className="text-muted-foreground italic">"{quote}"</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </Card>
    </motion.div>
  );
}

function PricingSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Framer Motion Plans
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose a plan that fits your needs and start creating animations with Framer Motion today.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            title="Starter"
            price="$49"
            features={[
              "Basic animation capabilities",
              "Limited SVG export options",
              "Community support",
              "1 project limit",
            ]}
          />
          <PricingCard
            title="Pro"
            price="$99"
            features={[
              "Full animation suite",
              "Unlimited SVG exports",
              "Priority support",
              "Unlimited projects",
              "API access",
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "All Pro features",
              "Dedicated account manager",
              "Custom integrations",
              "On-premise deployment",
              "Training and workshops",
            ]}
          />
        </div>
      </div>     
    </motion.section>
  );
}

 {/* @ts-ignore */}
function PricingCard({ title, price, features, highlighted = false }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        className={`flex flex-col items-center justify-between gap-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md ${
          highlighted ? "border-red-500 bg-red-50" : "bg-background"
        }`}
      >
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-3xl font-bold mt-2">{price}</p>
          {price !== "Custom" && (
            <span className="text-muted-foreground">/month</span>
          )}
        </div>
        <ul className="space-y-2 text-left">
          {/* @ts-ignore */}
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href="/animation">
        <Button
          className={`w-full ${
            highlighted ? "bg-red-600 hover:bg-red-700" : ""
          }`}
        >
          Get Started
        </Button>
        </Link>
      </Card>
    </motion.div>
  );
}

{/* @ts-ignore */}
function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

{/* @ts-ignore */}
function CuboidIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
      <path d="M10 22v-8L2.25 9.15" />
      <path d="m10 14 11.77-6.87" />
    </svg>
  );
}

{/* @ts-ignore */}
function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

{/* @ts-ignore */}
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

{/* @ts-ignore */}
function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

{/* @ts-ignore */}
function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

{/* @ts-ignore */}
function QuoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

{/* @ts-ignore */}
function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
