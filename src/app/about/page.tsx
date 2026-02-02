"use client";

import { companyInfo } from "@/lib/data/company";
import { teamData } from "@/lib/data/team";
import { timelineData } from "@/lib/data/timeline";
import { motion } from "framer-motion";
import Link from "next/link";

// Separate founder from other team members
const founder = teamData.find((member) => member.id === "team-1");
const otherTeamMembers = teamData.filter((member) => member.id !== "team-1");

export default function AboutPage() {
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
            About us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight mb-6"
          >
            Empowering African
            <br />
            <span className="text-primary">investments.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl"
          >
            {companyInfo.description}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision - two column */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Our Mission
              </h2>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary leading-relaxed">
                To democratize access to sophisticated investment strategies and
                blockchain education across Africa.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Our Vision
              </h2>
              <p className="text-2xl md:text-3xl font-semibold text-text-primary leading-relaxed">
                An Africa where every investor has the knowledge and tools to
                build generational wealth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            Our journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg mb-16 max-w-xl"
          >
            Key milestones in our growth story.
          </motion.p>

          <div className="space-y-0">
            {timelineData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="py-8 border-b border-gray-200 first:border-t"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <span className="text-4xl font-bold text-primary shrink-0 w-24">
                    {event.year}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {founder && (
        <section className="py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
            >
              Our Founder
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg mb-12 max-w-xl"
            >
              The visionary leader behind Core Afrique Investment Ltd.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Founder Photo & Basic Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <div className="aspect-square bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                      <span className="text-6xl font-bold text-primary">
                        {founder.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{founder.name}</h3>
                <p className="text-secondary font-medium mb-4">{founder.role}</p>
                <div className="flex flex-col gap-2">
                  {founder.email && (
                    <a
                      href={`mailto:${founder.email}`}
                      className="text-primary hover:underline text-sm"
                    >
                      {founder.email}
                    </a>
                  )}
                  {founder.linkedinUrl && (
                    <a
                      href={founder.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Founder Bio & Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-2 space-y-8"
              >
                {/* Bio */}
                <div>
                  <h4 className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
                    Biography
                  </h4>
                  <p className="text-text-secondary leading-relaxed">{founder.bio}</p>
                </div>

                {/* Qualifications */}
                <div>
                  <h4 className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
                    Qualifications & Credentials
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.qualifications.map((qual, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Professional Highlights */}
                {founder.professionalHighlights && founder.professionalHighlights.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
                      Professional Highlights
                    </h4>
                    <ul className="space-y-2">
                      {founder.professionalHighlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                          <span className="text-text-secondary">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Engagements */}
                {founder.engagements && founder.engagements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-secondary uppercase tracking-wider mb-3">
                      Key Engagements & Thought Leadership
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {founder.engagements.map((engagement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          <span className="text-text-secondary text-sm">{engagement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Team Members */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-lg mb-16 max-w-xl"
          >
            Meet the experts driving our mission forward.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherTeamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-surface rounded-xl"
              >
                <div className="w-24 h-24 shrink-0 bg-gray-200 rounded-xl overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary/10">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary text-lg">{member.name}</h3>
                  <p className="text-secondary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  {member.qualifications && member.qualifications.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {member.qualifications.slice(0, 3).map((qual, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-16 text-center"
          >
            What we stand for
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We operate with transparency and hold ourselves to the highest ethical standards in everything we do.",
              },
              {
                title: "Excellence",
                description:
                  "We pursue mastery in our craft, continuously improving our expertise and the quality of our services.",
              },
              {
                title: "Impact",
                description:
                  "We measure success by the positive change we create for our clients and the broader African financial ecosystem.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
            Want to work with us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg mb-10 max-w-lg mx-auto"
          >
            Get in touch to discuss how we can help you achieve your financial
            goals.
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
              Contact us
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
    </main>
  );
}
