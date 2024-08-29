import { motion } from 'framer-motion'
import { QuoteIcon } from 'lucide-react';
import React from 'react'
import { Card } from '../ui/card';

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
            Read how Framer Motion has enabled designers and developers to
            create more dynamic and engaging user interfaces.
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
  )
}

export default TestimonialSection

// @ts-ignore
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