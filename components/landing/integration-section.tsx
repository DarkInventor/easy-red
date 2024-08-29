import { motion } from "framer-motion";
import React from "react";

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
            Framer Motion integrates smoothly with your favorite design tools
            and frameworks, making it simple to add animations to your projects.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <IntegrationLogo
            name="Figma"
            logo="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          />
          <IntegrationLogo
            name="Adobe XD"
            logo="https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg"
          />
          <IntegrationLogo
            name="Sketch"
            logo="https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg"
          />
          <IntegrationLogo
            name="React"
            logo="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          />
          <IntegrationLogo
            name="Angular"
            logo="https://angular.io/assets/images/logos/angular/angular.svg"
          />
          <IntegrationLogo
            name="Vue.js"
            logo="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default IntegrationSection;

// @ts-ignore
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
