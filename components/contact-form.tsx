// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { AnimatedButton } from "@/components/animated-button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { motion } from "framer-motion"
// import { useToast } from "@/hooks/use-toast"
// import { Loader2 } from "lucide-react"

// const contactSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().optional(),
//   service: z.string().min(1, "Please select a service"),
//   budget: z.string().optional(),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// })

// type ContactFormData = z.infer<typeof contactSchema>

// export function ContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const { toast } = useToast()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     setValue,
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactSchema),
//   })

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true)

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     console.log("Form data:", data)

//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you within 24 hours.",
//     })

//     reset()
//     setIsSubmitting(false)
//   }

//   return (
//     <motion.form
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       onSubmit={handleSubmit(onSubmit)}
//       className="glass rounded-3xl p-8 md:p-12 space-y-6 border-2 border-gradient-to-br from-cyan-500 via-blue-500 to-purple-500"
//     >
//       <div className="space-y-2">
//         <Label htmlFor="name">Full Name *</Label>
//         <Input
//           id="name"
//           placeholder="John Doe"
//           {...register("name")}
//           className="bg-background/50 border-border/50 focus:border-primary transition-colors"
//         />
//         {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <Label htmlFor="email">Email Address *</Label>
//           <Input
//             id="email"
//             type="email"
//             placeholder="john@example.com"
//             {...register("email")}
//             className="bg-background/50 border-border/50 focus:border-primary transition-colors"
//           />
//           {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone Number</Label>
//           <Input
//             id="phone"
//             type="tel"
//             placeholder="+880-1301-807991"
//             {...register("phone")}
//             className="bg-background/50 border-border/50 focus:border-primary transition-colors"
//           />
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <Label htmlFor="service">Service Interested In *</Label>
//           <Select onValueChange={(value) => setValue("service", value)}>
//             <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary transition-colors">
//               <SelectValue placeholder="Select a service" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="custom-software">Custom Software Development</SelectItem>
//               <SelectItem value="mobile-app">Mobile App Development</SelectItem>
//               <SelectItem value="cloud">Cloud Solutions</SelectItem>
//               <SelectItem value="data-analytics">Data Analytics & AI</SelectItem>
//               <SelectItem value="ui-ux">UI/UX Design</SelectItem>
//               <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
//               <SelectItem value="web-dev">Web Development</SelectItem>
//               <SelectItem value="other">Other</SelectItem>
//             </SelectContent>
//           </Select>
//           {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="budget">Project Budget</Label>
//           <Select onValueChange={(value) => setValue("budget", value)}>
//             <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary transition-colors">
//               <SelectValue placeholder="Select budget range" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="under-10k">Under $10,000</SelectItem>
//               <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
//               <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
//               <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
//               <SelectItem value="over-100k">Over $100,000</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="message">Project Details *</Label>
//         <Textarea
//           id="message"
//           placeholder="Tell us about your project requirements..."
//           rows={6}
//           {...register("message")}
//           className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
//         />
//         {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
//       </div>

//       <AnimatedButton type="submit" size="lg" className="w-full" disabled={isSubmitting} showArrow>
//         {isSubmitting ? (
//           <>
//             <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//             Sending...
//           </>
//         ) : (
//           "Send Message"
//         )}
//       </AnimatedButton>
//     </motion.form>
//   )
// }


"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { AnimatedButton } from "@/components/animated-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, X, Mail, Phone, DollarSign, Briefcase, MessageSquare, User } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceLabels = {
  "custom-software": "Custom Software Development",
  "mobile-app": "Mobile App Development",
  "cloud": "Cloud Solutions",
  "data-analytics": "Data Analytics & AI",
  "ui-ux": "UI/UX Design",
  "cybersecurity": "Cybersecurity",
  "web-dev": "Web Development",
  "other": "Other"
}

const budgetLabels = {
  "under-10k": "Under $10,000",
  "10k-25k": "$10,000 - $25,000",
  "25k-50k": "$25,000 - $50,000",
  "50k-100k": "$50,000 - $100,000",
  "over-100k": "Over $100,000"
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form data:", data)

    setSubmittedData(data)
    setShowModal(true)
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })

    reset()
    setIsSubmitting(false)
  }

  const closeModal = () => {
    setShowModal(false)
    setSubmittedData(null)
  }

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
        className="glass rounded-3xl p-8 md:p-12 space-y-6 border-2 border-gradient-to-br from-cyan-500 via-blue-500 to-purple-500"
      >
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name")}
            className="bg-background/50 border-border/50 focus:border-primary transition-colors"
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className="bg-background/50 border-border/50 focus:border-primary transition-colors"
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+880-1301-807991"
              {...register("phone")}
              className="bg-background/50 border-border/50 focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="service">Service Interested In *</Label>
            <Select onValueChange={(value) => setValue("service", value)}>
              <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary transition-colors">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom-software">Custom Software Development</SelectItem>
                <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                <SelectItem value="cloud">Cloud Solutions</SelectItem>
                <SelectItem value="data-analytics">Data Analytics & AI</SelectItem>
                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                <SelectItem value="web-dev">Web Development</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Project Budget</Label>
            <Select onValueChange={(value) => setValue("budget", value)}>
              <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary transition-colors">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-10k">Under $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="over-100k">Over $100,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Project Details *</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your project requirements..."
            rows={6}
            {...register("message")}
            className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
        </div>

        <AnimatedButton type="submit" size="lg" className="w-full cursor-pointer" disabled={isSubmitting} showArrow>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </AnimatedButton>
      </motion.form>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && submittedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <X className="w-5 h-5 text-white/70 group-hover:text-white" />
              </button>

              {/* Success Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", duration: 0.8 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mb-4 shadow-lg"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-2"
                >
                  Message Sent Successfully!
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/80 text-lg"
                >
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </motion.p>
              </div>

              {/* Submitted Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-white/90 mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
                  Your Submission Details
                </h3>

                <div className="grid gap-4">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Full Name</p>
                      <p className="text-white font-medium">{submittedData.name}</p>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email Address</p>
                      <p className="text-white font-medium">{submittedData.email}</p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  {submittedData.phone && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Phone Number</p>
                        <p className="text-white font-medium">{submittedData.phone}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Service */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Service Interested In</p>
                      <p className="text-white font-medium">{serviceLabels[submittedData.service as keyof typeof serviceLabels]}</p>
                    </div>
                  </motion.div>

                  {/* Budget */}
                  {submittedData.budget && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500">
                        <DollarSign className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Project Budget</p>
                        <p className="text-white font-medium">{budgetLabels[submittedData.budget as keyof typeof budgetLabels]}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 mt-1">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60 text-sm mb-2">Project Details</p>
                        <p className="text-white leading-relaxed">{submittedData.message}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="pt-4"
                >
                  <button
                    onClick={closeModal}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Got it, thanks!
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
