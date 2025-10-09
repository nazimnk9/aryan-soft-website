"use client"

import { ContactForm } from "@/components/contact-form"
import { ContactInfoCard } from "@/components/contact-info-card"
import { SectionHeading } from "@/components/section-heading"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactPageClient() {
  return (
    <>
      {/* Contact Info Cards */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-white">
            <ContactInfoCard
              icon={Mail}
              title="Email Us"
              content="info@aryansoft.com"
              link="mailto:info@aryansoft.com"
              delay={0}
            />
            <ContactInfoCard
              icon={Phone}
              title="Call Us"
              content="+1 (555) 123-4567"
              link="tel:+15551234567"
              delay={0.1}
            />
            <ContactInfoCard
              icon={MapPin}
              title="Visit Us"
              content="123 Tech Street, Silicon Valley, CA 94025"
              delay={0.2}
            />
            <ContactInfoCard icon={Clock} title="Business Hours" content="Mon-Fri: 9AM - 6PM PST" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282583716567!2d-122.08624908469225!3d37.42199997982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aryan Soft Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Frequently Asked Questions" subtitle="Quick answers to common questions" />

          <div className="max-w-3xl mx-auto mt-16 space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our initial consultation.",
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer:
                  "Yes, we provide comprehensive support and maintenance packages to ensure your software continues to perform optimally. We offer different tiers based on your needs.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in modern technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, Google Cloud), mobile development (React Native, Flutter), and emerging technologies like AI/ML and blockchain.",
              },
              {
                question: "How do you ensure project quality?",
                answer:
                  "We follow industry best practices including code reviews, automated testing, continuous integration, and agile methodologies. Quality assurance is integrated throughout our development process.",
              },
              {
                question: "Can you work with our existing team?",
                answer:
                  "We offer flexible engagement models including staff augmentation, where our developers work alongside your existing team to accelerate development.",
              },
            ].map((faq, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-pretty">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
