"use client";

import { investmentAdvisoryServices, serviceCategories } from "@/lib/data/services";
import { motion } from "framer-motion";
import Link from "next/link";

// Investment-focused differentiators
const investmentDifferentiators = [
  {
    id: "inv-1",
    title: "CFA & MBA Credentials",
    description: "Chartered Financial Analyst with MBA from Schulich School of Business, York University",
  },
  {
    id: "inv-2",
    title: "14+ Years Experience",
    description: "Deep expertise in financial markets, capital structuring, and investment advisory",
  },
  {
    id: "inv-3",
    title: "African Market Expertise",
    description: "Wholly Ghanaian-owned firm with authentic local knowledge and international standards",
  },
];

export default function InvestmentAdvisoryPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-secondary font-medium mb-4"
          >
            Investment & Strategic Advisory
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight mb-6"
          >
            Strategic advisory
            <br />
            <span className="text-primary">for Africa&apos;s digital economy.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mb-10"
          >
            {serviceCategories.investmentAdvisory.overview}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Schedule a consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Investment Credentials */}
      <section className="py-16 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
            {[
              { value: "14+", label: "Years Advisory Experience" },
              { value: "CFA", label: "Chartered Credentials" },
              { value: "MBA", label: "Schulich School of Business" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - alternating layout, no cards */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            What we offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg mb-16 max-w-xl"
          >
            We support startups, SMEs, and institutions with hands-on, research-driven advisory aligned with regulatory realities.
          </motion.p>

          <div className="space-y-0">
            {investmentAdvisoryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group py-8 border-b border-gray-200 first:border-t"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-text-secondary font-mono">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-text-secondary md:max-w-md md:text-right">
                    {service.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us - two column prose */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-text-primary mb-6"
              >
                Why CAI?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-lg leading-relaxed"
              >
                We combine global investment best practices with deep local
                knowledge. As a wholly owned Ghanaian firm, we bring authentic
                African market expertise with international standards.
              </motion.p>
            </div>
            <div className="space-y-8">
              {investmentDifferentiators.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="font-semibold mb-2 flex items-center gap-3 text-text-primary">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {item.title}
                  </h3>
                  <p className="pl-5 text-text-secondary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-6"
          >
            Ready to start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg mb-10 max-w-lg mx-auto"
          >
            Schedule a consultation with our team and discover how we can support
            your business in Africa&apos;s digital economy.
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
              Book a consultation
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 text-text-primary border border-gray-300 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Learn about us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
