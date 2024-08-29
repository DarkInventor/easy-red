import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

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
            Choose a plan that fits your needs and start creating animations
            with Framer Motion today.
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

export default PricingSection;

// @ts-ignore
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
  