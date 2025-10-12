// "use client"

// import { motion } from "framer-motion"
// import type { LucideIcon } from "lucide-react"

// interface ContactInfoCardProps {
//   icon: LucideIcon
//   title: string
//   content: string
//   link?: string
//   delay?: number
// }

// export function ContactInfoCard({ icon: Icon, title, content, link, delay = 0 }: ContactInfoCardProps) {
//   const CardContent = (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       whileHover={{ y: -8 }}
//       className="glass rounded-2xl p-6 hover-lift text-center"
//     >
//       <motion.div
//         whileHover={{ rotate: 360, scale: 1.1 }}
//         transition={{ duration: 0.6 }}
//         className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4"
//       >
//         <Icon className="w-7 h-7 text-primary-foreground" />
//       </motion.div>
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-muted-foreground text-white">{content}</p>
//     </motion.div>
//   )

//   if (link) {
//     return (
//       <a href={link} target="_blank" rel="noopener noreferrer">
//         {CardContent}
//       </a>
//     )
//   }

//   return CardContent
// }

"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { useEffect } from "react"

interface ContactInfoCardProps {
  icon: LucideIcon
  title: string
  content: string
  link?: string
  delay?: number
}

export function ContactInfoCard({ icon: Icon, title, content, link, delay = 0 }: ContactInfoCardProps) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.contact-info-card');
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
  }, []);

  const CardContent = (
    <>
      <style jsx global>{`
        .contact-info-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 1.5rem;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-info-card::before {
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
          background: radial-gradient(
            400px circle at var(--mouse-x) var(--mouse-y),
            rgba(59, 130, 246, 0.15),
            transparent 40%
          );
          z-index: 1;
        }

        .contact-info-card:hover::before {
          opacity: 1;
        }

        .contact-info-card > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="contact-info-card"
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{content}</p>
      </motion.div>
    </>
  )

  if (link) {
    return (
      <a href={link} className="block">
        {CardContent}
      </a>
    )
  }

  return CardContent
}