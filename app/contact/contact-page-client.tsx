// "use client"

// import { ContactForm } from "@/components/contact-form"
// import { ContactInfoCard } from "@/components/contact-info-card"
// import { SectionHeading } from "@/components/section-heading"
// import { Mail, Phone, MapPin, Clock } from "lucide-react"
// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"

// export function ContactPageClient() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <>
//       {/* Contact Info Cards */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="relative py-12"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//             {[
//               {
//                 icon: Mail,
//                 title: "Email Us",
//                 content: "info@aryansoft.com",
//                 link: "mailto:info@aryansoft.com",
//               },
//               {
//                 icon: Phone,
//                 title: "Call Us",
//                 content: "+1 (555) 123-4567",
//                 link: "tel:+15551234567",
//               },
//               {
//                 icon: MapPin,
//                 title: "Visit Us",
//                 content: "123 Tech Street, Silicon Valley, CA 94025",
//               },
//               {
//                 icon: Clock,
//                 title: "Business Hours",
//                 content: "Mon-Fri: 9AM - 6PM PST",
//               },
//             ].map((info, index) => (
//               <motion.div
//                 key={info.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//               >
//                 <ContactInfoCard {...info} delay={0} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Contact Form Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.9 }}
//         className="relative py-12"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <div className="max-w-3xl mx-auto">
//             <ContactForm />
//           </div>
//         </div>
//       </motion.section>

//       {/* Map Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 1.2 }}
//         className="relative py-20"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <div className="glass rounded-3xl overflow-hidden h-96">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282583716567!2d-122.08624908469225!3d37.42199997982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Aryan Soft Location"
//             />
//           </div>
//         </div>
//       </motion.section>

//       {/* FAQ Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 1.5 }}
//         className="relative py-20"
//       >
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <SectionHeading title="Frequently Asked Questions" subtitle="Quick answers to common questions" />

//           <div className="max-w-3xl mx-auto mt-16 space-y-6">
//             {[
//               {
//                 question: "What is your typical project timeline?",
//                 answer:
//                   "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our initial consultation.",
//               },
//               {
//                 question: "Do you offer ongoing support and maintenance?",
//                 answer:
//                   "Yes, we provide comprehensive support and maintenance packages to ensure your software continues to perform optimally. We offer different tiers based on your needs.",
//               },
//               {
//                 question: "What technologies do you specialize in?",
//                 answer:
//                   "We specialize in modern technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, Google Cloud), mobile development (React Native, Flutter), and emerging technologies like AI/ML and blockchain.",
//               },
//               {
//                 question: "How do you ensure project quality?",
//                 answer:
//                   "We follow industry best practices including code reviews, automated testing, continuous integration, and agile methodologies. Quality assurance is integrated throughout our development process.",
//               },
//               {
//                 question: "Can you work with our existing team?",
//                 answer:
//                   "We offer flexible engagement models including staff augmentation, where our developers work alongside your existing team to accelerate development.",
//               },
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
//                 className="glass rounded-2xl p-6 hover-lift"
//               >
//                 <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
//                 <p className="text-muted-foreground text-pretty">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </>
//   )
// }

"use client"

import { ContactForm } from "@/components/contact-form"
import { ContactInfoCard } from "@/components/contact-info-card"
import { SectionHeading } from "@/components/section-heading"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ContactPageClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.contact-page-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const cardsContainer = document.getElementById('contact-page-cards');
    if (cardsContainer) {
      cardsContainer.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        cardsContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [])

  if (!mounted) return null

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@aryansoft.com",
      link: "mailto:info@aryansoft.com",
      hoverColor: "rgba(6, 182, 212, 0.15)",
      borderColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      hoverColor: "rgba(139, 92, 246, 0.15)",
      borderColor: "rgba(139, 92, 246, 0.4)",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, Silicon Valley, CA 94025",
      hoverColor: "rgba(236, 72, 153, 0.15)",
      borderColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM - 6PM PST",
      hoverColor: "rgba(34, 197, 94, 0.15)",
      borderColor: "rgba(34, 197, 94, 0.4)",
    },
  ]

  return (
    <>
      <style jsx global>{`
        .contact-page-card {
          position: relative;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .contact-page-card::before,
        .contact-page-card::after {
          border-radius: inherit;
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          transition: opacity 500ms;
          width: 100%;
          pointer-events: none;
        }

        .contact-page-card::before {
          background: radial-gradient(
            400px circle at var(--mouse-x) var(--mouse-y),
            var(--hover-color, rgba(59, 130, 246, 0.15)),
            transparent 40%
          );
          z-index: 3;
        }

        .contact-page-card::after {
          background: radial-gradient(
            300px circle at var(--mouse-x) var(--mouse-y),
            var(--border-color, rgba(59, 130, 246, 0.4)),
            transparent 40%
          );
          z-index: 1;
        }

        .contact-page-card:hover::before {
          opacity: 1;
        }

        #contact-page-cards:hover .contact-page-card::after {
          opacity: 1;
        }

        .contact-page-card > .card-content {
          background-color: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(10px);
          border-radius: inherit;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          inset: 1px;
          padding: 1.5rem;
          position: relative;
          z-index: 2;
          height: 100%;
        }

        .faq-card {
          position: relative;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .faq-card::before,
        .faq-card::after {
          border-radius: inherit;
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          transition: opacity 500ms;
          width: 100%;
          pointer-events: none;
        }

        .faq-card::before {
          background: radial-gradient(
            400px circle at var(--mouse-x) var(--mouse-y),
            rgba(168, 85, 247, 0.15),
            transparent 40%
          );
          z-index: 3;
        }

        .faq-card::after {
          background: radial-gradient(
            300px circle at var(--mouse-x) var(--mouse-y),
            rgba(168, 85, 247, 0.4),
            transparent 40%
          );
          z-index: 1;
        }

        .faq-card:hover::before {
          opacity: 1;
        }

        #faq-cards:hover .faq-card::after {
          opacity: 1;
        }

        .faq-card > .card-content {
          background-color: rgba(15, 15, 15, 0.8);
          backdrop-filter: blur(10px);
          border-radius: inherit;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          inset: 1px;
          padding: 1.5rem;
          position: relative;
          z-index: 2;
          height: 100%;
        }
      `}</style>

      {/* Contact Info Cards */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative py-12"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div id="contact-page-cards" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                //className="contact-page-card"
                style={{
                  '--hover-color': info.hoverColor,
                  '--border-color': info.borderColor,
                } as React.CSSProperties}
              >
                {info.link ? (
                  <a href={info.link} className="card-content block text-center">
                    <ContactInfoCard {...info} delay={0} />
                  </a>
                ) : (
                  <div className="card-content text-center">
                    <ContactInfoCard {...info} delay={0} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="relative py-12"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
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
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <SectionHeading title="Frequently Asked Questions" subtitle="Quick answers to common questions" />

          <div id="faq-cards" className="max-w-3xl mx-auto mt-16 space-y-6">
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
            ].map((faq, index) => {
              const handleFAQMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                  className="faq-card"
                  onMouseMove={handleFAQMouseMove}
                >
                  <div className="card-content">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  )
}