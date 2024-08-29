import { motion } from "framer-motion";
import { BrushIcon, LineChartIcon, CuboidIcon, PencilIcon } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";

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
            Discover how to enhance your projects with Framer Motion. Learn to
            animate text, images, and even backgrounds. Get insights on
            exporting your creations as SVGs for seamless integration.
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
            description="Easily adjust styles to match your brand or project theme. Change colors, animation and more."
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

export default FeaturesSection;

// @ts-ignore
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
