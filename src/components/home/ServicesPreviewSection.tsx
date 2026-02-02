"use client";

import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceCategories = [
  {
    id: "investment-advisory",
    title: "Investment & Strategic Advisory",
    description:
      "Bespoke advisory services for startups, SMEs, and investors entering Africa's digital economy.",
    href: "/services/investment-advisory",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    features: [
      "Investment Readiness & Capital Structuring",
      "Blockchain & Digital Asset Advisory",
      "Market Entry & Growth Strategy",
      "Financial Modeling & Valuation",
    ],
    accent: "secondary",
  },
  {
    id: "blockchain-education",
    title: "Blockchain Education & Advocacy",
    description:
      "Comprehensive education and literacy programs supporting Ghana's National Virtual Assets Literacy Initiative.",
    href: "/services/blockchain-education",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    features: [
      "Blockchain & Digital Assets Courses",
      "Corporate & Institutional Training",
      "Public Advocacy & Ecosystem Engagement",
      "VASP Compliance Education",
    ],
    accent: "primary",
  },
];

export function ServicesPreviewSection() {
  return (
    <SectionContainer className="bg-gradient-to-b from-white to-gray-50">
      <SectionTitle
        title="Our Services"
        subtitle="Comprehensive financial solutions tailored for African markets"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {serviceCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Link href={category.href} className="group block h-full">
              <div
                className={`
                  relative h-full rounded-2xl overflow-hidden
                  bg-white border border-gray-100
                  shadow-sm hover:shadow-xl
                  transition-all duration-500
                  group-hover:-translate-y-1
                `}
              >
                {/* Top accent bar */}
                <div
                  className={`
                    h-1.5 w-full
                    ${category.accent === "secondary" ? "bg-gradient-to-r from-secondary via-secondary/80 to-secondary/60" : "bg-gradient-to-r from-primary via-primary/80 to-primary/60"}
                  `}
                />

                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`
                        flex-shrink-0 w-16 h-16 rounded-xl
                        flex items-center justify-center
                        transition-all duration-300
                        ${category.accent === "secondary" ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"}
                      `}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + featureIndex * 0.08,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`
                            w-1.5 h-1.5 rounded-full flex-shrink-0
                            ${category.accent === "secondary" ? "bg-secondary" : "bg-primary"}
                          `}
                        />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div
                    className={`
                      inline-flex items-center gap-2 text-sm font-semibold
                      transition-all duration-300
                      ${category.accent === "secondary" ? "text-secondary group-hover:text-secondary" : "text-primary group-hover:text-primary"}
                    `}
                  >
                    <span>Explore Services</span>
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Subtle decorative element */}
                <div
                  className={`
                    absolute -bottom-20 -right-20 w-40 h-40 rounded-full
                    opacity-5 transition-opacity duration-500
                    group-hover:opacity-10
                    ${category.accent === "secondary" ? "bg-secondary" : "bg-primary"}
                  `}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-500 text-sm">
          Not sure which service fits your needs?{" "}
          <Link
            href="/contact"
            className="text-primary font-medium hover:underline"
          >
            Let&apos;s discuss your project
          </Link>
        </p>
      </motion.div>
    </SectionContainer>
  );
}
