// "use client"

// import { motion } from "framer-motion"
// import { SectionHeading } from "@/components/section-heading"
// import { AnimatedButton } from "@/components/animated-button"
// import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
// import Link from "next/link"

// const contactMethods = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "info@aryansoft.com",
//     link: "mailto:info@aryansoft.com",
//     color: "from-cyan-500 to-blue-500",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+1 (555) 123-4567",
//     link: "tel:+15551234567",
//     color: "from-blue-500 to-purple-500",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Silicon Valley, CA",
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: MessageSquare,
//     title: "Live Chat",
//     value: "Available 24/7",
//     color: "from-pink-500 to-cyan-500",
//   },
// ]

// export function ContactPreview() {
//   return (
//     <section id="contact" className="relative py-20 md:py-32">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//         <SectionHeading
//           title="Let's Start Your Project"
//           subtitle="Get in touch with us to discuss how we can help transform your business with innovative software solutions"
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//           {contactMethods.map((method, index) => (
//             <motion.div
//               key={method.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="glass rounded-2xl p-6 text-center group hover-lift"
//             >
//               {method.link ? (
//                 <a href={method.link} className="block">
//                   <ContactMethodContent method={method} />
//                 </a>
//               ) : (
//                 <ContactMethodContent method={method} />
//               )}
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <Link href="/contact">
//             <AnimatedButton size="lg" showArrow>
//               Contact Us Now
//             </AnimatedButton>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// function ContactMethodContent({ method }: { method: (typeof contactMethods)[0] }) {
//   return (
//     <>
//       <motion.div
//         whileHover={{ rotate: 360, scale: 1.1 }}
//         transition={{ duration: 0.6 }}
//         className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
//       >
//         <method.icon className="w-7 h-7 text-white" />
//       </motion.div>
//       <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
//       <p className="text-white text-sm font-medium">{method.value}</p>
//     </>
//   )
// }


// "use client"

// import { motion } from "framer-motion"
// import { SectionHeading } from "@/components/section-heading"
// import { AnimatedButton } from "@/components/animated-button"
// import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
// import Link from "next/link"
// import { useEffect } from "react"

// const contactMethods = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "info@aryansoft.com",
//     link: "mailto:info@aryansoft.com",
//     color: "from-cyan-500 to-blue-500",
//     hoverColor: "rgba(6, 182, 212, 0.15)",
//     borderColor: "rgba(59, 130, 246, 0.4)",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+1 (555) 123-4567",
//     link: "tel:+15551234567",
//     color: "from-blue-500 to-purple-500",
//     hoverColor: "rgba(139, 92, 246, 0.15)",
//     borderColor: "rgba(139, 92, 246, 0.4)",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Silicon Valley, CA",
//     color: "from-purple-500 to-pink-500",
//     hoverColor: "rgba(236, 72, 153, 0.15)",
//     borderColor: "rgba(236, 72, 153, 0.4)",
//   },
//   {
//     icon: MessageSquare,
//     title: "Live Chat",
//     value: "Available 24/7",
//     color: "from-pink-500 to-cyan-500",
//     hoverColor: "rgba(236, 72, 153, 0.15)",
//     borderColor: "rgba(6, 182, 212, 0.4)",
//   },
// ]

// export function ContactPreview() {
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const cards = document.querySelectorAll('.contact-preview-card');
//       cards.forEach((card) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
//         (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
//       });
//     };

//     const cardsContainer = document.getElementById('contact-preview-cards');
//     if (cardsContainer) {
//       cardsContainer.addEventListener('mousemove', handleMouseMove);
      
//       return () => {
//         cardsContainer.removeEventListener('mousemove', handleMouseMove);
//       };
//     }
//   }, []);

//   return (
//     <>
//       <style jsx global>{`
//         .contact-preview-card {
//           position: relative;
//           background-color: rgba(255, 255, 255, 0.05);
//           border-radius: 1rem;
//           cursor: pointer;
//           display: flex;
//           flex-direction: column;
//           overflow: hidden;
//         }

//         .contact-preview-card::before,
//         .contact-preview-card::after {
//           border-radius: inherit;
//           content: "";
//           height: 100%;
//           left: 0;
//           opacity: 0;
//           position: absolute;
//           top: 0;
//           transition: opacity 500ms;
//           width: 100%;
//           pointer-events: none;
//         }

//         .contact-preview-card::before {
//           background: radial-gradient(
//             400px circle at var(--mouse-x) var(--mouse-y),
//             var(--hover-color, rgba(59, 130, 246, 0.15)),
//             transparent 40%
//           );
//           z-index: 3;
//         }

//         .contact-preview-card::after {
//           background: radial-gradient(
//             300px circle at var(--mouse-x) var(--mouse-y),
//             var(--border-color, rgba(59, 130, 246, 0.4)),
//             transparent 40%
//           );
//           z-index: 1;
//         }

//         .contact-preview-card:hover::before {
//           opacity: 6;
//         }

//         #contact-preview-cards:hover .contact-preview-card::after {
//           opacity: 6;
//         }

//         .contact-preview-card > .card-content {
//           background-color: rgba(15, 15, 15, 0.8);
//           backdrop-filter: blur(10px);
//           border-radius: inherit;
//           display: flex;
//           flex-direction: column;
//           flex-grow: 1;
//           inset: 1px;
//           padding: 1.5rem;
//           position: relative;
//           z-index: 2;
//           height: 100%;
//         }
//       `}</style>

//       <section id="contact" className="relative py-20 md:py-32">
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <SectionHeading
//             title="Let's Start Your Project"
//             subtitle="Get in touch with us to discuss how we can help transform your business with innovative software solutions"
//           />

//           <div id="contact-preview-cards" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//             {contactMethods.map((method, index) => (
//               <motion.div
//                 key={method.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="contact-preview-card text-center group"
//                 style={{
//                   '--hover-color': method.hoverColor,
//                   '--border-color': method.borderColor,
//                 } as React.CSSProperties}
//               >
//                 {method.link ? (
//                   <a href={method.link} className="card-content block text-center">
//                     <ContactMethodContent method={method} />
//                   </a>
//                 ) : (
//                   <div className="card-content text-center">
//                     <ContactMethodContent method={method} />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="text-center mt-12"
//           >
//             <Link href="/contact">
//               <AnimatedButton size="lg" showArrow>
//                 Contact Us Now
//               </AnimatedButton>
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }

// function ContactMethodContent({ method }: { method: (typeof contactMethods)[0] }) {
//   return (
//     <>
//       <motion.div
//         whileHover={{ rotate: 360, scale: 1.1 }}
//         transition={{ duration: 0.6 }}
//         className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
//       >
//         <method.icon className="w-7 h-7 text-white" />
//       </motion.div>
//       <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
//       <p className="text-white text-sm font-medium">{method.value}</p>
//     </>
//   )
// }

// "use client"

// import { motion } from "framer-motion"
// import { SectionHeading } from "@/components/section-heading"
// import { AnimatedButton } from "@/components/animated-button"
// import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
// import Link from "next/link"
// import { useEffect } from "react"

// const contactMethods = [
//   {
//     icon: Mail,
//     title: "Email",
//     value: "info@aryansoft.com",
//     link: "mailto:info@aryansoft.com",
//     color: "from-cyan-500 to-blue-500",
//     hoverColor: "rgba(6, 182, 212, 0.2)",
//     borderColor: "rgba(6, 182, 212, 0.6)",
//     staticBorderColor: "rgba(6, 182, 212, 0.3)",
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+1 (555) 123-4567",
//     link: "tel:+15551234567",
//     color: "from-blue-500 to-purple-500",
//     hoverColor: "rgba(139, 92, 246, 0.2)",
//     borderColor: "rgba(139, 92, 246, 0.6)",
//     staticBorderColor: "rgba(139, 92, 246, 0.3)",
//   },
//   {
//     icon: MapPin,
//     title: "Location",
//     value: "Silicon Valley, CA",
//     color: "from-purple-500 to-pink-500",
//     hoverColor: "rgba(236, 72, 153, 0.2)",
//     borderColor: "rgba(236, 72, 153, 0.6)",
//     staticBorderColor: "rgba(236, 72, 153, 0.3)",
//   },
//   // {
//   //   icon: MessageSquare,
//   //   title: "Live Chat",
//   //   value: "Available 24/7",
//   //   color: "from-pink-500 to-cyan-500",
//   //   hoverColor: "rgba(34, 197, 94, 0.2)",
//   //   borderColor: "rgba(34, 197, 94, 0.6)",
//   //   staticBorderColor: "rgba(34, 197, 94, 0.3)",
//   // },
// ]

// export function ContactPreview() {
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const cards = document.querySelectorAll('.contact-preview-card');
//       cards.forEach((card) => {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
//         (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
//       });
//     };

//     const cardsContainer = document.getElementById('contact-preview-cards');
//     if (cardsContainer) {
//       cardsContainer.addEventListener('mousemove', handleMouseMove);
      
//       return () => {
//         cardsContainer.removeEventListener('mousemove', handleMouseMove);
//       };
//     }
//   }, []);

//   return (
//     <>
//       <style jsx global>{`
//         .contact-preview-card {
//           position: relative;
//           background-color: rgba(255, 255, 255, 0.05);
//           border-radius: 1rem;
//           cursor: pointer;
//           display: flex;
//           flex-direction: column;
//           overflow: hidden;
//           border: 2px solid var(--static-border-color, rgba(6, 182, 212, 0.3));
//           transition: all 300ms ease;
//         }

//         .contact-preview-card::before,
//         .contact-preview-card::after {
//           border-radius: inherit;
//           content: "";
//           height: 100%;
//           left: 0;
//           opacity: 0;
//           position: absolute;
//           top: 0;
//           transition: opacity 400ms;
//           width: 100%;
//           pointer-events: none;
//         }

//         .contact-preview-card::before {
//           background: radial-gradient(
//             450px circle at var(--mouse-x) var(--mouse-y),
//             var(--hover-color, rgba(6, 182, 212, 0.2)),
//             transparent 40%
//           );
//           z-index: 3;
//         }

//         .contact-preview-card::after {
//           background: radial-gradient(
//             350px circle at var(--mouse-x) var(--mouse-y),
//             var(--border-color, rgba(6, 182, 212, 0.6)),
//             transparent 40%
//           );
//           z-index: 1;
//           opacity: 0.8;
//         }

//         .contact-preview-card:hover {
//           border-color: var(--border-color, rgba(6, 182, 212, 0.6));
//           transform: translateY(-2px);
//           box-shadow: 0 10px 40px -10px var(--border-color, rgba(6, 182, 212, 0.3));
//         }

//         .contact-preview-card:hover::before {
//           opacity: 1;
//         }

//         .contact-preview-card:hover::after {
//           opacity: 1;
//         }

//         #contact-preview-cards .contact-preview-card::after {
//           opacity: 0.6;
//         }

//         .contact-preview-card > .card-content {
//           background-color: rgba(15, 15, 15, 0.85);
//           backdrop-filter: blur(12px);
//           border-radius: inherit;
//           display: flex;
//           flex-direction: column;
//           flex-grow: 1;
//           inset: 1px;
//           padding: 1.5rem;
//           position: relative;
//           z-index: 2;
//           height: 100%;
//           transition: all 300ms ease;
//         }

//         .contact-preview-card:hover > .card-content {
//           background-color: rgba(15, 15, 15, 0.9);
//         }
//       `}</style>

//       <section id="contact" className="relative py-20 md:py-32">
//         <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//           <SectionHeading
//             title="Let's Start Your Project"
//             subtitle="Get in touch with us to discuss how we can help transform your business with innovative software solutions"
//           />

//           <div id="contact-preview-cards" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//             {contactMethods.map((method, index) => (
//               <motion.div
//                 key={method.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="contact-preview-card text-center group"
//                 style={{
//                   '--hover-color': method.hoverColor,
//                   '--border-color': method.borderColor,
//                   '--static-border-color': method.staticBorderColor,
//                 } as React.CSSProperties}
//               >
//                 {method.link ? (
//                   <a href={method.link} className="card-content block text-center">
//                     <ContactMethodContent method={method} />
//                   </a>
//                 ) : (
//                   <div className="card-content text-center">
//                     <ContactMethodContent method={method} />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="text-center mt-12"
//           >
//             <Link href="/contact">
//               <AnimatedButton size="lg" showArrow>
//                 Contact Us Now
//               </AnimatedButton>
//             </Link>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   )
// }

// function ContactMethodContent({ method }: { method: (typeof contactMethods)[0] }) {
//   return (
//     <>
//       <motion.div
//         // whileHover={{ rotate: 360, scale: 1.1 }}
//         // transition={{ duration: 0.6 }}
//         className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
//       >
//         <method.icon className="w-7 h-7 text-white" />
//       </motion.div>
//       <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
//       <p className="text-white text-sm font-medium">{method.value}</p>
//     </>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedButton } from "@/components/animated-button"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@aryansoft.com",
    link: "mailto:info@aryansoft.com",
    color: "from-cyan-500 to-blue-500",
    hoverColor: "rgba(6, 182, 212, 0.2)",
    borderColor: "rgba(6, 182, 212, 0.6)",
    staticBorderColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    color: "from-blue-500 to-purple-500",
    hoverColor: "rgba(139, 92, 246, 0.2)",
    borderColor: "rgba(139, 92, 246, 0.6)",
    staticBorderColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "House:470, Road:8, Baridhara DOHS, Dhaka",
    color: "from-purple-500 to-pink-500",
    hoverColor: "rgba(236, 72, 153, 0.2)",
    borderColor: "rgba(236, 72, 153, 0.6)",
    staticBorderColor: "rgba(236, 72, 153, 0.3)",
  },
]

export function ContactPreview() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.contact-preview-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const cardsContainer = document.getElementById('contact-preview-cards');
    if (cardsContainer) {
      cardsContainer.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        cardsContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        .contact-preview-card {
          position: relative;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 2px solid var(--static-border-color, rgba(6, 182, 212, 0.3));
          transition: all 300ms ease;
        }

        .contact-preview-card::before,
        .contact-preview-card::after {
          border-radius: inherit;
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          transition: opacity 400ms;
          width: 100%;
          pointer-events: none;
        }

        .contact-preview-card::before {
          background: radial-gradient(
            450px circle at var(--mouse-x) var(--mouse-y),
            var(--hover-color, rgba(6, 182, 212, 0.2)),
            transparent 40%
          );
          z-index: 3;
        }

        .contact-preview-card::after {
          background: radial-gradient(
            350px circle at var(--mouse-x) var(--mouse-y),
            var(--border-color, rgba(6, 182, 212, 0.6)),
            transparent 40%
          );
          z-index: 1;
          opacity: 0.6;
        }

        .contact-preview-card:hover {
          border-color: var(--border-color, rgba(6, 182, 212, 0.6));
          transform: translateY(-2px);
          box-shadow: 0 10px 40px -10px var(--border-color, rgba(6, 182, 212, 0.3));
        }

        .contact-preview-card:hover::before {
          opacity: 1;
        }

        .contact-preview-card:hover::after {
          opacity: 1;
        }

        #contact-preview-cards .contact-preview-card::after {
          opacity: 0.6;
        }

        .contact-preview-card > .card-content {
          background-color: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(12px);
          border-radius: inherit;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          inset: 1px;
          padding: 1.5rem;
          position: relative;
          z-index: 2;
          height: 100%;
          transition: all 300ms ease;
        }

        .contact-preview-card:hover > .card-content {
          background: radial-gradient(
            350px circle at var(--mouse-x) var(--mouse-y),
            var(--border-color, rgba(6, 182, 212, 0.6)),
            transparent 40%
          );
        }
      `}</style>

      <section id="contact" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <SectionHeading
            title="Let's Start Your Project"
            subtitle="Get in touch with us to discuss how we can help transform your business with innovative software solutions"
          />

          <div id="contact-preview-cards" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="contact-preview-card text-center group"
                style={{
                  '--hover-color': method.hoverColor,
                  '--border-color': method.borderColor,
                  '--static-border-color': method.staticBorderColor,
                } as React.CSSProperties}
              >
                {method.link ? (
                  <a href={method.link} className="card-content block text-center">
                    <ContactMethodContent method={method} />
                  </a>
                ) : (
                  <div className="card-content text-center">
                    <ContactMethodContent method={method} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <AnimatedButton size="lg" showArrow>
                Contact Us Now
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function ContactMethodContent({ method }: { method: (typeof contactMethods)[0] }) {
  return (
    <>
      <motion.div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
      >
        <method.icon className="w-7 h-7 text-white" />
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
      <p className="text-white text-sm font-medium">{method.value}</p>
    </>
  )
}