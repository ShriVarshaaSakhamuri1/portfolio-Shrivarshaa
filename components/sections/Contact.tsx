import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact";
import contactData from "@/data/contact.json";
import { SectionContainer } from "@/components/shared";

export function ContactSection() {
  return (
    <SectionContainer className="min-h-fit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        <p className="terminal-label mb-3">&gt; contact</p>
        <h1 className="mb-3 text-2xl font-semibold text-foreground md:text-3xl">
          Get In Touch
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          Interested in discussing opportunities? Feel
          free to reach out and I'll get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="w-full max-w-[800px]">
        <ContactForm formFields={contactData.formFields} />
      </div>
    </SectionContainer>
  );
}
