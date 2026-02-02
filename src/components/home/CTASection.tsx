"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
        >
          Ready to transform your financial future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-secondary text-lg mb-10 max-w-lg mx-auto"
        >
          Schedule a consultation with our experts and discover how we can help
          you achieve your investment goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Schedule consultation
          </Link>
          <Link
            href="/services/investment-advisory"
            className="px-8 py-4 text-text-primary border border-gray-300 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Explore services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
