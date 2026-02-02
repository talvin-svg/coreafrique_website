"use client";

import { blockchainEducationServices, serviceCategories } from "@/lib/data/services";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlockchainEducationPage() {
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
            Blockchain Education & Advocacy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight mb-6"
          >
            Building Africa&apos;s
            <br />
            <span className="text-primary">digital asset future.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mb-10"
          >
            {serviceCategories.blockchainEducation.overview}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Request training
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#programs"
              className="px-6 py-3 text-text-primary border border-gray-300 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
            >
              View programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Regulatory Credentials */}
      <section className="py-12 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center md:text-left">
            <div className="px-4 py-2 bg-yellow-100 border border-yellow-400 rounded-lg">
              <div className="text-2xl font-bold text-yellow-700">NaVALI</div>
              <div className="text-yellow-800 mt-1 text-sm font-medium">Knowledge Partner of Bank of Ghana (BoG) and SEC</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">8+ Years</div>
              <div className="text-text-secondary mt-1">Blockchain Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">CFA</div>
              <div className="text-text-secondary mt-1">Chartered Credentials</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we teach */}
      <section id="programs" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            Our programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg mb-16 max-w-xl"
          >
            Promoting informed, responsible, and compliant adoption of Blockchain technology.
          </motion.p>

          <div className="space-y-0">
            {blockchainEducationServices.map((service, index) => (
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

      {/* Who we serve */}
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
                Who we serve
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-text-secondary text-lg leading-relaxed"
              >
                Our programs are tailored for different audiences, from beginners
                to institutional stakeholders, all aligned with Ghana&apos;s
                regulatory framework.
              </motion.p>
            </div>
            <div className="space-y-8">
              {[
                { title: "Beginners & General Public", desc: "Foundational blockchain knowledge" },
                { title: "Professionals & Executives", desc: "Strategic digital asset awareness" },
                { title: "Financial Institutions", desc: "Blockchain for business applications" },
                { title: "Government Agencies", desc: "Policy and regulatory alignment" },
                { title: "VASP License Holders", desc: "Compliance-focused education" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="font-semibold text-text-primary mb-1 flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    {item.title}
                  </h3>
                  <p className="text-text-secondary pl-5">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-yellow-50 border border-yellow-400 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong className="text-yellow-700">Regulatory Disclosure:</strong> {serviceCategories.blockchainEducation.disclaimer}
            </p>
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
            Ready to upskill your team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg mb-10 max-w-lg mx-auto"
          >
            Get in touch to discuss a training program tailored to your
            organization&apos;s needs.
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
              Request a consultation
            </Link>
            <Link
              href="/services/investment-advisory"
              className="px-8 py-4 text-text-primary border border-gray-300 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
            >
              View advisory services
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
