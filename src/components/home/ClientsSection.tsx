"use client";

import { clientCategories } from "@/lib/data/clients";
import { motion } from "framer-motion";

export function ClientsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
        >
          Who we serve
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-secondary text-lg mb-16 max-w-xl"
        >
          Trusted by diverse clients across Ghana and beyond.
        </motion.p>

        <div className="space-y-0">
          {clientCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="py-6 border-b border-gray-200 first:border-t"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-6">
                  <span className="text-3xl font-bold text-secondary shrink-0 w-16">
                    {category.clientCount}+
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {category.name}
                    </h3>
                    <p className="text-text-secondary text-sm md:max-w-md">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
