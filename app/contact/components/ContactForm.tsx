'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button" // Assuming you have a Button component
import { submitContactForm } from '../actions'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(values)
      setSubmitSuccess(true)
      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      {submitSuccess ? (
        <div className="text-green-600 mb-4">Thank you for your message. We&apos;ll be in touch soon!</div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...form.register('name')}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
            />
            {form.formState.errors.name && (
              <span className="text-red-600 text-sm">{form.formState.errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              {...form.register('email')}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
            />
            {form.formState.errors.email && (
              <span className="text-red-600 text-sm">{form.formState.errors.email.message}</span>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              {...form.register('phone')}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
            />
            {form.formState.errors.phone && (
              <span className="text-red-600 text-sm">{form.formState.errors.phone.message}</span>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Subject of your message"
              {...form.register('subject')}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
            />
            {form.formState.errors.subject && (
              <span className="text-red-600 text-sm">{form.formState.errors.subject.message}</span>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              placeholder="Your message"
              {...form.register('message')}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
            />
            {form.formState.errors.message && (
              <span className="text-red-600 text-sm">{form.formState.errors.message.message}</span>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full mt-4">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  )
}
